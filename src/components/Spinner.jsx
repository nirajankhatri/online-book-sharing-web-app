import React from "react";

const Spinner = () => {
  return (
    <div className="lds-ellipsis-container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
