import { keyframes, styled } from "styled-components";

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

export const HeaderContainer = styled.div`
  height: 8rem;
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: height 0.3s ease-in-out;
  position: relative;
  padding: 0rem 4rem;
  border-bottom: 1px solid #ecf0f8;
  position: fixed;
  z-index: 100;
  top: 0px;
  @media (max-width: 750px) {
    height: ${(props) => (props.$open ? "100dvh" : "6rem")};
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
  width: 100%;
  max-width: 1440px;

  @media (max-width: 1500px) {
    padding: 0rem 2rem;
  }
  @media (max-width: 750px) {
    display: none;
  }
`;

export const Image = styled.img`
  user-select: none;
  cursor: pointer;
  width: auto;
  height: 13rem;
  object-fit: contain;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const CenteredNavLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

export const Login = styled.span`
  color: black;
  font-size: 1.8rem;
  font-family: "Poppins-SemiBold";

  letter-spacing: -0.2px;
  user-select: none;
  cursor: pointer;
  position: relative;
`;

export const Link = styled.span`
  color: black;
  font-size: 1.8rem;
  font-family: "Poppins-SemiBold";

  letter-spacing: -0.2px;
  user-select: none;
  cursor: pointer;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0px;
    width: ${(props) => (props.$active ? "100%" : "0")};
    height: 2px;
    background: black;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const CenterRelative = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  justify-content: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 7.5rem;
  height: 7.5rem;
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const BigCircleImg = styled.img`
  position: absolute;
  z-index: -1;
  height: 24rem;
  width: 24rem;
`;
export const CircleImg = styled.img`
  position: absolute;
  z-index: -1;
  height: 7.5rem;
  width: 7.5rem;
`;

export const Dot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  top: -0.8rem;
  right: -0.8rem;
`;
export const Count = styled.span`
  color: white;
  font-size: 1rem;
  font-family: "Poppins-Medium";
`;
export const CartContainer = styled.div`
  display: flex;

  flex-direction: row;
  gap: 0.5rem;
  position: absolute;
  cursor: pointer;

  right: 0rem;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0px;
    width: ${(props) => (props.$active ? "100%" : "0")};
    height: 2px;
    background: black;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const CarText = styled.span`
  color: black;
  font-size: 1.8rem;
  font-family: "Poppins-SemiBold";
  text-transform: uppercase;
  letter-spacing: -0.2px;
  user-select: none;
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;

  @media (max-width: 750px) {
    display: flex;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: ${(props) => (props.$open ? "2rem" : "0rem")};
`;

export const StyledNavLinks = styled(NavLinks)`
  flex-direction: column;
  height: calc(100dvh - 6rem);
  align-items: center;
  width: 100%;
  justify-content: center;

  animation: ${(props) => (props.$open ? fadeIn : fadeOut)} 0.3s ease-in-out;
`;

export const StyledCartContainer = styled(CartContainer)`
  position: relative;
  right: unset;
`;
