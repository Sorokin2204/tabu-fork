import styled from 'styled-components';
import { media } from '../../sizes';

export const Wrapper = styled.div`
  padding: 24px 64px;

  @media ${media.mobile} {
    padding: 0 25px 80px 25px;
  }
`;

export const TitlePage = styled.div`
  color: #191919;
  font-family: Gilroy;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 8px;

  @media ${media.mobile} {
    font-size: 14px;
    text-align: left;
    margin-top: 16px;
  }
`;
export const StyledProducts = styled.div`
  margin-top: 24px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-self: start;
  grid-gap: 48px 24px;
  justify-content: start;

  @media ${media.mobile} {
    grid-gap: 24px 16px;
    grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
  }
`;
