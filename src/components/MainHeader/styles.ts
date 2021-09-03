import styled from "styled-components";

export const Header = styled.header`
  grid-area: MH;
  padding: 15px 30px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  background-color: #38384f;
  border-bottom: 1px solid #cccccc;

  & > h1 {
    color: #fff;
    font-family: "Antonio", sans-serif;
    font-weight: 400;
  }

  & > nav ul {
    display: flex;
  }
  
  & > nav li{
    color: #cccccc;
    font-size: 0.6em;
    font-weight: 600;
  }

  & li + li {
    margin-left: 30px;
  }
`
