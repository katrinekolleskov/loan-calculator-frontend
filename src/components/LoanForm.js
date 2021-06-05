import React from "react";

const LoanForm = (userValues) => {
  return (
    <div className="form">
      <div className="form-items">
        <div>
          <label id="label">Amount:</label>
          <input
            type="text"
            name="amount"
            placeholder="Loan amount"
            value={userValues.amount}
            // onChange method sets the values given by the user as input to the userValues state
            // onChange={handleInputChange}
          />
        </div>

        <div>
          <label id="label">Years:</label>
          <input
            type="text"
            name="years"
            placeholder="Years to repay"
            value={userValues.years}
            // onChange={handleInputChange}
          />
        </div>
        <input type="submit" className="button" />
      </div>
    </div>
  );
};

export default LoanForm;
