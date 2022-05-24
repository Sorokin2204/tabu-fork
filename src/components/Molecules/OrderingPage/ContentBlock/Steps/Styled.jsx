import styled from 'styled-components';
import { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-top: 48px;
  align-items: center;
  @media (max-width: 1110px) {
    margin-top: 0px;
  }
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
  @media (max-width: 1110px) {
    &:nth-child(1) {
      padding-left: 25px;
    }
    &:last-child {
      padding-right: 25px;
    }
    margin-left: 8px;
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

  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: #191919;
  border-radius: 50%;
  @media (max-width: 1110px) {
    font-size: 14px;
    width: 44px;
    height: 44px;
    min-width: 44px;
    min-height: 44px;
  }
  ${(props) =>
    props.active &&
    css`
      background: #025b37;
      color: #ffffff;
    `}
`;

export const StepName = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  color: #191919;
  margin-top: 16px;
  @media (max-width: 1110px) {
    margin-top: 12px;
  }
`;

export const Line = styled.div`
  background: #e5e5e5;
  width: 124px;
  height: 1px;
  margin-left: 20px;
  margin-bottom: 32px;
  @media (max-width: 1110px) {
    width: 56px;
    margin-left: 8px;
  }
`;

export const Step3 = styled.div``;
