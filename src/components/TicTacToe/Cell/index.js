import React from "react";
import imgX from "../img_X.png"
import imgO from "../img_O.png"

const playerMark = (player) => {
  if (player === 'x') {
    return <img src={imgX} alt="X" />;
  }
  if (player === 'o') {
    return <img src={imgO} alt="O" />;
  }
  return null;
};

const Cell = ({num, value, handleClick}) => {
  return <td onClick={() => handleClick(num)}>{playerMark(value)}</td>;
};

export default Cell;