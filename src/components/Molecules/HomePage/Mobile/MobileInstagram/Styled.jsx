import styled from "styled-components";

export const Cards = styled.div`
  display: grid;
  margin: 32px 0 0 0;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2px;
  height: 250px !important;
  width: 100%;
  @media (max-width: 601px) {
    min-width: 600px;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  width: 100vw;
  overflow-x: scroll;
`;
