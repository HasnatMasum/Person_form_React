import React from "react";

const InternatStatus = ({
  showInter,
  options,
  value,
  handleIntSelect,
  errors
}) => {
  let classes = errors ? "custom-select is-invalid" : "custom-select";

  return showInter.length !== 0 ? (
    <div className="form-group">
      <label htmlFor={showInter[0].name}>{showInter[0].label}</label>
      <select
        className={classes}
        id={showInter[0].name}
        onChange={handleIntSelect}
      >
        <option value={value}>Select {showInter[0].label}</option>
        {Object.entries(options[0]).map(([key, val]) => (
          <option key={key} value={key}>
            {val}
          </option>
        ))}
        {errors && (
          <div className="invalid-feedback">
            {showInter[0].validation_message}
          </div>
        )}
      </select>
    </div>
  ) : (
    ""
  );
};

export default InternatStatus;
