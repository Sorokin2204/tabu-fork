import styled from 'styled-components';
import { css } from 'styled-components';

export const StyledMobileHeader = styled.header`
  display: grid;
  align-content: center;
  padding: 0 25px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  background: #ffffff;
  height: 80px;
  box-sizing: border-box;
  position: sticky;
  width: 100%;
  z-index: 99;
  top: 39px;
  left: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
export const CartNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 14px;
  height: 14px;

  color: #fff;
  background: #191919;
  font-size: 8px;
  font-weight: 700;
  font-family: 'Mont';

  position: absolute;
  right: -6px;
  top: -5px;

  border-radius: 50%;
`;

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.32);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 34;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  z-index: 100;
  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

export const Burger = styled.div``;
export const Logo = styled.div`
  display: grid;
  justify-self: center;
  width: 20vw;
  min-width: 105px;
  align-items: center;
  cursor: pointer;
`;

export const UserBlock = styled.div`
  display: flex;
  justify-self: end;
`;

export const Search = styled.div`
  cursor: pointer;
`;

export const Cart = styled.div`
  margin-left: 20px;
  cursor: pointer;
  position: relative;
`;

export const AddItem = styled.div`
  margin-left: 24px;
  cursor: pointer;
`;

export const LeftBox = styled.div`
  display: flex;
`;
