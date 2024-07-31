import React from "react";
import {
  InputContainer,
  InputLabel,
  InputField,
  InputHighlight,
} from "./Input.styles";

const Input = ({
  placeholder,
  value,
  disabled,
  onChange,
  error,
  autoCapitalize,
  type,
  inputMode,
}) => {
  return (
    <InputContainer>
      <InputField
        $autoCapitalize={autoCapitalize}
        $error={error}
        id="input-field"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        inputMode={inputMode}
      />
      <InputLabel htmlFor="input-field">{placeholder}</InputLabel>
      <InputHighlight />
    </InputContainer>
  );
};

export default Input;
