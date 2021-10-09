import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  *{
    font-weight: 100;
  }

  button {
    outline: none;
    border: none;
    background: none;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: bold;
  }

  input {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    background: none;
  }
`

export default GlobalStyle;