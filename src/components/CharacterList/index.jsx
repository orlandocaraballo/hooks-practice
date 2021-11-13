import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../../context/Characters";
import { useTitle } from "../../context/Title";
import "./style.css";

export default function CharacterList({ loading }) {
  const { characters } = useCharacters();
  const { setTitle } = useTitle();

  useEffect(() => setTitle("Characters"), []);

  return loading ? (
    <div id="loading">Loading...</div>
  ) : (
    <ul>
      {characters.map(({ Name }, index) => (
        <li key={index}>
          <Link to={`/characters/${index + 1}`}>{Name}</Link>
        </li>
      ))}
    </ul>
  );
}
