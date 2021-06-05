import React, { useMemo } from "react";
import "./LoanForm.scss";

const LoanForm = ({
  userValues,
  handleSubmitValues,
  handleAmountInputChange,
  handleYearsInputChange,
  handleTypeInputChange,
}) => {
  const activateSubmitBtn = useMemo(() => {
    console.log(":", userValues);
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
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={handleTypeInputChange}
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={handleTypeInputChange}
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                onChange={handleTypeInputChange}
              />
              <label htmlFor="other">Other</label>
            </div>
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
