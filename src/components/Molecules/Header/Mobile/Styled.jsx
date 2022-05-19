import styled from "styled-components";

export const StyledMobileHeader = styled.header`
  display: grid;
  align-content: center;
  padding: 0 25px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  background: #ffffff;
  height: 80px;
`;

export const Burger = styled.div``;
export const Logo = styled.div`
  display: grid;
  justify-self: center;
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
