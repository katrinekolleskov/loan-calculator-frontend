import React from "react";
import "./LoanTypeBtn.scss";

const LoanTypeBtn = ({ src, type, onClick }) => {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          onClick(type);
        }}
      >
        <img src={src} alt={type + "-logo"} />
      </button>
      <h3>{type}</h3>
    </>
  );
};

export default LoanTypeBtn;
