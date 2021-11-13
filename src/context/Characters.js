import React, { useState, createContext } from "react";

const CharactersContext = createContext();

export function CharactersProvider({ children }) {
  const [characters, setCharacters] = useState([]);

  return (
    <CharactersContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
}

export default CharactersContext;
