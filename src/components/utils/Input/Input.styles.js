import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
  &:last-child {
    margin-bottom: 4rem;
  }
`;

export const InputField = styled.input`
  display: block;
  width: 25rem;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  text-transform: ${(props) =>
    props.$autoCapitalize ? "capitalize" : "unset"};
  font-family: "Poppins-Medium";
  letter-spacing: -0.2px;
  border: none;
  border-bottom: ${(props) =>
    props.$error ? "1.5px solid #c82333" : "1.5px solid #ccc"};
  outline: none;
  background-color: transparent;

  &:focus + label {
    top: -1.5rem;
    font-size: 1rem;
    font-family: "Poppins-SemiBold";
    color: #000;
    opacity: 1;
  }

  &:focus + label + span {
    width: 100%;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 0.5rem;
  left: 0;
  font-size: 1.4rem;
  font-family: "Poppins-Medium";
  letter-spacing: -0.2px;
  color: #ccc;
  pointer-events: none;
  transition: all 0.3s ease;
  opacity: 0;
`;

export const InputHighlight = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1.5px;
  width: 0;
  background-color: #000;
  transition: all 0.3s ease;
`;
