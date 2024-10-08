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
`;

export const Section = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 10rem 4rem 4rem 4rem;

  background-color: white;

  @media (max-width: 490px) {
    padding: 8rem 2rem 2rem 2rem;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Title = styled.h1`
  font-size: 3.2rem;
  font-family: "Poppins-Bold";
  text-align: ${(props) => (props.$center ? "center" : "left")};
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
export const Video = styled.video`
  width: 300px;
  height: auto;

  border-radius: 1.2rem;
  user-select: none;

  @media (max-width: 335px) {
    width: 100%;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  width: 120rem;
  @media (max-width: 1500px) {
    width: 96.1rem;
  }
  @media (max-width: 1250px) {
    width: 100%;
  }

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const ImageShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.3s ease-in-out;

  background: linear-gradient(
    180deg,
    rgba(236, 236, 236, 0) 45%,
    rgba(0, 0, 0, 0.65) 100%
  );
  z-index: 10;
  border-radius: 1.2rem;
`;

export const ImageRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  @media (max-width: 490px) {
    flex-direction: column;
  }
`;
export const ImageTitle = styled.span`
  font-size: 2.6rem;
  font-family: "Poppins-SemiBold";
  color: white;
  user-select: none;
  position: absolute;
  z-index: 2;
  bottom: 2rem;
  left: 1rem;
  z-index: 30;
  line-height: 3rem;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
`;

export const ImageLeft = styled.div`
  width: 100%;
  height: 52.4rem;
  z-index: 5;
  border-radius: 1.2rem;
  transition: all 0.3s ease-in-out;

  position: relative;
  cursor: pointer;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  display: flex;
  &:hover {
    scale: 1.01;
  }
`;
export const ImageRight = styled.div`
  width: 100%;
  transition: all 0.3s ease-in-out;
  height: 26rem;
  z-index: 5;
  border-radius: 1.2rem;
  position: relative;

  cursor: pointer;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  display: flex;

  &:hover {
    scale: 1.01;
  }
`;
export const ImageRightSmall = styled.div`
  border-radius: 1.2rem;
  transition: all 0.3s ease-in-out;
  width: 50%;
  z-index: 5;
  height: 25.8rem;

  position: relative;
  cursor: pointer;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  display: flex;
  &:hover {
    scale: 1.01;
  }

  @media (max-width: 490px) {
    width: 100%;
  }
`;

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const NewContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  background-color: white;
  border-radius: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  width: 120rem;
  @media (max-width: 1500px) {
    width: 96.1rem;
  }
  @media (max-width: 1250px) {
    width: 100%;
  }
  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

export const NewPhoto = styled.img`
  width: 48%;
  height: 32rem;
  object-fit: cover;
  border-radius: 3rem 0rem 0rem 3rem;
  @media (max-width: 660px) {
    width: 100%;
    border-radius: 3rem 3rem 0rem 0rem;
  }
`;

export const NewColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;

  gap: 2rem;
  @media (max-width: 660px) {
    align-items: center;
    padding: 0rem 2rem 2rem 2rem;
    width: 100%;
  }
`;

export const Date = styled(Subtitle)`
  font-size: 2rem;
`;
export const NewsTitle = styled(Title)`
  color: black;
  line-height: 4rem;
`;
export const Description = styled(Subtitle)`
  font-size: 1.8rem;
`;
