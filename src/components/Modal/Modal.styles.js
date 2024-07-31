import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
    right: -100%;

  }
  to {
    opacity: 1;
    right: 0;

  }
`;

const slideOut = keyframes`
  from {
    opacity: 1;
    right: 0;

  }
  to {
    opacity: 0;
    right: -100%;

  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const blurIn = keyframes`
  from {
    backdrop-filter: blur(0px);

  }
  to {
    backdrop-filter: blur(3px);

  }
`;

const blurOut = keyframes`
  from {
    backdrop-filter: blur(3px);

  }
  to {
    backdrop-filter: blur(0px);

  }
`;
export const ModalBackground = styled.div`
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  animation: ${(props) => (props.$open ? blurIn : blurOut)} 0.3s ease-in-out;
  display: flex;
  justify-content: flex-end;
  transition: all 0.3s ease-in-out;
`;

export const ModalContainer = styled.div`
  z-index: 10000;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  transition: right 0.3s ease-in-out;
  padding: ${(props) => (props.$center ? "0px" : "24px")};
  display: flex;
  justify-content: ${(props) => (props.$center ? "center" : "flex-end")};
  align-items: center;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: white;
  border-radius: 10px;
  display: flex;
  width: 400px;
  height: 100%;
  padding: 32px;
  flex-direction: column;
  justify-content: space-between;

  animation: ${(props) => (props.$open ? slideIn : slideOut)} 0.3s ease-in-out;
  flex-shrink: 0;

  @media (max-width: 850px) {
    width: 90% !important;
  }
  @media (max-height: 700px) {
    height: 100% !important;
    overflow: auto;
  }
`;

export const ModalContentFade = styled.div`
  position: relative;
  background-color: white;
  border-radius: 10px;
  display: flex;
  width: 450px;
  height: fit-content;
  gap: 30px;
  padding: 32px;
  flex-direction: column;
  justify-content: space-between;
  animation: ${(props) => (props.$open ? fadeIn : fadeOut)} 0.3s ease-in-out;
  flex-shrink: 0;

  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  @media (max-width: 485px) {
    width: 90% !important;
  }
`;
