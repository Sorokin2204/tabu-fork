import styled from "styled-components";
import { css } from "styled-components";

export const Wrapper = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;

  ${(props) =>
    props.active &&
    css`
      display: flex;
    `};
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
  width: 100%;
  padding: ${({ padding }) => padding || ""};
`;

export const Error = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  color: #ee1616;
`;

export const TitleForm = styled.div`
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

export const DescriptionForm = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  /* Tabu/Dark/Text-Gray */

  color: #717171;
  margin-top: 6px;
`;

export const Textarea = styled.textarea`
  width: 570px;
  height: 86px;
  resize: none;
  padding: 16px;
  border: 1px solid #e5e5e5;
  outline: none;

  font-family: "Mont";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;

  /* Tabu/Dark/Gray */

  color: #191919;
  margin-top: 32px;
`;

export const Radios = styled.div`
  display: flex;
  margin-top: 32px;
  width: 100%;
`;
