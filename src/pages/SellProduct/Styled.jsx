import { sizes } from "sizes";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 274px;
`;
export const Title = styled.div`
  margin-top: 56px;
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

export const Description = styled.div`
  font-family: "Gilroy";
  margin-top: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  /* or 20px */

  text-align: center;

  /* Tabu/Dark/Text-Gray */

  color: #717171;
  width: 35%;

  @media (max-width: ${sizes.mobile}px) {
    width: 80%;
  }
`;

export const Blocks = styled.div`
  margin-top: 72px;
  display: flex;
  width: 85%;
`;

export const TitleSection = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */

  text-transform: uppercase;

  color: #000000;
  margin-top: 56px;
`;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 65%;
  margin-left: 124px;
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 264px;
`;
