import styled from 'styled-components';

export const Wrapper = styled.div``;
export const Inner = styled.div`
  /* background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: left 630px top 0px; */
  display: grid;
  grid-template-columns: minmax(0, 548px) minmax(0, 509px);
  justify-content: space-between;
  column-gap: 56px;
  max-width: 1200px;
  padding: 70px 56px 114px 56px;
  margin: 0 auto;
  @media (max-width: 1110px) {
    grid-template-columns: minmax(0, 343px);
    padding: 24px 16px 40px 16px;
    justify-content: center;
  }
`;

export const Content = styled.div`
  max-width: 548px;
`;
export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-column: 2/3;
  grid-row: 1/3;
  @media (max-width: 1110px) {
    grid-column: 1/2;
    grid-row: 2/3;
    height: 216px;
    object-fit: cover;
  }
`;
export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  grid-column: 1/2;
  grid-row: 1/2;
  text-transform: uppercase;

  margin-bottom: 40px;

  color: #191919;
  @media (max-width: 1110px) {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    margin-bottom: 20px;
  }
`;
export const Desc = styled.div`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  grid-column: 1/2;
  grid-row: 2/3;

  color: #191919;
  @media (max-width: 1110px) {
    font-family: 'Mont';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    grid-row: 3/4;
    margin-top: 30px;
  }
`;
