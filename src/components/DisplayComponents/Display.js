import React from "react";

const Display = ({ totalValue }) => {
  return (
    <div className="display">
      {" "}
      <div className="displayDigit">{totalValue}</div>
    </div>
  );
};

export default Display;
