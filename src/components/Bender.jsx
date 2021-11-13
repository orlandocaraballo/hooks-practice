import React, { useEffect, useContext } from "react";
import TitleContext from "../context/Title";

export default function Bender() {
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle("Bender");
  }, []);

  return <img alt="Bender" src="bender.jpg" />;
}
