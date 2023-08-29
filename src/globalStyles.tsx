import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
html{
  font-size:62.5%;
}

body {
  overscroll-behavior: none;
  background-color: #fffdf8;
    font-family: 'Raleway', sans-serif;
  text-align: center;
 
}


`;

export default GlobalStyle;
