import React, { useContext, useEffect } from "react";
import TitleContext, { TitleProvider } from "../context/Title";

const Fry = () => {
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle("Fry");
  }, []);

  return <img alt="Fry" src="fry.png" />;
};

export default Fry;
