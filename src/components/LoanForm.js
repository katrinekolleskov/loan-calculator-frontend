import React, { useMemo } from "react";
import LoanTypeBtn from "./LoanTypeBtn";
import logo from "../static/logo192.png";
import "./LoanForm.scss";

const LoanForm = ({
  userValues,
  handleSubmitValues,
  handleAmountInputChange,
  handleYearsInputChange,
  handleTypeInputChange,
}) => {
  const activateSubmitBtn = useMemo(() => {
    return (
      userValues.amount === "" ||
      userValues.years === "" ||
      userValues.type === ""
    );
  }, [userValues]);

  return (
    <>
      <h1>Create a new payback plan</h1>
      <div className="form">
        <form onSubmit={handleSubmitValues}>
          <div className="form-items">
            <div>
              <label id="label">Amount:</label>
              <input
                type="number" // note
                name="amount"
                placeholder={userValues.amount}
                value={userValues.amount}
                onChange={handleAmountInputChange}
              />
            </div>
            <div>
              <label id="label">Years:</label>
              <input
                type="number" // Note
                name="years"
                placeholder="Years to repay"
                value={userValues.years}
                onChange={handleYearsInputChange}
              />
            </div>
            <span>
              <LoanTypeBtn
                src={logo}
                type="housing"
                onClick={handleTypeInputChange}
              />
              <LoanTypeBtn
                src={logo}
                type="car"
                onClick={handleTypeInputChange}
              />
              <LoanTypeBtn
                src={logo}
                type="spending"
                onClick={handleTypeInputChange}
              />
              <LoanTypeBtn
                src={logo}
                type="business"
                onClick={handleTypeInputChange}
              />
            </span>
            {/* <span className="loantype-radio-btn">
              <div>
                <div
                  className={
                    "radio-btn-container" +
                    (userValues.type === "housing" ? "" : " inactive")
                  }
                >
                  <input
                    type="radio"
                    id="housing"
                    name="loanType"
                    value="housing"
                    onChange={handleTypeInputChange}
                  />
                </div>
                <label htmlFor="male">Housing loan</label>
              </div>
              <input
                type="radio"
                id="car"
                name="loanType"
                value="car"
                onChange={handleTypeInputChange}
              />
              <label htmlFor="female">Car loan</label>
              <input
                type="radio"
                id="spending"
                name="loanType"
                value="spending"
                onChange={handleTypeInputChange}
              />

              <label htmlFor="other">Spending loan</label>
              <input
                type="radio"
                id="business"
                name="loanType"
                value="business"
                onChange={handleTypeInputChange}
              />

              <label htmlFor="male">Business loan</label>
            </span> */}
            <input
              type="submit"
              className={
                "submit-button" + (!activateSubmitBtn ? "" : " inactive")
              }
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default LoanForm;
