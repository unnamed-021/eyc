import React from "react";
import styled, { keyframes } from "styled-components";

const mulShdSpin = keyframes`
  0%, 100% {
    box-shadow: 0em -2.6em 0em 0em rgba(254, 95, 85, 1), 
                1.8em -1.8em 0 0em rgba(254, 95, 85, 0.2), 
                2.5em 0em 0 0em rgba(254, 95, 85, 0.2), 
                1.75em 1.75em 0 0em rgba(254, 95, 85, 0.2), 
                0em 2.5em 0 0em rgba(254, 95, 85, 0.2), 
                -1.8em 1.8em 0 0em rgba(254, 95, 85, 0.2), 
                -2.6em 0em 0 0em rgba(254, 95, 85, 0.5), 
                -1.8em -1.8em 0 0em rgba(254, 95, 85, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(254, 95, 85, 0.7), 
                1.8em -1.8em 0 0em rgba(254, 95, 85, 1), 
                2.5em 0em 0 0em rgba(254, 95, 85, 0.2), 
                1.75em 1.75em 0 0em rgba(254, 95, 85, 0.2), 
                0em 2.5em 0 0em rgba(254, 95, 85, 0.2), 
                -1.8em 1.8em 0 0em rgba(254, 95, 85, 0.2), 
                -2.6em 0em 0 0em rgba(254, 95, 85, 0.2), 
                -1.8em -1.8em 0 0em rgba(254, 95, 85, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(254, 95, 85, 0.5), 
                1.8em -1.8em 0 0em rgba(254, 95, 85, 0.7), 
                2.5em 0em 0 0em rgba(254, 95, 85, 1), 
                1.75em 1.75em 0 0em rgba(254, 95, 85, 0.2), 
                0em 2.5em 0 0em rgba(254, 95, 85, 0.2), 
                -1.8em 1.8em 0 0em rgba(254, 95, 85, 0.2), 
                -2.6em 0em 0 0em rgba(254, 95, 85, 0.2), 
                -1.8em -1.8em 0 0em rgba(254, 95, 85, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(254, 95, 85, 0.2), 
                1.8em -1.8em 0 0em rgba(254, 95, 85, 0.5), 
                2.5em 0em 0 0em rgba(254, 95, 85, 0.7), 
                1.75em 1.75em 0 0em rgba(254, 95, 85, 1), 
                0em 2.5em 0 0em rgba(254, 95, 85, 0.2), 
                -1.8em 1.8em 0 0em rgba(254, 95, 85, 0.2), 
                -2.6em 0em 0 0em rgba(254, 95, 85, 0.2), 
                -1.8em -1.8em 0 0em rgba(254, 95, 85, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(254, 95, 85, 0.2), 
                1.8em -1.8em 0 0em rgba(254, 95, 85, 0.2), 
                2.5em 0em 0 0em rgba(254, 95, 85, 0.5), 
                1.75em 1.75em 0 0em rgba(254, 95, 85, 0.7), 
                0em 2.5em 0 0em rgba(254, 95, 85, 1), 
                -1.8em 1.8em 0 0em rgba(254, 95, 85, 0.2), 
                -2.6em 0em 0 0em rgba(254, 95, 85, 0.2), 
                -1.8em -1.8em 0 0em rgba(254, 95, 85, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(254, 95, 85, 0.2), 
                1.8em -1.8em 0 0em rgba(254, 95, 85, 0.2), 
                2.5em 0em 0 0em rgba(254, 95, 85, 0.2), 
                1.75em 1.75em 0 0em rgba(254, 95, 85, 0.5), 
                0em 2.5em 0 0em rgba(254, 95, 85, 0.7), 
                -1.8em 1.8em 0 0em rgba(254, 95, 85, 1), 
                -2.6em 0em 0 0em rgba(254, 95, 85, 0.2), 
                -1.8em -1.8em 0 0em rgba(254, 95, 85, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(254, 95, 85, 0.2), 
                1.8em -1.8em 0 0em rgba(254, 95, 85, 0.2), 
                2.5em 0em 0 0em rgba(254, 95, 85, 0.2), 
                1.75em 1.75em 0 0em rgba(254, 95, 85, 0.2), 
                0em 2.5em 0 0em rgba(254, 95, 85, 0.5), 
                -1.8em 1.8em 0 0em rgba(254, 95, 85, 0.7), 
                -2.6em 0em 0 0em rgba(254, 95, 85, 1), 
                -1.8em -1.8em 0 0em rgba(254, 95, 85, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(254, 95, 85, 0.2), 
                1.8em -1.8em 0 0em rgba(254, 95, 85, 0.2), 
                2.5em 0em 0 0em rgba(254, 95, 85, 0.2), 
                1.75em 1.75em 0 0em rgba(254, 95, 85, 0.2), 
                0em 2.5em 0 0em rgba(254, 95, 85, 0.2), 
                -1.8em 1.8em 0 0em rgba(254, 95, 85, 0.5), 
                -2.6em 0em 0 0em rgba(254, 95, 85, 0.7), 
                -1.8em -1.8em 0 0em rgba(254, 95, 85, 1);
  }
`;

const Loader = styled.span`
  font-size: 8px;
  width: 1.4em;
  height: 1.4em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: ${mulShdSpin} 0.8s infinite ease;
  transform: translateZ(0);
`;

const LoaderComponent = () => <Loader />;

export default LoaderComponent;
