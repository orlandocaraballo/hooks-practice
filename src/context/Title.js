import React, { createContext, useState, useContext } from "react";

const TitleContext = createContext();

export function useTitle() {
  return useContext(TitleContext);
}

export function TitleProvider({ children }) {
  const [title, setTitle] = useState("Header Component");

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
}

export default TitleContext;
