import React, { useState } from "react";
import LoanForm from "./LoanForm";

const Calculator = ({ interest }) => {
  const [userValues, setUserValues] = useState({
    amount: "",
    years: "",
  });

  const handleSubmitValues = (e) => {
    e.preventDefault();
    console.log("uservalues:", userValues);
    /* if (isValid()) {
      setError("");
      calculateResults(userValues);
    } */
  };

  const handleAmountInputChange = (event) =>
    setUserValues({ ...userValues, amount: event.target.value });

  const handleYearsInputChange = (event) =>
    setUserValues({ ...userValues, years: event.target.value });

  /*
    There's one thing we need to do first though. On form submission, the default behaviour is to reload/redirect the page. 
    To avoid this, we need to call the preventDefault() method on the event.
    */

  return (
    <div>
      <LoanForm
        userValues={userValues}
        handleSubmitValues={handleSubmitValues}
        handleAmountInputChange={handleAmountInputChange}
        handleYearsInputChange={handleYearsInputChange}
      />
    </div>
  );
};

export default Calculator;
