import { styled } from "styled-components";
import { ReactComponent as InstaSvg } from "../../assets/icons/instagram.svg";
import { ReactComponent as FacebookSvg } from "../../assets/icons/facebook.svg";
import { ReactComponent as LinkedInSvg } from "../../assets/icons/linkedin.svg";
import { ReactComponent as TwitterSvg } from "../../assets/icons/twitter.svg";
import { ReactComponent as LinktreeSvg } from "../../assets/icons/linktree.svg";

export const FooterContainer = styled.div`
  height: fit-content;
  background-color: #fe5f55;
  width: 100%;
  /* align-items: center; */
  justify-content: center;
  display: flex;
  flex-direction: row;
  gap: 4rem;
  flex-wrap: wrap;
  padding: 4rem;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1440px;

  @media (max-width: 845px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 15rem;
  height: auto;
  user-select: none;
  object-fit: contain;
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 845px) {
    justify-content: center;
    align-items: center;
  }
`;
export const Text = styled.span`
  color: white;
  font-size: 1.8rem;
  font-family: "Poppins-Bold";
  letter-spacing: -0.2px;
  user-select: none;
  margin-bottom: 1rem;
  @media (max-width: 845px) {
    text-align: center;
  }
`;
export const StyledText = styled(Text)`
  margin-bottom: 0rem;
  font-family: "Poppins-SemiBold";
`;
export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: 845px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
export const Address = styled.span`
  font-size: 1.6rem;
  font-family: "Poppins-Regular";
  letter-spacing: -0.2px;
  color: white;
  @media (max-width: 845px) {
    text-align: center;
  }
`;
export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const Link = styled.span`
  color: white;
  font-size: 1.5rem;
  font-family: "Poppins-Medium";
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
    background: white;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
  @media (max-width: 631px) {
    text-align: center;
  }
`;

export const SocialMediaRow = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const SocialMediaLabel = styled.span`
  color: white;
  font-size: 1.5rem;
  font-family: "Poppins-Medium";
  letter-spacing: -0.2px;
  user-select: none;
`;

export const Instagram = styled(InstaSvg)`
  cursor: pointer;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const Facebook = styled(FacebookSvg)`
  cursor: pointer;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const LinkedIn = styled(LinkedInSvg)`
  cursor: pointer;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const Twitter = styled(TwitterSvg)`
  cursor: pointer;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const Linktree = styled(LinktreeSvg)`
  cursor: pointer;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const CopyText = styled(Text)`
  font-size: 12px;
  text-transform: unset;
  font-family: "Poppins-Regular";
  @media (max-width: 631px) {
    text-align: center;
  }
`;
