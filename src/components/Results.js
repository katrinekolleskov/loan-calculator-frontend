import React, { useMemo } from "react";
import "./Results.scss";

const Results = ({ userValues, interest }) => {
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
      <h2>Type of loan: </h2>
      <h3>{userValues.type}</h3>
      <span className="result-container">
        <div>
          installment:
          {installment.map((e, i) => {
            return <ul key={i}>{e.toFixed(0)}</ul>;
          })}
        </div>
        <div>
          interestRate:
          {interestRate.map((e, i) => {
            return <ul key={i}>{e.toFixed(0)}</ul>;
          })}
        </div>
        <div>
          outstandingDebt:
          {outstandingDebt.map((e, i) => {
            return <ul key={i}>{Math.abs(e.toFixed(1))}</ul>;
          })}
        </div>
        <div>
          principal:
          {outstandingDebt.map((e, i) => {
            return <ul key={i}>{principal.toFixed(1)}</ul>;
          })}
        </div>
        <div>
          term:
          {outstandingDebt.map((e, i) => {
            return <ul key={i}>{i + 1}</ul>;
          })}
        </div>
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
