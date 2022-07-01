import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-top: 88px;
`;
export const List = styled.div`
  display: flex;
  align-items: center;
`;
export const Item = styled.div`
  cursor: pointer;
  display: block;
  font-family: 'Mont';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  color: #191919;
  margin-left: 16px;

  ${(props) =>
    props.active &&
    css`
      color: #025b37;
    `}
`;
export const Left = styled.div``;
export const Next = styled.button`
  background-color: transparent;
  width: 48px;
  height: 36px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;

  &:disabled {
    opacity: 0.6;
  }
`;
