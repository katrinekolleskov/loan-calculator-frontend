import React, { useMemo, useState } from "react";
import LoanTypeBtn from "./LoanTypeBtn";
import house from "../static/house.png";
import car from "../static/car.png";
import spending from "../static/spending.png";
import business from "../static/business.png";
import "./LoanForm.scss";

/**
 * LoanForm renders a <Form />. I did not want it to handle user-insput
 * since this is displayed in Result.js. Therefore it makes more sense
 * for the parent component (Calculator) to have the functions "handleInputChange"
 * and send it down to LoanForm.
 *
 * I useMemo here because activateSubmitBtn only changes value if userInput changes
 * value. This way it does not re-render unnecessarily.
 *
 * One thing I wanted to add here that I did not have time for, was input validation.
 * I do not check for negative values (such as negative years and amount). This could
 * have been a function that is initiated when clicking the submit-button.
 */

const LoanForm = ({
  userInput,
  handleSubmitValues,
  handleAmountInputChange,
  handleYearsInputChange,
  handleTypeInputChange,
}) => {
  const [submitBtnClicked, setSubmitBtnClicked] = useState(false);

  const activateSubmitBtn = useMemo(() => {
    return (
      userInput.amount === "" || userInput.years === "" || userInput.type === ""
    );
  }, [userInput]);

  return (
    <>
      <h1>Create a new payback plan</h1>
      <div className="form-container">
        <form onSubmit={handleSubmitValues}>
          <div className="form-items">
            <label id="amount" />
            <input
              className="input-field-number"
              type="number"
              name="amount"
              placeholder={
                userInput.amount
                  ? userInput.amount
                  : "How much do you wish to borrow? (ex. 50 000 kr)"
              }
              value={userInput.amount}
              onChange={handleAmountInputChange}
            />
            {submitBtnClicked && userInput.amount === "" && (
              <p>Amount cannot be empty</p>
            )}
            <label id="years" />
            <input
              className="input-field-number"
              type="number"
              name="years"
              placeholder={
                userInput.years
                  ? userInput.years
                  : "By when do you wish to pay it back? (ex. 12 years)"
              }
              value={userInput.years}
              onChange={handleYearsInputChange}
            />
            {submitBtnClicked && userInput.years === "" && (
              <p>Years cannot be empty</p>
            )}
            <span className="type-button-group">
              <LoanTypeBtn
                src={house}
                type="housing"
                onClick={handleTypeInputChange}
                active={userInput.type === "housing"}
              />
              <LoanTypeBtn
                src={car}
                type="car"
                onClick={handleTypeInputChange}
                active={userInput.type === "car"}
              />
              <LoanTypeBtn
                src={spending}
                type="spending"
                onClick={handleTypeInputChange}
                active={userInput.type === "spending"}
              />
              <LoanTypeBtn
                src={business}
                type="business"
                onClick={handleTypeInputChange}
                active={userInput.type === "business"}
              />
            </span>
            {submitBtnClicked && userInput.type === "" && (
              <p>Type of loan cannot be empty</p>
            )}
            <input
              type={!activateSubmitBtn ? "submit" : "button"}
              value="Generate"
              className={
                "submit-button" + (!activateSubmitBtn ? "" : " inactive")
              }
              onClick={() => setSubmitBtnClicked(true)}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default LoanForm;
