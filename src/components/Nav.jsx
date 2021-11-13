import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      {/* 
        Definition: Link components generate html links for you. The "to" attribute
          dictates where browser will navigate to when you clicking on the link. The content
          of the Link dictates the html link text.
          https://v5.reactrouter.com/web/api/Link
      */}
      <Link to="/">Home</Link>
      <Link to="/fry">Fry</Link>
      <Link to="/bender">Bender</Link>
      <Link to="/pups">Pups</Link>
      <Link to="/characters">Characters</Link>
    </nav>
  );
}
