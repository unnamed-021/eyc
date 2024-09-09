import { styled } from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
  padding: 8rem 4rem 4rem 4rem;

  background-color: white;

  @media (max-width: 490px) {
    padding: 6rem 2rem 2rem 2rem;
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
  transform: translateX(100%);
  opacity: 0;
  transition: all 0.6s ease-in-out;
  @media (max-width: 660px) {
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 400px) {
    opacity: 1 !important;
    transform: translateX(0);
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
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const ImageContainer = styled.div`
  position: relative;
`;
export const ImageRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
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
  line-height: 3rem;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
`;

export const ImageLeft = styled.img`
  width: 44.9rem;
  height: 52.4rem;
  border-radius: 1.2rem;
  object-fit: cover;
  @media (max-width: 920px) {
    width: 50.7rem;
  }
  @media (max-width: 490px) {
    width: 100%;
  }
`;
export const ImageRight = styled.img`
  object-fit: cover;
  width: 50.7rem;
  height: 26rem;
  border-radius: 1.2rem;
  @media (max-width: 490px) {
    width: 100%;
  }
`;
export const ImageRightSmall = styled.img`
  border-radius: 1.2rem;
  width: 25rem;
  object-fit: cover;
  height: 25.8rem;
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
export const Iframe = styled.iframe`
  align-self: center;
  width: 56rem;
  height: 31.5rem;
  @media (max-width: 660px) {
    width: 100%;
  }
`;
export const NewPhoto = styled.img`
  width: calc(100% + 8rem);
  height: 100%;
  object-fit: cover;
  max-height: 60rem;

  @media (max-width: 660px) {
    width: 100%;
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
export const StyledNewColumn = styled(NewColumn)`
  gap: 0rem;
`;

export const Date = styled(Subtitle)`
  font-size: 2rem;
`;
export const NewsTitle = styled(Title)`
  color: black;
  line-height: 3.2rem;
`;
export const Description = styled(Subtitle)`
  font-size: 1.8rem;
`;

export const Link = styled(Description)`
  color: #fe5f55;
  cursor: pointer;
`;

export const StyledDescription = styled(Description)`
  white-space: nowrap;
  flex-direction: row;
  gap: 0.5rem;
  display: flex;
  color: black;
`;
