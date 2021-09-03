import styled from "styled-components";

export const Header = styled.header`
  grid-area: MH;
  padding: 15px 30px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  border-bottom: 1px solid #cccccc;

  & > h1 {
    color: #fff;
    font-family: "Antonio", sans-serif;
    font-weight: 400;
  }

  & > nav ul {
    display: flex;
    flex-wrap: wrap;
  }
  
  & > nav li{
    color: #cccccc;
    font-size: 0.6em;
    font-weight: 600;
  }

  & li + li {
    margin-left: 30px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 20vh;
    grid-template-columns: auto;
    justify-content: center;

    & > h1 {
      margin-bottom: 20px;
      text-align: center;
    }

    & > nav li{
      font-size: 0.65em;
    }


    & li + li {
      margin-left: 50px;
    }
  }
`
