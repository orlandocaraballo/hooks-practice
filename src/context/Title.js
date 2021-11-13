import React, { createContext, useState } from "react";

const TitleContext = createContext();

export function TitleProvider({ children }) {
  const [title, setTitle] = useState("Header Component");

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
}

export default TitleContext;
