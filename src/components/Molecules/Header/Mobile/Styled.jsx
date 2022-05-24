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
`;

export const AddItem = styled.div`
  margin-left: 24px;
  cursor: pointer;
`;

export const LeftBox = styled.div`
  display: flex;
`;
