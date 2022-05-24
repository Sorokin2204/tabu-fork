import styled from 'styled-components';
import Arrow from 'assets/svg/chevron.svg';
import { css } from 'styled-components';
export const Wrapper = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 18px 25px 52px 25px;
  width: 100vw;
  background: #f9f9f9;
  grid-template-columns: auto 1fr auto;
  box-sizing: border-box;
  grid-gap: 20px;
  transition-delay: 0.3s;
  transition-property: transform;
  transition-duration: 0.3s;

  transform: translateY(0%);

  @media (max-width: 1110px) {
    display: grid;
  }
  ${(props) =>
    props.active &&
    css`
      transform: translateY(100%) !important;
    `}
`;
export const Count = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min-content;
  &::before {
    content: '';
    display: block;
    width: 4px;
    height: 8px;
    background-image: url(${Arrow});
    background-size: contain;
    transform: rotate(-90deg);
    background-repeat: no-repeat;
    margin-left: 1px;
  }
`;
export const ProductImageList = styled.div`
  display: flex;
`;
export const ProductImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  height: 72px;
  background-color: #f4f4f6;
  min-width: 48px;
  width: 48px;
  & + & {
    margin-left: 8px;
  }
`;
export const ProductImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
export const Total = styled.div`
  margin-top: 15px;
  text-align: right;
`;
export const TotalLabel = styled.div`
  font-family: 'Mont';
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 140%;
  text-transform: uppercase;
  color: #191919;
  margin-bottom: 4px;
`;
export const TotalPrice = styled.div`
  font-family: 'Mont';
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 140%;
  text-transform: uppercase;
  color: #191919;
`;
