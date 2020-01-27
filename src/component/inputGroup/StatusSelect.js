import React from "react";

const StatusSelect = ({ showStat, options, handleRadio, errors }) => {
  let classes = errors
    ? "custom-control-input is-invalid"
    : "custom-control-input";

  return showStat.length !== 0 ? (
    <div className="form-group">
      <label>{showStat[0].label}</label>
      <div className="custom-control custom-radio mb-3">
        {Object.entries(options[0]).map(([key, val]) => (
          <div key={key}>
            <input
              type={showStat[0].type}
              className={classes}
              id={key}
              name={showStat[0].name}
              value={val}
              onChange={handleRadio}
            />
            <label className="custom-control-label" htmlFor={key}>
              {val}
            </label>
          </div>
        ))}

        {errors && (
          <div className="invalid-feedback">
            {showStat[0].validation_message}
          </div>
        )}
      </div>
    </div>
  ) : (
    ""
  );
};

export default StatusSelect;
