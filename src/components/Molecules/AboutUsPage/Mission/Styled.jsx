import styled from 'styled-components';

export const Wrapper = styled.div``;
export const Inner = styled.div`
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: left 630px top 0px;
  max-width: 1200px;
  padding: 74px 56px 153px 56px;
  margin: 0 auto;

  @media (max-width: 1110px) {
    max-width: 343px;
    padding: 24px 16px 57px 16px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 756px) 290px;
  column-gap: 56px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1110px) {
    grid-template-columns: 1fr;
  }
`;
export const Img = styled.img`
  @media (max-width: 1110px) {
    max-width: 237px;
    grid-row: 1/2;
    margin: 0 auto;
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
  margin-bottom: 55px;
  @media (max-width: 1110px) {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    margin: 0;
    margin-bottom: 20px;
    justify-content: start;
  }
`;
export const Desc = styled.div`
  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  @media (max-width: 1110px) {
    font-size: 14px;
    line-height: 24px;
    grid: 2/3;
    margin-top: 18px;
  }
  color: #191919;
`;
