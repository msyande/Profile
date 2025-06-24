import { createGlobalStyle } from "styled-components";
import texture from "../images/texture.jpg";

const GlobalStyles = createGlobalStyle`
 html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    font-family: "Inter", sans-serif;
    background-image: url(${texture});
    background-size: cover;
    color: #f8fafc;
  }
`;

export default GlobalStyles;
