import React, { useState, createContext, useContext } from "react";

const CharactersContext = createContext();

export function useCharacters() {
  return useContext(CharactersContext);
}

export function CharactersProvider({ children }) {
  const [characters, setCharacters] = useState([]);

  return (
    <CharactersContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
}

export default CharactersContext;
