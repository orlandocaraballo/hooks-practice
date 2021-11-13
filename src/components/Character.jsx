import React, { useContext } from "react";
import BackButton from "./BackButton.jsx";
import CharactersContext from "../contexts/CharactersContext.js";

const Character = ({ match }) => {
  const { characters } = useContext(CharactersContext);

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
