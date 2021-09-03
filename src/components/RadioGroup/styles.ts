import styled from "styled-components";

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 20vw;
  margin-top: 2vw;

  & input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;

    &:focus + label {
      border: 1px solid #6d2ed5;
    }

    &:checked + label {
      background-color: #6d2ed5;
      border-color: #6d2ed5;
    }
  }

  & label {
    border: 1px solid #cccccc;
    border-radius: 2px;
    color: #ffffff;
    font-weight: 600;
    font-size: 0.55em;

    margin-bottom: 10px;
    padding: 10px 20px;

    & span {
      color: #cccccc;
      opacity: 0.7;
      margin-right: 1vw;
    }

    &:hover {
      background-color: #6d2ed5;
    }
  }
`;
