import React from "react";

const TextInput = ({ showText, value, handleTextInput, errors }) => {
  let classes = errors ? "form-control is-invalid" : "form-control";
  return showText.map((showatt, i) => {
    return (
      <div className="form-group" key={i}>
        <label htmlFor={showatt.name}>{showatt.label}</label>
        <input
          className={classes}
          id={showatt.name}
          type={showatt.type}
          name={showatt.name}
          placeholder={showatt.placeholder}
          value={value}
          onChange={handleTextInput}
        />
        {errors && (
          <div className="invalid-feedback">{showatt.validation_message}</div>
        )}
      </div>
    );
  });
};

export default TextInput;
