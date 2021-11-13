import React, { useEffect } from "react";
import BackButton from "./BackButton/index.jsx";
import { useCharacters } from "../context/Characters.js";
import { useTitle } from "../context/Title.js";

export default function Character({ match }) {
  const { characters } = useCharacters();
  const { setTitle } = useTitle();

  useEffect(() => setTitle("Character"), []);

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
}
