import React from "react";

const NumberButton = ({ name, symbol, setDisplay, display }) => {
  const buttonClick = () => {
    setDisplay(display + symbol);
  };
  const buttonValue = `number-button ${name}`;
  return (
    <div className={buttonValue} onClick={() => buttonClick()}>
      {symbol}
    </div>
  );
};

export default NumberButton;
