import React, { useMemo, useEffect } from "react";
import "./Results.scss";

/**
 * Results calculates the result and shows it. One thing I would have liked to change
 * with the whole code here is to have one component that calculates the result, and
 * Results.js is simply a view that shows the result. Right now, I have done a rather poor
 * practice with having both the calculation and the presentation in the same component.
 * A parent component could have calculated the result, or a context. Since this
 * is a small one-page application, I did a lazy solution.
 */

const Results = ({ userInput, interest }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /**
   * This is poor practice, but works for this small application. For a larger program,
   * I would have sent a function from a parent component (Calculator.js) that renders
   * either result or loanform based on a state. The state change could be invoked by
   * clicking the "go back"-button. It would also be necessary to clear the state in
   * Calculator (userinput).
   */

  const refreshPage = () => {
    window.location.reload();
  };

  const [installment, outstandingDebt, principal, interestRate] =
    useMemo(() => {
      const userAmount = userInput.amount;
      const calculatedInterest = interest / 100 / 12;
      const calculatedPayments = userInput.years * 12;

      const principal = userAmount / calculatedPayments;
      var outstandingDebt = parseInt(userAmount);

      const paybackPlanObj = {
        installment: [],
        outstandingDebt: [],
        interestRate: [],
      };

      for (var i = 0; i < calculatedPayments; i++) {
        var installment = principal + calculatedInterest * outstandingDebt;

        paybackPlanObj.interestRate.push(calculatedInterest * outstandingDebt);
        paybackPlanObj.installment.push(installment);
        outstandingDebt = outstandingDebt - principal;
        paybackPlanObj.outstandingDebt.push(outstandingDebt);
      }
      return [
        paybackPlanObj.installment,
        paybackPlanObj.outstandingDebt,
        principal,
        paybackPlanObj.interestRate,
      ];
    }, [userInput, interest]);

  return (
    <>
      <div className="refresh-button">
        <button onClick={refreshPage}>Generate a new plan</button>
      </div>
      <header className="results-header">
        <h1>Your payback plan</h1>
        <section className="overview-section">
          <h4>
            Loan amount: ${userInput.amount} <br />
            Interest: {interest} % <br />
          </h4>
          <h4>
            Years to repay: {userInput.years} <br />
            Type of loan: {userInput.type + " loan"}
          </h4>
        </section>
      </header>
      {/* Repetitive code. I could have created an object that had term,
       * installment, interest, outstanding debt and principal, and loop through
       * it with one map, instead.
       */}
      <span className="result-container">
        <ul>
          <h4>Term</h4>
          {outstandingDebt.map((e, i) => {
            return <li key={i}>{i + 1}</li>;
          })}
        </ul>
        <ul>
          <h4> Installment </h4>
          {installment.map((e, i) => {
            return <li key={i}>{e.toFixed(1)}</li>;
          })}
        </ul>
        <ul>
          <h4>Interest</h4>
          {interestRate.map((e, i) => {
            return <li key={i}>{e.toFixed(1)}</li>;
          })}
        </ul>
        <ul>
          <h4>Outstanding debt</h4>
          {outstandingDebt.map((e, i) => {
            return <li key={i}>{Math.abs(e.toFixed(1))}</li>;
          })}
        </ul>
        <ul>
          <h4> Principal</h4>
          {outstandingDebt.map((e, i) => {
            return <li key={i}>{principal.toFixed(1)}</li>;
          })}
        </ul>
      </span>
    </>
  );
};

export default Results;
