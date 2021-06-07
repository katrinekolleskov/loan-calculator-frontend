import React from "react";
import "./LoanTypeBtn.scss";

/**
 * LoanTypeBtn acts as a single radio-button.
 * the reason I went the "long way" to create a custom radio-button
 * is because styling a radio-button (<input type="radio" />) is time-consuming.
 * One change I'd like to add is to have a radio-button container-component.
 * So that Calculation.js renders a RadioButtonContainer that includes LoanTypeBtn.
 * This is more nice code reading-wise, and also makes it more similar to <input type="radio" />.
 */

const LoanTypeBtn = ({ src, type, onClick, active }) => {
  return (
    <div className={"type-button-container" + (active ? " active" : "")}>
      <button
        type="button"
        onClick={() => {
          onClick(type);
        }}
      >
        <img src={src} alt={type + "-logo"} />
      </button>
      <h3>{type + " loan"}</h3>
    </div>
  );
};

export default LoanTypeBtn;
