import React, { useState } from "react";

//import any components needed

import { operators } from "../../../data";

import { OperatorButton } from "../../ButtonComponents/OperatorButtons/OperatorButton.js";

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state

  const [opArr, setOpArr] = useState(operators);

  /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
  return (
    <div className="operators">
      {opArr.map(cv => {
        return <OperatorButton label={cv} key={cv.char} />;
      })}
    </div>
  );
};
export default Operators;
