import React from "react";

const EmailInput = ({ showEmail, value, handleEmailInput, errors }) => {
  let classes = errors ? "form-control is-invalid" : "form-control";
  return showEmail.map((showatt, i) => {
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
          onChange={handleEmailInput}
        />
        {errors && (
          <div className="invalid-feedback">{showatt.validation_message}</div>
        )}
      </div>
    );
  });
};

export default EmailInput;
