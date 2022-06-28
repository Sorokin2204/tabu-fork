import styled from 'styled-components';
import { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 500px;
  @media (max-width: 1110px) {
    overflow: overlay;
  }
`;
export const Back = styled.div`
  svg {
    width: 12.5px;
    margin-right: 8px;
  }
  width: min-content;
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #717171;
  padding-left: 25px;
  margin-top: 16px;
`;
export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #000000;
  margin-top: 24px;
  @media (max-width: 1110px) {
    padding: 0 25px;
  }
  ${(props) =>
    props.wishlist &&
    css`
      margin-bottom: 0px;
    `}
`;
export const Wrapper2 = styled.div``;
