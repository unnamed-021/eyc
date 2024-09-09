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
  justify-content: center;
  height: 100dvh;
  padding: 4rem;

  background-color: ${(props) => (props.$grey ? "#F7F7F8" : "white")};
  border-top: ${(props) => (props.$grey ? "1px solid #ecf0f8" : "none")};
  border-bottom: ${(props) => (props.$grey ? "1px solid #ecf0f8" : "none")};

  @media (max-height: 625px) {
    height: 100%;
  }
  @media (max-width: 750px) {
    height: 100%;
    padding: ${(props) =>
      props.$firstSection ? "10rem 4rem 4rem 4rem" : "4rem"};
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.$center ? "center" : "space-around")};

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
