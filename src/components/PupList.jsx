import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../context/Title";

export default function PupList({ pups }) {
  const { setTitle } = useTitle();

  useEffect(() => setTitle("Pups"));

  return (
    <ul>
      {pups.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/pups/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}
