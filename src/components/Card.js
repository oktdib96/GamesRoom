import React, { useState, useEffect } from "react";
const Card = (props) => {
  const [state, setState] = useState("");
  const handleChooseCard = () => {
    setState("");
  };
  const changeState = () => {
    setState("square");
  };
  useEffect(() => setTimeout(changeState, 1000), []);

  return (
    <div
      onClick={handleChooseCard}
      className={`${state} ${props.content}`}
    ></div>
  );
};

export default Card;
