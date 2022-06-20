import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #f9f9f9;
`;
export const Inner = styled.div`
  max-width: 1200px;
  padding: 64px 56px 140px 56px;
  margin: 0 auto;
  @media (max-width: 1110px) {
    padding: 24px 16px 46px 16px;
  }
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 54px 0;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;
  @media (max-width: 1110px) {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 20px;
    text-align: left;
    justify-self: flex-start;
    justify-content: start;
    max-width: 343px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 446px) minmax(0, 535px);
  column-gap: 56px;
  justify-content: space-between;
  @media (max-width: 1110px) {
    grid-template-columns: minmax(0, 343px);
    justify-content: center;
  }
`;
export const List = styled.div`
  @media (max-width: 1110px) {
    order: 2;
  }
`;
export const Item = styled.div`
  & + & {
    margin-top: 54px;
  }
  @media (max-width: 1110px) {
    & + & {
      margin-top: 30px;
    }
  }
`;
export const ItemTitle = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  text-transform: uppercase;
  margin-bottom: 12px;
  @media (max-width: 1110px) {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    margin-bottom: 8px;
  }
`;
export const ItemDesc = styled.div`
  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  @media (max-width: 1110px) {
    font-family: 'Mont';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
  }
`;
export const Img = styled.img`
  display: block;
  width: 100%;
  @media (max-width: 1110px) {
    order: 1;
    margin-bottom: 30px;
  }
`;
