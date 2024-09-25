import { keyframes, styled } from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

const jumpFadeIn = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  50% {
    transform: translateY(-10%);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0);
    opacity: .5;
  }
`;

const jumpFadeOut = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-10%);
    opacity: 0.5;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100dvh;
  background-color: #fff;
  align-items: center;
  width: 100%;
  @media (max-width: 750px) {
    padding-top: 6rem;
  }
`;

export const GoToTop = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fe5f55;
  position: fixed;
  bottom: 40px;
  cursor: pointer;
  right: 40px;
  border: 1.5px solid #fff;
  animation: ${({ show }) => (show ? jumpFadeIn : jumpFadeOut)} 0.5s forwards;

  &:hover {
    opacity: 1 !important;
    background-color: #fe5f55;
  }
`;
export const Section = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100dvh;
  padding: ${(props) =>
    props.$paddingBottom ? "4rem 4rem 0rem 4rem" : "4rem"};
  position: relative;

  background-color: ${(props) => (props.$grey ? "#F7F7F8" : "white")};
  border-top: ${(props) => (props.$grey ? "1px solid #ecf0f8" : "none")};
  border-bottom: ${(props) => (props.$grey ? "1px solid #ecf0f8" : "none")};
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.$center ? "center" : "space-between")};

  height: 100%;
  gap: 4rem;
  max-width: 1440px;
  width: 100%;
  scale: 0;
  opacity: 0;
  transition: scale 0.6s ease-in-out, opacity 1s ease-in-out;

  @media (max-width: 660px) {
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 400px) {
    scale: 1 !important;
    opacity: 1 !important;
  }
`;
export const StyledSectionWrapperNoAnimation = styled(SectionWrapper)`
  scale: 1;
  opacity: 1;
  @media (max-width: 400px) {
    scale: 1 !important;
    opacity: 1 !important;
  }
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  font-family: "Poppins-Bold";
  line-height: 4.2rem;
  text-align: ${(props) => (props.$center ? "center" : "left")};
  margin-top: ${(props) => (props.$marginTop ? "3rem" : "0rem")};
  @media (max-width: 660px) {
    text-align: center;
  }
`;
export const Subtitle = styled.h2`
  font-size: 1.4rem;
  font-family: "Poppins-Medium";
  color: #848484;
  text-align: ${(props) => (props.$center ? "center" : "left")};
  @media (max-width: 660px) {
    text-align: center;
  }
`;
export const StyledSubtitle = styled(Subtitle)`
  margin-top: -1rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  max-width: ${(props) => (props.$center ? "63rem" : "52.5rem")};
  flex-direction: column;
  gap: 2rem;
  justify-content: ${(props) => (props.$center ? "center" : "flex-start")};
  @media (max-width: 660px) {
    justify-content: center;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.$center ? "center" : "flex-start")};
  margin-top: ${(props) => (props.$center ? "2rem" : "0rem")};
  gap: 2rem;
  @media (max-width: 660px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Img = styled(LazyLoadImage)`
  width: 300px;
  height: 291px;
  object-fit: ${(props) => (props.$contain ? "contain" : "cover")};
  border-radius: 1.2rem;
  user-select: none;

  @media (max-width: 335px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  background-color: white;
  padding: 4rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 57rem;
  border-radius: 3rem;
`;
export const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;
export const ImageRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  /* margin-top: 2rem; */
  @media (max-width: 880px) {
    justify-content: center;
  }
  @media (max-width: 829px) {
    gap: 0rem;
    align-items: flex-start;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$reverse ? "row-reverse" : "row")};
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 5rem;

  @media (max-width: 967px) {
    justify-content: center;
  }
`;

export const Icon = styled(LazyLoadImage)`
  height: auto;
  margin-bottom: -0.65rem;
`;
export const Image = styled(LazyLoadImage)`
  width: ${(props) => (props.$small ? "auto" : "100%")};
  height: ${(props) => (props.$small ? "7.5rem" : "100%")};
`;
export const StyledImage = styled(Image)`
  @media (max-width: 829px) {
    display: none;
  }
`;

export const StyledSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 4rem;
  max-width: 1440px;
  width: 100%;
  scale: 0;
  opacity: 0;
  transition: scale 0.6s ease-in-out, opacity 1s ease-in-out;

  @media (max-width: 660px) {
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 400px) {
    scale: 1 !important;
    opacity: 1 !important;
  }
`;
export const Absolute = styled.div`
  position: absolute;
  left: 19.4rem;
  bottom: 2.1rem;
`;
export const BgEYC = styled.img`
  width: 100%;
  position: absolute;

  max-height: 129px;
  object-fit: contain;
  bottom: 0;
  /* margin-top: auto; */
`;
export const ImgContainer = styled.div`
  position: relative;
`;

export const ImgRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  @media (max-width: 880px) {
    width: 255px;
    margin-bottom: 10px;
  }
`;
export const ImgColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BigText = styled.span`
  font-size: 1.4rem;
  font-family: "Poppins-Bold";
`;
export const SmallText = styled.span`
  font-size: 1rem;
  font-family: "Poppins-Medium";
  text-transform: uppercase;
  max-width: 16rem;
  line-height: 1rem;
`;
export const AbsoluteImage = styled.img`
  position: absolute;
  right: 0rem;
  top: 0rem;
`;
