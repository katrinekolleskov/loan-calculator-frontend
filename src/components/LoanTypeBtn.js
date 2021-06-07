import React from "react";
import "./LoanTypeBtn.scss";

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
      <h3>{type}</h3>
    </div>
  );
};

export default LoanTypeBtn;
