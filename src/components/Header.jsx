import React, { useContext } from "react";
import Nav from "./Nav.jsx";
import TitleContext from "../context/Title.js";

const Header = () => {
  const { title } = useContext(TitleContext);

  return (
    <header>
      <Nav />
      <h2>{title}</h2>
    </header>
  );
};

export default Header;
