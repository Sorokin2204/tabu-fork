import styled from 'styled-components';
import { sizes } from '../../../../sizes';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 56px 108px 143px 56px;

  @media (max-width: ${sizes.mobile}px) {
    padding: 8px 0 56px 0;
  }
`;

export const Title = styled.div`
  font-family: Gilroy;
  font-weight: 400;
  font-size: 20px;
  color: #191919;
  text-transform: uppercase;
  @media (max-width: 1110px) {
    font-size: 14px;
    margin-right: auto;
    padding: 0 25px;
  }
`;

export const Description = styled.div`
  margin-top: 6px;
  font-family: Gilroy;
  font-weight: 400;
  font-size: 14px;
  color: #717171;
  @media (max-width: 1110px) {
    font-size: 12px;
    margin-right: auto;
    padding: 0 25px;
    margin-top: 4px;
  }
`;

export const Left = styled.div``;
