import styled from 'styled-components';
import Chevron from 'assets/svg/big-right-chevorn.svg';
export const Wrapper = styled.div`
  background: #f9f9f9;
`;
export const Inner = styled.div`
  max-width: 1200px;
  padding: 64px 56px 178px 56px;
  margin: 0 auto;
  @media (max-width: 1110px) {
    padding: 24px 16px 147px 16px;
    max-width: 343px;
  }
`;

export const Left = styled.div``;
export const LeftTitle = styled.div`
  font-family: 'Mont';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  /* Tabu/Black */
  margin-bottom: 10px;
  color: #191919;
  @media (max-width: 1110px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;
export const LeftText = styled.div`
  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */
  margin-bottom: 30px;
  /* Tabu/Black */

  color: #191919;
  @media (max-width: 1110px) {
    margin-bottom: 6px;
    font-size: 12px;
  }
`;
export const LeftSteps = styled.div`
  display: flex;

  @media (max-width: 1110px) {
    flex-wrap: wrap;
  }
`;
export const LeftStep = styled.div`
  font-family: 'Mont';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: min-content;
  &::after {
    content: '';
    display: block;
    background-image: url(${Chevron});
    background-repeat: no-repeat;
    background-size: contain;
    min-width: 13px;
    min-width: 13px;
    height: 24px;
    height: 24px;
    margin: 0 19px;
  }

  &:last-child {
    &::after {
      display: none;
    }
  }

  color: #191919;

  @media (max-width: 1110px) {
    font-size: 14px;
    margin-top: 22px;
    &::after {
      margin: 0 32px;
    }
  }
`;
export const Right = styled.div``;
export const RightTitle = styled.div`
  font-family: 'Mont';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  /* Tabu/Black */
  margin-bottom: 10px;
  color: #191919;
  @media (max-width: 1110px) {
    font-size: 16px;
  }
`;
export const RightText = styled.div`
  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  /* Tabu/Black */

  color: #191919;
  @media (max-width: 1110px) {
    font-size: 12px;
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 613px minmax(0, 510px);
  column-gap: 56px;
  justify-content: space-between;
  @media (max-width: 1110px) {
    grid-gap: 50px;
    grid-template-columns: 1fr;
  }
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;
  margin: 0 auto;
  margin-bottom: 60px;
  color: #191919;
  @media (max-width: 1110px) {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    text-align: left;
    justify-content: start;
    margin-bottom: 16px;
  }
`;
export const Caption = styled.div`
  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #747474;
  margin-bottom: 30px;
  @media (max-width: 1110px) {
    margin-bottom: 22px;
  }
`;
export const BlockTitle = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  color: #191919;
  text-transform: uppercase;
  margin-bottom: 12px;
  @media (max-width: 1110px) {
    font-size: 16px;
    margin-bottom: 14px;
  }
`;
export const List = styled.div``;
export const Item = styled.div`
  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;

  color: #191919;
  @media (max-width: 1110px) {
    font-size: 12px;
    line-height: 24px;
  }
`;
export const Block = styled.div``;
