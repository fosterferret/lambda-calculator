import React from "react";
import { numbers } from "../../../data";
import NumberButton from "../NumberButtons/NumberButton";

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [setNumbers] = useState(numbers);
  return (
    <div className="numbers-container">
    { setNumbers.map((num, index) => { 
      index !== 9 
      ?
      <NumberButton key={ index } symbol={ num } setDisplay={ setDisplay } display={ display } /> 
      : 
      <NumberButton key={ index } symbol={ num } name='zero-button' 
      setDisplay={ setDisplay } display={ display } /> 
    })}
  </div>
  );
};

export default Numbers;