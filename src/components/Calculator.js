import React, { useState } from "react";
import LoanForm from "./LoanForm";

const Calculator = (interest) => {
  const [userValues, setUserValues] = useState({
    amount: "",
    years: "",
  });

  return (
    <div>
      <LoanForm userValues={userValues} />
    </div>
  );
};

export default Calculator;
