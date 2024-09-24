import React from "react";
import { Container, Logo, LogoSVG } from "./SplashScreen.styles";

const SplashScreen = () => {
  return (
    <Container>
      <Logo>
        <LogoSVG />
      </Logo>
    </Container>
  );
};

export default SplashScreen;
