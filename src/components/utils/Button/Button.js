import React from "react";
import { ButtonContainer, LoadingContainer, Text } from "./Button.styles";
import { waveform } from "ldrs";

waveform.register();

const Button = ({
  title,
  disabled,
  containerStyle,
  titleStyle,
  onClick,
  loading,

  leftIcon,
}) => {
  return (
    <ButtonContainer
      style={containerStyle}
      onClick={!disabled ? onClick : null}
      disabled={disabled}
    >
      {!loading ? (
        <>
          {leftIcon}
          <Text disabled={disabled} style={titleStyle}>
            {title}
          </Text>
        </>
      ) : (
        <LoadingContainer>
          <l-waveform size="18" stroke="2.5" speed="1" color="white" />
        </LoadingContainer>
      )}
    </ButtonContainer>
  );
};

export default Button;
