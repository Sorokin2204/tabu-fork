import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #f9f9f9;
`;
export const Inner = styled.div`
  max-width: 1200px;
  padding: 60px 56px 114px 76px;
  margin: 0 auto;
  @media (max-width: 1110px) {
    padding: 30px 23px 82px 23px;
    max-width: 330px;
  }
`;
export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  text-transform: uppercase;

  /* Tabu/Black */

  color: #191919;
  margin-bottom: 40px;
  @media (max-width: 1110px) {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 22px;
  }
`;
export const Desc = styled.div`
  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  text-align: center;

  /* Tabu/Black */

  color: #191919;
`;
export const Icon = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 40px;
  @media (max-width: 1110px) {
    width: 42px;
    height: 42px;
    margin-bottom: 26px;
  }
`;
