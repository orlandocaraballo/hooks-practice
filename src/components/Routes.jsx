import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import axios from "axios";
import Home from "./Home.jsx";
import Bender from "./Bender.jsx";
import Fry from "./Fry.jsx";
import DogList from "./DogList.jsx";
import DogInfo from "./DogInfo/index.jsx";
import CharacterList from "./CharacterList/index.jsx";
import CharacterInfo from "./CharacterInfo.jsx";
import { useCharacters } from "../context/Characters.js";
import dogs from "./dogs.js";

export default function Routes() {
  const [loading, setLoading] = useState(false);
  const { setCharacters } = useCharacters();

  useEffect(() => {
    setLoading(true);

    async function loadCharacters() {
      const { data } = await axios.get(
        "http://futuramaapi.herokuapp.com/api/v2/characters"
      );

      setCharacters(data);
      setLoading(false);
    }

    loadCharacters();
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/fry" component={Fry} />
      <Route path="/bender" component={Bender} />
      <Route exact path="/dogs">
        <DogList pups={dogs} />
      </Route>
      <Route path="/dogs/:id" component={DogInfo} />
      <Route exact path="/characters">
        <CharacterList loading={loading} />
      </Route>
      <Route path="/characters/:id" component={CharacterInfo} />
    </Switch>
  );
}
