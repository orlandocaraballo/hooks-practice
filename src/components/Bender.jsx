import React, { useEffect, useContext } from "react";
import TitleContext from "../context/Title";

const Bender = () => {
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle("Bender");
  }, []);

  return <img alt="Bender" src="bender.jpg" />;
};

export default Bender;
