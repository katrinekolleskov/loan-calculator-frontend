import React, { useState } from "react";
import LoanForm from "./LoanForm";
import Results from "./Results";

/**
 * Calculator controls most of the code. I wanted this to be the single source of truth.
 * The rendering of either LoanForm or Results works for now, but scales poorly.
 */

/** Interest is a constant, so I have it outside of App.
 * This is where I could include other interests for example
 * car loan, etc.
 */

const interest = 3.5;

const Calculator = () => {
  const [userInput, setUserValues] = useState({
    amount: "",
    years: "",
    type: "",
  });

  const [submit, setSubmit] = useState(false);

  const handleSubmitValues = (e) => {
    setSubmit(true);
  };

  const handleAmountInputChange = (event) =>
    setUserValues({ ...userInput, amount: event.target.value });

  const handleYearsInputChange = (event) =>
    setUserValues({ ...userInput, years: event.target.value });

  const handleTypeInputChange = (type) => {
    setUserValues({ ...userInput, type: type });
  };

  return (
    <>
      {!submit ? (
        <LoanForm
          userInput={userInput}
          handleSubmitValues={handleSubmitValues}
          handleAmountInputChange={handleAmountInputChange}
          handleYearsInputChange={handleYearsInputChange}
          handleTypeInputChange={handleTypeInputChange}
        />
      ) : (
        <Results userInput={userInput} interest={interest} />
      )}
    </>
  );
};

export default Calculator;
