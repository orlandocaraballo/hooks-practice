import React from "react";
import { useHistory } from "react-router";
import "./style.css";

export default function BackButton() {
  const history = useHistory();

  return <button onClick={() => history.goBack()}>Go Back</button>;
}
