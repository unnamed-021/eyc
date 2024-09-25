import React from "react";

const CheckboxComponent = ({ checked, onChange, label, disabled }) => {
  return (
    <label class="checkbox" style={{ width: 170 }}>
      <input
        type="checkbox"
        name="checkbox"
        onChange={onChange}
        disabled={disabled}
        checked={checked}
      />{" "}
      {label} <span></span>
    </label>
  );
};

export default CheckboxComponent;
