import React, { useContext, useEffect } from "react";
import BackButton from "./BackButton/index.jsx";
import CharactersContext from "../context/Characters.js";
import TitleContext from "../context/Title.js";

const Character = ({ match }) => {
  const { characters } = useContext(CharactersContext);
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle("Character");
  }, []);

  if (characters.length === 0) {
    return <div>No content yet</div>;
  }

  const { Name, PicUrl } = characters[match.params.id - 1];

  return (
    <div>
      <h2>{Name}</h2>
      <img src={PicUrl} />
      <BackButton />
    </div>
  );
};

export default Character;
