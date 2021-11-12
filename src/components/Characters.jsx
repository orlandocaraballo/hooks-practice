import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CharactersContext from "../contexts/CharactersContext";

const Characters = ({ loading }) => {
  const [characters] = useContext(CharactersContext);

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
};

export default Characters;
