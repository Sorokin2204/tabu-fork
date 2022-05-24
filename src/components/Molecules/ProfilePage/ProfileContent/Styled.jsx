import styled from 'styled-components';
import { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1110px) {
    overflow: overlay;
  }
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
      @media (max-width: 1110px) {
        margin-bottom: 50px;
      }
      margin-bottom: 0px;
    `}
`;
export const Wrapper2 = styled.div``;
