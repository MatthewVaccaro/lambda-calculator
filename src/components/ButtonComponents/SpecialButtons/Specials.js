import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  const [specs, setSpecs] = useState(specials);

  // STEP 2 - add the imported data to state
  /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

  return (
    <div className="specials">
      {specs.map(cv => {
        return <SpecialButton label={cv} key={cv} />;
      })}
    </div>
  );
};

export default Specials;
