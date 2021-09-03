import styled from "styled-components";

export const Container = styled.div`
    grid-area: CD;
    margin-top: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;

    & div + div {
    margin-left: 30px;
  }
`