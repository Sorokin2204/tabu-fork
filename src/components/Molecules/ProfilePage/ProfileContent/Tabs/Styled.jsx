import { sizes } from "sizes";
import styled from "styled-components";
import { css } from "styled-components";

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  border-bottom: 1px solid #e5e5e5;
  width: 100%;
`;

export const Tab = styled.div`
  display: flex;
  padding: 0px 17px 16px 17px;
  border-bottom: 0;
  color: #e5e5e5;
  margin-left: 24px;
  cursor: pointer;

  font-family: "Mont";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  color: #191919;

  &:nth-child(1) {
    margin-left: 0;
  }

  ${(props) =>
    props.active &&
    css`
      border-bottom: 2px solid #025b37;
      font-weight: 600;
      color: #025b37;
    `}
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;

  @media (max-width: ${sizes.mobile}px) {
  }
`;
