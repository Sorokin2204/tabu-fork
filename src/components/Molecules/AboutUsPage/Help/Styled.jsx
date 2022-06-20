import styled from 'styled-components';

export const Wrapper = styled.div``;
export const Inner = styled.div`
  max-width: 1200px;
  padding: 77px 56px 100px 56px;
  margin: 0 auto;
  @media (max-width: 1110px) {
    padding: 24px 16px 87px 16px;
  }
`;

export const Content = styled.div`
  max-width: 550px;
  @media (max-width: 1110px) {
    max-width: 343px;
    margin: 0 auto;
  }
`;

export const Text = styled.span`
  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #191919;
  display: inline-block;
  @media (max-width: 1110px) {
    font-size: 14px;
  }
`;
export const TextLink = styled.a`
  position: relative;
  color: #1a73c6;
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 0.5px;
    bottom: 2px;
    left: 0;
    background-color: #1a73c6;
  }
`;

export const TextLine = styled.a`
  position: relative;
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 0.5px;
    bottom: 2px;
    left: 0;
    background-color: #191919;
  }
`;

export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  /* identical to box height */

  text-transform: uppercase;

  /* Tabu/Black */

  color: #191919;

  margin-bottom: 35px;

  color: #191919;
  @media (max-width: 1110px) {
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 28px;
  }
`;
export const Desc = styled.div`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  /* Tabu/Black */

  color: #191919;
`;
