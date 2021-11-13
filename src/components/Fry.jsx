import React, { useEffect } from "react";
import { useTitle } from "../context/Title";

export default function Fry() {
  const { setTitle } = useTitle();

  useEffect(() => setTitle("Fry"), []);

  return <img alt="Fry" src="fry.png" />;
}
