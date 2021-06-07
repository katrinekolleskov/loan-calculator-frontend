import React, { useMemo, useState } from "react";
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
  const [error, setError] = useState({
    amount: "",
    years: "",
    type: "",
  });

  const [submitBtnClicked, setSubmitBtnClicked] = useState(false);

  /*
  var formIsValid = useMemo(() => {
    if (
      // Change to error
      userValues.amount !== "" &&
      userValues.years !== "" &&
      userValues.type !== ""
    ) {
      return true;
    }
    return false;
  }, [userValues]);

  console.log("form is valid: ", formIsValid);*/

  const activateSubmitBtn = useMemo(() => {
    return (
      userValues.amount === "" ||
      userValues.years === "" ||
      userValues.type === ""
    );
  }, [userValues]);

  const handleValidation = () => {
    // Buggy

    if (userValues.amount === "") {
      setError({ ...error, amount: "Amount cannot be empty." });
    }

    if (userValues.years === "") {
      // formIsValid = false;
      setError({ ...error, years: "Years cannot be empty." });
    }

    if (userValues.type === "") {
      // formIsValid = false;
      setError({ ...error, type: "Type cannot be empty." });
    }
  };

  return (
    <>
      <h1>Create a new payback plan</h1>
      <div className="form-container">
        <form onSubmit={handleSubmitValues}>
          <div className="form-items">
            <label id="amount" />
            <input
              className="input-field-number"
              type="number" // note
              name="amount"
              placeholder={
                userValues.amount
                  ? userValues.amount
                  : "How much do you wish to borrow? (ex. 50 000 kr)"
              }
              value={userValues.amount}
              onChange={handleAmountInputChange}
            />
            {submitBtnClicked && userValues.amount === "" && (
              <p>Amount cannot be empty</p>
            )}
            <label id="years" />
            <input
              className="input-field-number"
              type="number" // Note
              name="years"
              placeholder={
                userValues.years
                  ? userValues.years
                  : "By when do you wish to pay it back? (ex. 12 years)"
              }
              value={userValues.years}
              onChange={handleYearsInputChange}
            />
            {submitBtnClicked && userValues.years === "" && (
              <p>Years cannot be empty</p>
            )}
            <span className="type-button-group">
              <LoanTypeBtn
                src={logo}
                type="housing"
                onClick={handleTypeInputChange}
                active={userValues.type === "housing"}
              />
              <LoanTypeBtn
                src={logo}
                type="car"
                onClick={handleTypeInputChange}
                active={userValues.type === "car"}
              />
              <LoanTypeBtn
                src={logo}
                type="spending"
                onClick={handleTypeInputChange}
                active={userValues.type === "spending"}
              />
              <LoanTypeBtn
                src={logo}
                type="business"
                onClick={handleTypeInputChange}
                active={userValues.type === "business"}
              />
            </span>
            {submitBtnClicked && userValues.type === "" && (
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
