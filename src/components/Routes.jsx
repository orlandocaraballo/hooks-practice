import React, { useState, useEffect, useContext } from "react";
import { Switch, Route } from "react-router";
import axios from "axios";
import Home from "./Home.jsx";
import Bender from "./Bender.jsx";
import Fry from "./Fry.jsx";
import Pups from "./Pups.jsx";
import Pup from "./Pup.jsx";
import Characters from "./Characters.jsx";
import Character from "./Character.jsx";
import CharactersContext from "../contexts/CharactersContext.js";
import pups from "./pups.js";

const Routes = () => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useContext(CharactersContext);

  useEffect(() => {
    setLoading(true);

    const loadCharacters = async () => {
      const { data } = await axios.get(
        "http://futuramaapi.herokuapp.com/api/v2/characters"
      );

      setCharacters(data);
      setLoading(false);
    };

    loadCharacters();
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/fry" component={Fry} />
      <Route path="/bender" component={Bender} />
      <Route
        exact
        path="/pups"
        render={(props) => <Pups {...props} pups={pups} />}
      />
      <Route path="/pups/:pupId" component={Pup} />
      <Route
        exact
        path="/characters"
        render={(props) => (
          <Characters {...props} characters={characters} loading={loading} />
        )}
      />
      <Route
        path="/characters/:id"
        render={(props) => <Character {...props} characters={characters} />}
      />
    </Switch>
  );
};

export default Routes;
