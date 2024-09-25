import styled, { keyframes } from "styled-components";
import { ReactComponent as Svg } from "../../assets/icons/logoEYC.svg";

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
  background-color: #fefefe;
  transition: all 0.4s ease-out;
  opacity: ${(props) => (props.$fade ? 0 : 1)};
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

export const LogoSVG = styled(Svg)`
  width: auto;
  height: 7rem;
  @media (max-width: 400px) {
    height: 5rem;
  }
`;

export const Video = styled.video`
  width: 70%;
  height: auto;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
