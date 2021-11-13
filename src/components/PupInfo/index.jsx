import React from "react";
import { useState, useEffect } from "react";
import BackButton from "../BackButton/index.jsx";
import pups from "../pups.js";
import { useTitle } from "../../context/Title.js";
import "./style.css";

export default function PupInfo(props) {
  const [pup, setPup] = useState({});
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("Pup");
    setPup(pups[props.match.params.id - 1]);
  }, []);

  const { name, age, imageSrc } = pup;

  return (
    <div className="pup">
      <h3>{name}</h3>
      <em>Age: {age}</em>
      <img src={`/${imageSrc}`} />
      <BackButton />
    </div>
  );
}
