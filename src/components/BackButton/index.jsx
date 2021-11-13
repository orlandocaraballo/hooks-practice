import React from "react";
import { useHistory } from "react-router";
import "./style.css";

const BackButton = () => {
  const history = useHistory();

  return <button onClick={() => history.goBack()}>Go Back</button>;
};

export default BackButton;
