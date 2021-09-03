import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 2px;
  color: #ffffff;
  width: 100%;
  max-width: 16.5vw;

  padding: 2vw;
  margin-bottom: 10vh;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  & label {
    color: #cccccc;
    font-size: 0.6em;
    font-weight: 400;
    margin-bottom: 5px;
  }

  & span {
    color: #fff;
    font-family: "Antonio", sans-serif;
    font-weight: 400;
    font-size: 1.8em;
    text-transform: uppercase;
  }
`;
