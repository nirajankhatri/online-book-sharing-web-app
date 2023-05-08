import React from "react";

const CTAButton = ({ label, onClick = null, classname = "" }) => {
  return (
    <button className={`btn CTAButton ${classname}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default CTAButton;
