import React, { useState, createContext } from "react";

const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  return (
    <CharactersContext.Provider value={useState([])}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContext;
