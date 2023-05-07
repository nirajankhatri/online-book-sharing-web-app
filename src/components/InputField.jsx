import React from "react";

const InputField = ({ type, placeholder, name, value, onChange }) => {
  return (
    <div className="inputField-group">
      <label htmlFor={name}>{name}</label>
      <input
        className="inputField"
        id={name}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
