import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    font-family: 'Helvetica', sans-serif;
    background-color: #f9f9f9;
    color: #333;
  }
`;

export default GlobalStyles;
