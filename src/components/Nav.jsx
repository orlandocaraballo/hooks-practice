import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/fry">Fry</Link>
      <Link to="/bender">Bender</Link>
      <Link to="/pups">Pups</Link>
      <Link to="/characters">Characters</Link>
    </nav>
  );
}
