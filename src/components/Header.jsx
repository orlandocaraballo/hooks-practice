import React from "react";
import Nav from "./Nav.jsx";
import { useTitle } from "../context/Title.js";

export default function Header() {
  const { title } = useTitle();

  return (
    <header>
      <Nav />
      <h2>{title}</h2>
    </header>
  );
}
