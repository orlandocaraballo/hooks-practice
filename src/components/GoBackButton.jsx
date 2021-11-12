import React, { useContext } from "react";
import { useHistory } from "react-router";

const GoBackButton = () => {
  const history = useHistory();

  return <button onClick={() => history.goBack()}>Go Back</button>;
};

export default GoBackButton;
