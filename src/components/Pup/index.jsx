import React from "react";
import { useState, useEffect, useContext } from "react";
import BackButton from "../BackButton/index.jsx";
import pups from "../pups.js";
import TitleContext from "../../context/Title.js";
import "./style.css";

const Pup = (props) => {
  const [pup, setPup] = useState({});
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle("Pup");
    setPup(pups[props.match.params.pupId - 1]);
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
};

export default Pup;
