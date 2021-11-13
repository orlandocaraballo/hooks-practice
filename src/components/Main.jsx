import React from "react";
import Routes from "./Routes.jsx";
import { CharactersProvider } from "../context/Characters.js";

export default function Main() {
  return (
    <CharactersProvider>
      <main>
        <Routes />
      </main>
    </CharactersProvider>
  );
}
