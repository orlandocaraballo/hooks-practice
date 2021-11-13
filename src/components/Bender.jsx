import React, { useEffect } from "react";
import { useTitle } from "../context/Title";

export default function Bender() {
  const { setTitle } = useTitle();

  useEffect(() => setTitle("Bender"), []);

  return <img alt="Bender" src="bender.jpg" />;
}
