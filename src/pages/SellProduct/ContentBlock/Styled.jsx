import { sizes } from "sizes";
import styled from "styled-components";

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 65%;
  margin-left: 124px;

  @media (max-width: ${sizes.mobile}px) {
    margin-left: 0px;
    width: 100%;
  }
`;

export const TitleBlock = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  text-transform: uppercase;

  /* Tabu/Black */

  color: #191919;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 65px;
  width: 100%;
`;

export const Form3 = styled.div``;

export const Buttons = styled.div`
  display: flex;
  margin-top: 264px;
`;
