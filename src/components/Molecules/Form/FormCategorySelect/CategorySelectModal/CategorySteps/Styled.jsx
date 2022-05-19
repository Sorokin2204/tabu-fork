import styled from "styled-components";
import { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-top: 48px;
  align-items: center;
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;

  &:nth-child(1) {
    margin-left: 0;
  }
`;

export const StepCircle = styled.div`
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px;

  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  /* identical to box height, or 21px */

  font-feature-settings: "pnum" on, "lnum" on;

  color: #191919;
  border-radius: 50%;

  ${(props) =>
    props.active &&
    css`
      background: #025b37;
      color: #ffffff;
    `}
`;

export const StepName = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  /* identical to box height, or 16px */

  text-align: center;
  text-transform: uppercase;

  /* Tabu/Black */

  color: #191919;
  margin-top: 16px;
`;

export const Line = styled.div`
  background: #e5e5e5;
  width: 124px;
  height: 1px;
  margin-left: 20px;
`;

export const Step3 = styled.div``;
