import React, { useState } from "react";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file
import { numbers } from "../../../data";
import { NumberButton } from "./NumberButton";

export const Numbers = () => {
  // STEP 2 - add the imported data to state

  const [numArr, setNumArr] = useState(numbers);

  console.log(numArr);

  /* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass it any props needed
      by the child component*/
  return (
    <div className="numbers">
      {numArr.map(cv => {
        return <NumberButton label={cv} key={cv} />;
      })}
    </div>
  );
};
