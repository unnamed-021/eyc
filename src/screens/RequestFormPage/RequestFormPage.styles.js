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
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100dvh;

  border-bottom: 1px solid #ecf0f8;
  padding: 12rem 4rem 12rem 4rem;

  @media (max-width: 490px) {
    padding: 10rem 2rem 10rem 2rem;
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
    opacity: 1 !important;
    scale: 1 !important;
  }
`;

export const Title = styled.span`
  font-size: 3.2rem;
  font-family: "Poppins-Bold";
  line-height: 4rem;
  max-width: 63rem;
  @media (max-width: 912px) {
    /* text-align: center; */
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 144rem;
  gap: 10rem;
  flex-wrap: wrap;
  @media (max-width: 1063px) {
    /* justify-content: center; */
    gap: 5rem;
  }
`;
export const SmallRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: ${(props) => (props.$noWrap ? "unset" : "wrap")};

  gap: 1rem;
  @media (max-width: 912px) {
    /* flex-direction: column;
    align-items: center; */
  }
`;
export const Img = styled.img`
  width: 3rem;
  height: 3rem;
`;
export const Subtitle = styled.span`
  font-size: 1.6rem;
  font-family: "Poppins-Regular";
  color: #848484;

  width: ${(props) => (props.$large ? "72.7rem" : "48.3rem")};

  @media (max-width: 912px) {
    /* text-align: center; */
  }
  @media (max-width: 800px) {
    width: ${(props) => (props.$large ? "100%" : "48.3rem")};
  }
  @media (max-width: 520px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  color: #8e8e8e;
  border: 1px solid #8e8e8e;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  max-width: 48.3rem;
  outline: none;
  color: #b0b0b0;
  font-size: 1.6rem;
  font-family: "Poppins-Medium";
`;
export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120rem;
  width: 100%;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Photo = styled.img`
  width: 25.4rem;
  height: 25.4rem;
  border-radius: 1.2rem;
  object-fit: contain;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  height: 100%;
  width: 98.4rem;
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 912px) {
    /* align-items: center; */
  }
`;

export const Label = styled.span`
  font-size: 1.6rem;
  font-family: "Poppins-Medium";
  color: ${(props) => (props.$error ? "red" : "#1e1e1ecc")};
  width: 29rem;
  white-space: ${(props) => (props.$wrap ? "wrap" : "nowrap")};
  @media (max-width: 912px) {
    /* text-align: center; */
    width: 100%;
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => (props.$flexStart ? "flex-start" : "center")};
  gap: 3rem;
  flex-wrap: wrap;
  @media (max-width: 912px) {
    /* flex-direction: column; */
    /* align-items: center; */
    /* width: 100%; */
    /* justify-content: center; */
  }
`;

export const InfoImg = styled.img`
  width: 1.8rem;
  user-select: none;
  height: 1.8rem;
  margin-left: 1rem;
  @media (max-width: 912px) {
    display: none;
  }
`;

export const ValueContainer = styled.div`
  width: 10.2rem;
  background-color: rgba(0, 0, 0, 0.1);
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputValue = styled.input`
  width: 10.2rem;
  background-color: rgba(0, 0, 0, 0.1);
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-family: "Poppins-Regular";
  color: #1e1e1ecc;
  border: none;
  text-align: center;
  outline: none;
`;
export const Value = styled.span`
  font-size: 1.6rem;
  font-family: "Poppins-Regular";
  color: #1e1e1ecc;
  max-width: 35rem;
  @media (max-width: 912px) {
    /* text-align: center; */
  }
`;

export const CheckboxLabel = styled.span`
  font-size: 1.6rem;
  font-family: "Poppins-Regular";
  color: #1e1e1ecc;
`;

export const Checkbox = styled.input`
  width: 1.6rem;
  height: 1.6rem;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const SecondColumn = styled(FirstColumn)``;

export const ColumnsRow = styled(FormRow)`
  align-items: flex-start;
`;

export const Search = styled.input`
  border: 1px solid #338891cc;
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  width: 38rem;
  outline: none;
  font-size: 1.6rem;
  font-family: "Poppins-Regular";
  color: #1e1e1ecc;
  margin-bottom: 1rem;
`;

export const Locations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 18rem;
  border-bottom: 1px solid #338891cc;
  padding-bottom: 1rem;
  overflow-y: auto;
`;

export const UploadButton = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  height: 4.8rem;
  width: 37.7rem;
  display: flex;
  align-items: center;
  padding: 0rem 1rem;
`;

export const InputLabel = styled.label`
  color: #1e1e1e66;
  color: #000;
  font-size: 1.6rem;
  font-family: "Poppins-Regular";
  white-space: nowrap;
`;

export const P = styled.p`
  white-space: nowrap;
  font-size: 1.2rem;
`;

export const StyledInput = styled.input`
  background-color: rgba(0, 0, 0, 0.1);
  height: 4.8rem;
  width: 37.7rem;
  display: flex;
  align-items: center;
  padding: 0rem 1rem;
  color: #1e1e1e66;
  color: #000;
  font-size: 1.6rem;
  font-family: "Poppins-Regular";
  border: ${(props) =>
    props.$error ? "1px solid red" : "1px solid transparent"};
  outline: none;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
