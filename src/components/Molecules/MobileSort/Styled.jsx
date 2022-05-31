import styled from 'styled-components';
import { css } from 'styled-components';

export const MobileSort = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: overlay;
  background-color: #fff;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  transition: all 0.3s;
  transform: translateX(100%);
  flex-direction: column;
  padding: 28px 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  font-family: Mont;
  font-weight: 500;
  font-size: 14px;
  color: #717171;
  padding: 0 25px;
`;
export const ListWrapper = styled.div`
  display: flex;
  padding: 0 25px;
  margin-top: 26px;
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;
export const Item = styled.div`
  padding: 14px 8px;
  background-color: #fff;
  user-select: none;
  cursor: pointer;
  font-family: Gilroy;
  font-weight: 400;
  font-size: 14px;
  color: #000;
  ${(props) =>
    props.active &&
    css`
      background-color: #f9f9f9;
    `}
`;
export const Header1 = styled.div``;
