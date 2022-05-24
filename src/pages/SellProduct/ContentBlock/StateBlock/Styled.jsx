import styled from 'styled-components';
import CheckOff from 'assets/svg/radio-off.svg';
import CheckOn from 'assets/svg/radio-on.svg';
import { css } from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
  @media (max-width: 1110px) {
    margin-top: 56px;
  }
`;

export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  text-transform: uppercase;
  color: #191919;
  @media (max-width: 1110px) {
    margin-right: auto;
    font-size: 14px;
  }
`;

export const Variants = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Variant = styled.div`
  margin-top: 32px;
  cursor: pointer;
  &:nth-child(1) {
    margin-top: 56px;
  }
  @media (max-width: 1110px) {
    &:nth-child(1) {
      margin-top: 40px;
    }
  }
`;

export const VariantRow = styled.div`
  display: flex;
  align-items: center;
`;

export const VariantStatus = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-image: url(${CheckOff});
  ${(props) =>
    props.active &&
    css`
      background-image: url(${CheckOn});
    `}
`;

export const VariantStatusCircle = styled.div`
  background: #025b37;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

export const VariantTitle = styled.div`
  user-select: none;
  font-family: 'Mont';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #000000;
  margin-left: 20px;
  @media (max-width: 1110px) {
    margin-left: 16px;
  }
`;

export const VariantDescription = styled.div`
  user-select: none;
  font-family: 'Mont';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #717171;
  margin-left: 40px;
  margin-top: 12px;
  @media (max-width: 1110px) {
    font-size: 12px;
    margin-left: 36px;
  }
`;

export const VariantTitle1 = styled.div``;
