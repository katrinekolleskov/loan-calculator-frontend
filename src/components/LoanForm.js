import React from "react";

const LoanForm = ({
  userValues,
  handleSubmitValues,
  handleAmountInputChange,
  handleYearsInputChange,
}) => {
  return (
    <div className="form">
      <form onSubmit={handleSubmitValues}>
        <div className="form-items">
          <div>
            <label id="label">Amount:</label>
            <input
              type="text"
              name="amount"
              placeholder={userValues.amount}
              value={userValues.amount}
              onChange={handleAmountInputChange}
            />
          </div>

          <div>
            <label id="label">Years:</label>
            <input
              type="text"
              name="years"
              placeholder="Years to repay"
              value={userValues.years}
              onChange={handleYearsInputChange}
            />
          </div>
          <input type="submit" className="button" />
        </div>
      </form>
    </div>
  );
};

export default LoanForm;
