import { sizes } from 'sizes';
import styled from 'styled-components';
import { css } from 'styled-components';

export const Tabs = styled.div`
  display: flex;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, max-content)); */
  flex-direction: row;
  margin-top: 24px;
  /* column-gap: 20px; */
  /* justify-content: space-between; */
  border-bottom: 1px solid #e5e5e5;
  width: 100%;
  @media (max-width: ${sizes.mobile}px) {
    &::-webkit-scrollbar {
      display: none !important;
    }
    margin-top: 32px;
    overflow: overlay;
  }
`;

export const Tab = styled.div`
  display: flex;
  padding: 0px 17px 16px 17px;
  border-bottom: 0;
  color: #e5e5e5;
  margin-left: 40px;
  cursor: pointer;
  white-space: nowrap;
  font-family: 'Mont';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  width: min-content;
  /* width: calc(100% + 40px); */
  color: #191919;
  user-select: none;
  &:nth-child(1) {
    margin-left: 0;
  }
  @media (max-width: 1300px) {
    ${(props) =>
      props.count >= 4 &&
      css`
        margin: 0 auto;
      `}
  }
  @media (max-width: ${sizes.mobile}px) {
    &:nth-child(1) {
      margin-left: 16px;
    }
    padding: 0px 12px 11px 12px;
    margin-left: 10px;
    margin-right: 0;
    font-size: 12px;
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
  @media (max-width: ${sizes.mobile}px) {
  }
`;

export const Container = styled.div`
  width: 100%;

  @media (max-width: ${sizes.mobile}px) {
  }
`;
