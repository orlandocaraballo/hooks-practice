import React from "react";
import Routes from "./Routes.jsx";
import { CharactersProvider } from "../contexts/CharactersContext.js";

const Main = () => (
  <CharactersProvider>
    <main>
      <Routes />
    </main>
  </CharactersProvider>
);

export default Main;
