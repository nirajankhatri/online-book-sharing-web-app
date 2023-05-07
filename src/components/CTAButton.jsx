import React from "react";

const CTAButton = ({ label, onClickHandler, classname = "" }) => {
  return <button className={`btn CTAButton ${classname}`}  onClick={onClickHandler}>{label}</button>;
};

export default CTAButton;
