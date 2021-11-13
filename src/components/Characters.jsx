import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CharactersContext from "../context/Characters";
import TitleContext from "../context/Title";

const Characters = ({ loading }) => {
  const { characters } = useContext(CharactersContext);
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle("Characters");
  }, []);

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
