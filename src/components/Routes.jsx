import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import axios from "axios";
import Home from "./Home.jsx";
import Bender from "./Bender.jsx";
import Fry from "./Fry.jsx";
import PupList from "./PupList.jsx";
import PupInfo from "./PupInfo/index.jsx";
import CharacterList from "./CharacterList/index.jsx";
import Character from "./Character.jsx";
import { useCharacters } from "../context/Characters.js";
import pups from "./pups.js";

export default function Routes() {
  const [loading, setLoading] = useState(false);
  const { setCharacters } = useCharacters();

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
      <Route exact path="/pups">
        <PupList pups={pups} />
      </Route>
      <Route path="/pups/:id" component={PupInfo} />
      <Route exact path="/characters">
        <CharacterList loading={loading} />
      </Route>
      <Route path="/characters/:id" component={Character} />
    </Switch>
  );
}
