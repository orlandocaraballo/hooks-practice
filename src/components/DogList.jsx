import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../context/Title";

export default function DogList({ pups }) {
  const { setTitle } = useTitle();

  useEffect(() => setTitle("Dogs"));

  return (
    <ul>
      {pups.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/dogs/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}
