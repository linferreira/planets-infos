import styled from "styled-components";

/**
 * Layout
 * MH = Main Header
 * IMG = Image
 * CT = Content
 * CD = Cards
 * FT = Footer
 */

 export const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;

  grid-template-areas:
    "MH MH"
    "IMG CT"
    "CD CD"
    "FT FT";

  height: 100vh;
  min-width: 315px;
`;