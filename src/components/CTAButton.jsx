import React from "react";

const CTAButton = ({ label, onClickHandler }) => {
  return <button className="btn CTAButton" onClick={onClickHandler}>{label}</button>;
};

export default CTAButton;
