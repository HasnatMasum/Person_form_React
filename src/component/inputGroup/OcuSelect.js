import React from "react";

const OcupationSelect = ({
  showOccu,
  options,
  value,
  handleSelect,
  errors
}) => {
  let classes = errors ? "custom-select is-invalid" : "custom-select";

  return showOccu.length !== 0 ? (
    <div className="form-group">
      <label htmlFor={showOccu[0].name}>{showOccu[0].label}</label>
      <select className={classes} id={showOccu[0].name} onChange={handleSelect}>
        <option value={value}>{showOccu[0].placeholder}</option>
        {Object.entries(options[0]).map(([key, val]) => (
          <option key={key} value={key}>
            {val}
          </option>
        ))}
        {errors && (
          <div className="invalid-feedback">
            {showOccu[0].validation_message}
          </div>
        )}
      </select>
    </div>
  ) : (
    ""
  );
};

export default OcupationSelect;
