import React from "react";

const FileInputField = ({ accept, name, onChange }) => {
  return (
    <div className="inputField-group">
      <label htmlFor={name}>{name}</label>
      <input
        type="file"
        id={name}
        accept={accept}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default FileInputField;
