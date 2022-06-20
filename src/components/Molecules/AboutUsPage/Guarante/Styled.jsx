import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #f9f9f9;
`;
export const Inner = styled.div`
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: left 630px top 0px;
  max-width: 1200px;
  padding: 64px 56px 98px 56px;
  margin: 0 auto;
  @media (max-width: 1110px) {
    padding: 24px 16px 66px 16px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 570px) 338px;
  column-gap: 56px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1110px) {
    grid-template-columns: minmax(0, 343px);
    justify-content: center;
  }
`;
export const Img = styled.img`
  @media (max-width: 1110px) {
    width: 100%;
    grid-row: 1/2;
  }
`;
export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;
  /* Tabu/Black */
  display: flex;
  justify-content: center;
  color: #191919;
  margin: 0 auto;
  transform: translateY(38px);
  @media (max-width: 1110px) {
    transform: none;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 10px;
    justify-content: start;
    max-width: 343px;
  }
`;
export const Desc = styled.div`
  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  /* or 150% */

  margin-top: 60px;
  /* Tabu/Black */

  color: #191919;
  @media (max-width: 1110px) {
    margin-top: 30px;
    grid-row: 2/3;
  }
`;
