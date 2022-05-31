import { sizes } from 'sizes';
import styled from 'styled-components';
import { css } from 'styled-components';

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  border-bottom: 1px solid #e5e5e5;
  width: 100%;
`;

export const Tab = styled.div`
  display: flex;
  padding: 5px 0;
  border-bottom: 0;
  color: #e5e5e5;
  margin-left: 24px;
  cursor: pointer;

  font-family: 'Mont';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  text-transform: uppercase;

  color: #717171;

  &:nth-child(1) {
    margin-left: 0;
  }

  ${(props) =>
    props.active &&
    css`
      border-bottom: 2px solid #191919;
      font-weight: 600;
      color: #191919;
    `}
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  width: calc(100% - 50px);
  max-width: 468px;
  justify-content: center;
  @media (max-width: 1110px) {
    padding: 0 25px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 468px;
`;
