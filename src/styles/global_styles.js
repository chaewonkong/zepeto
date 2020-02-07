import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { colors } from "./_mixin";

export const GlobalStyle = createGlobalStyle`
${reset};

@font-face {
    font-family:'GilroyBold';
    src: url(${require("./fonts/Gilroy-Bold.ttf")});
  }

@font-face {
    font-family:'GilroyRegular';
    src: url(${require("./fonts/Gilroy-Regular.ttf")});
}

  
@import url(//fonts.googleapis.com/earlyaccess/jejugothic.css);
* {
    box-sizing: border-box;
}
html {
  font-size: 16px;
}

body{
  font-family: 'Jeju Gothic', sans-serif;
  padding-left: 18px;
  padding-right: 18px;
//   background: ${colors.defaultColor};
}

#root{
  width: 100%;
}

a{
  color: unset;
  &:hover{
    color: unset;
  }
}

strong{
  font-weight: 700;
}

button{
  cursor: pointer;
  background-color: white;
  outline: none;
  border: none;
  &:active {
    outline: none;
    border: none;
  }
}
`;
