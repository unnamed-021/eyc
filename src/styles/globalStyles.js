import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    height: 100%;
    font-size: 62.5%; // 1rem = 10px, 10/16 = 60.25%
    box-sizing: border-box;
    scroll-behavior: smooth;

    @media screen and (max-width: 960px) {
      font-size: 56.25%; //1rem = 9px, 9/16 = 56.25%
    }

    @media screen and (max-width: 400px) {
      font-size: 50%; //1rem = 8px, 8/16 = 50%
    }
  }

  body {
    font-weight: 400;
    font-size: 1.7rem;
    font-family: Poppins, sans-serif;
    line-height: 1.6;
    margin: 0;
    overflow-x: hidden;
  }

  input,
  select,
  textarea,
  button {
    font-family: inherit;
  }

  #root {
    height: 100%;
  }

  input[type="date" i] {
    margin: 12px 0px 12px 0px;
  }
`;

export default GlobalStyles;
