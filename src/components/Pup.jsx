import React from "react";
import { useState, useEffect } from "react";
import GoBackButton from "./GoBackButton.jsx";
import pups from "./pups.js";

const Pup = (props) => {
  console.log("props", props);

  const [pup, setPup] = useState({});

  useEffect(() => {
    setPup(pups[props.match.params.pupId - 1]);
  }, []);

  const { name, age, imageSrc } = pup;

  return (
    <>
      <h3>{name}</h3>
      <em>Age: {age}</em>
      <img src={`/${imageSrc}`} />
      <GoBackButton />
    </>
  );
};

export default Pup;
