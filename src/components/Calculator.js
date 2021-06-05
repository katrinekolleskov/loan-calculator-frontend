import React, { useState } from "react";
import LoanForm from "./LoanForm";
import Results from "./Results";

const Calculator = ({ interest }) => {
  const [userValues, setUserValues] = useState({
    amount: "",
    years: "",
    type: "",
  });

  const [submit, setSubmit] = useState(false); // Necessary?

  const handleSubmitValues = (e) => {
    e.preventDefault();
    console.log("uservalues:", userValues);
    setSubmit(true);
  };

  const handleAmountInputChange = (event) =>
    setUserValues({ ...userValues, amount: event.target.value });

  const handleYearsInputChange = (event) =>
    setUserValues({ ...userValues, years: event.target.value });

  const handleTypeInputChange = (event) => {
    setUserValues({ ...userValues, type: event.target.value });
  };

  /*
    There's one thing we need to do first though. On form submission, the default behaviour is to reload/redirect the page. 
    To avoid this, we need to call the preventDefault() method on the event.
    */

  return (
    <>
      {!submit ? (
        <LoanForm
          userValues={userValues}
          handleSubmitValues={handleSubmitValues}
          handleAmountInputChange={handleAmountInputChange}
          handleYearsInputChange={handleYearsInputChange}
          handleTypeInputChange={handleTypeInputChange}
        />
      ) : (
        <Results userValues={userValues} interest={interest} />
      )}
    </>
  );
};

export default Calculator;
