import { createGlobalStyle } from "styled-components";
import background from '../assets/background-stars.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0 ;
    box-sizing: border-box
  }

  html, body, #root {
    height: 100%;
    background: url(${background}) #070625 ; 

  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Spartan', sans-serif
  }

  button {
    cursor: pointer
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  
`;
