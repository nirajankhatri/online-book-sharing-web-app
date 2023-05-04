import React from "react";

const SideBarToggleBtn = () => {
  const onToggleHandle = (e) => {};
  return (
    <div className="toggle-container">
      <input id="menu-toggle" type="checkbox" onChange={onToggleHandle} />
      <label className="menu-btn" htmlFor="menu-toggle">
        <span></span>
      </label>
    </div>
  );
};

export default SideBarToggleBtn;
