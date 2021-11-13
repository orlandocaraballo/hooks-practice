import React, { useContext } from "react";
import Nav from "./Nav.jsx";
import TitleContext from "../context/Title.js";

export default function Header() {
  const { title } = useContext(TitleContext);

  return (
    <header>
      <Nav />
      <h2>{title}</h2>
    </header>
  );
}
