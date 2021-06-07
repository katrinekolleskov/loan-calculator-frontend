import React, { useMemo, useEffect } from "react";
import "./Results.scss";

const Results = ({ userValues, interest }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [installment, outstandingDebt, principal, interestRate] =
    useMemo(() => {
      const userAmount = userValues.amount;
      const calculatedInterest = interest / 100 / 12;
      const calculatedPayments = userValues.years * 12;

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
    }, [userValues, interest]);

  return (
    <>
      <header className="results-header">
        <h1>Your payback plan</h1>
        <section className="overview-section">
          <h4>
            Loan amount: ${userValues.amount} <br />
            Interest:{interest}% <br />
          </h4>
          <h4>
            Years to repay: {userValues.years} <br />
            Type of loan: {userValues.type}
          </h4>
        </section>
      </header>
      <span className="result-container">
        <span>
          <h4>term</h4>
          {outstandingDebt.map((e, i) => {
            return <p key={i}>{i + 1}</p>;
          })}
        </span>
        <span>
          <h4> installment </h4>
          {installment.map((e, i) => {
            return <p key={i}>{e.toFixed(0)}</p>;
          })}
        </span>
        <span>
          <h4>interestRate</h4>
          {interestRate.map((e, i) => {
            return <p key={i}>{e.toFixed(0)}</p>;
          })}
        </span>
        <span>
          <h4>outstandingDebt</h4>
          {outstandingDebt.map((e, i) => {
            return <p key={i}>{Math.abs(e.toFixed(1))}</p>;
          })}
        </span>
        <span>
          <h4> principal</h4>
          {outstandingDebt.map((e, i) => {
            return <p key={i}>{principal.toFixed(1)}</p>;
          })}
        </span>

        {/*<div>
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
      <div>*/}
        {/*payBackPlan?.map((content) => {
          return (
            <span>
              <li>{content}</li>
            </span>
          );
        })*/}
      </span>
    </>
  );
};

export default Results;
