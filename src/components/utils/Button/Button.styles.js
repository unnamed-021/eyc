import { styled } from "styled-components";

export const ButtonContainer = styled.button`
  width: fit-content;
  min-height: 3.6rem;
  z-index: 10;
  min-width: 10rem;
  padding: 0px 1.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  border: none;
  border-radius: 1.6rem;
  background-color: ${(props) => (props.disabled ? "#d4e5e4" : "#FE5F55")};
  transition: all 0.2s ease-in-out;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  box-shadow: ${(props) =>
    props.disabled ? "none" : "0px 8px 12px 0px rgba(0, 0, 0, 0.1)"};
  &:active {
    scale: ${(props) => (props.disabled ? 1 : 0.95)};
  }
  &:hover {
    span {
      text-shadow: 0px 0px 10px white;
    }
  }
`;

export const Text = styled.span`
  color: ${(props) => (props.disabled ? "#000" : "#fff")};
  text-align: center;
  font-size: 1.6rem;
  transition: all 0.2s ease-in-out;
  user-select: none;
  font-family: "Poppins-Medium";
  letter-spacing: -0.408px;
  white-space: nowrap;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;
