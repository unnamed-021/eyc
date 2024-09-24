import { keyframes, styled } from "styled-components";

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

export const Section = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 1440px;
  flex-wrap: wrap;
  gap: 5rem;

  /* border-bottom: 1px solid #ecf0f8; */
  transform: translateX(100%);
  opacity: 0;
  transition: all 0.6s ease-in-out;
  padding: 12rem 4rem 4rem 4rem;

  @media (max-width: 490px) {
    padding: 10rem 2rem 2rem 2rem;
  }
  @media (max-width: 400px) {
    opacity: 1 !important;
    transform: translateX(0);
  }
`;
export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 4rem;
  width: 100%;
  min-height: 100dvh;

  @media (max-width: 660px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Title = styled.span`
  font-size: 3.2rem;
  font-family: "Poppins-Bold";

  line-height: 4rem;

  @media (max-width: 880px) {
    text-align: center;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 10rem;
`;

export const Subtitle = styled.span`
  font-size: 1.6rem;
  font-family: "Poppins-Regular";
  color: #848484;

  width: 48.3rem;
  @media (max-width: 880px) {
    text-align: center;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  color: #8e8e8e;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  max-width: 48.3rem;
  outline: none;
  color: #b0b0b0;
  font-size: 1.6rem;
  font-family: "Poppins-Medium";
  border: ${(props) => (props.$error ? "1px solid red" : "1px solid #8e8e8e")};
  @media (max-width: 880px) {
    width: 100%;
  }
`;
export const TextArea = styled.textarea`
  color: #8e8e8e;
  border: 1px solid #8e8e8e;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  max-width: 48.3rem;
  min-height: 10rem;
  outline: none;
  color: #b0b0b0;
  font-size: 1.6rem;
  font-family: "Poppins-Medium";
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 55.6rem;
  @media (max-width: 880px) {
    align-items: center;
  }
`;

export const Photo = styled.img`
  width: 29.2rem;
  height: 39.8rem;
  border-radius: ${(props) => (props.$borderRadius ? "1.2rem" : "0rem")};
  object-fit: contain;
`;
