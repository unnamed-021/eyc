import styled, { keyframes } from "styled-components";

const growAndShrink = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.12);
  }
  100% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Logo = styled.div`
  animation: pulse 1s infinite;

  display: flex;

  animation-direction: alternate;
  animation-name: ${growAndShrink};
  -webkit-animation-name: ${growAndShrink};
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;
