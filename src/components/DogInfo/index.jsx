import React from "react";
import { useState, useEffect } from "react";
import BackButton from "../BackButton/index.jsx";
import pups from "../dogs.js";
import { useTitle } from "../../context/Title.js";
import "./style.css";

export default function DogInfo(props) {
  const [pup, setDog] = useState({});
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("Dog");
    setDog(pups[props.match.params.id - 1]);
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
