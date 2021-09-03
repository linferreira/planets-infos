import styled from "styled-components";

export const Wrapper = styled.div`
	max-width: 20vw;
`

export const Paragraph = styled.p`
  color: #cccccc;
  font-size: 0.75em;
  font-weight: 400;
	margin: 2vw 0;
`;

export const Source = styled.div`
  color: #cccccc;
  opacity: 0.75;
  font-size: 0.75em;

  & a {
    color: #cccccc;
		font-weight: 700;
		text-decoration: underline;
	}

	& a img {
		margin-left: 5px;
	}
`;
