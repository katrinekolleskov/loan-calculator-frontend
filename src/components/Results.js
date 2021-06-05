import React, { useState, useEffect } from "react";

const Results = ({ userValues, interest }) => {
  const [results, setResults] = useState({
    monthlyPayment: "",
    totalPayment: "",
    totalInterest: "",
    isResult: false, // Not necessary
  });

  useEffect(() => {
    const userAmount = userValues.amount;
    const calculatedInterest = interest / 100 / 12;
    const calculatedPayments = userValues.years * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (userAmount * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      const monthlyPaymentCalculated = monthly.toFixed(2);
      const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);
      const totalInterestCalculated = (
        monthly * calculatedPayments -
        userAmount
      ).toFixed(2);

      // Set up results to the state to be displayed to the user
      setResults({
        monthlyPayment: monthlyPaymentCalculated,
        totalPayment: totalPaymentCalculated,
        totalInterest: totalInterestCalculated,
        isResult: true,
      });
    }
  }, [userValues, interest]);

  return (
    <div>
      <div>
        <h4>
          Loan amount: ${userValues.amount} <br />
          Interest:{interest}% <br />
          Years to repay: {userValues.years}
        </h4>
        <div>
          <label>Monthly Payment:</label>
          <input type="text" value={results.monthlyPayment} disabled />
        </div>
        <div>
          <label>Total Payment: </label>
          <input type="text" value={results.totalPayment} disabled />
        </div>
        <div>
          <label>Total Interest:</label>
          <input type="text" value={interest} disabled />
        </div>
      </div>
    </div>
  );
};

export default Results;
