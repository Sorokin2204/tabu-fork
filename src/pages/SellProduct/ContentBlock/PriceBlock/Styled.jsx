import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 72px;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  /* identical to box height, or 28px */

  text-transform: uppercase;

  /* Tabu/Black */

  color: #191919;
`;

export const Inputs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  margin-top: 45px;
`;

export const Description = styled.div`
  margin-top: 24px;

  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  /* Tabu/Dark/Text-Gray */

  color: #717171;
  display: flex;
  width: 100%;
`;
