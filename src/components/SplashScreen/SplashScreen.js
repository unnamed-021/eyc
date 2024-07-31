import React from "react";
import { Container, Logo } from "./SplashScreen.styles";
import { ReactComponent as LogoSVG } from "../../assets/icons/logoEYC.svg";

const SplashScreen = () => {
  return (
    <Container>
      <Logo>
        <LogoSVG height={70} width={"auto"} />
      </Logo>
    </Container>
  );
};

export default SplashScreen;
