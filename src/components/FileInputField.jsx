import React from "react";

const FileInputField = ({ accept, name, onChange, value }) => {
  return (
    <div className="inputField-group">
      <label htmlFor={name}>{name}</label>
      <input
        type="file"
        id={name}
        accept={accept}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default FileInputField;
