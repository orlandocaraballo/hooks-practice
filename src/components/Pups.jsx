import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import TitleContext from "../context/Title";

const Pups = ({ pups }) => {
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle("Pups");
  });

  return (
    <ul>
      {pups.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/pups/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Pups;
