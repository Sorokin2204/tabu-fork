import styled from 'styled-components';
import { sizes } from '../../../../../../sizes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 517px;

  @media (max-width: ${sizes.mobile}px) {
    width: calc(100vw - 50px);
    padding: 0 25px;
  }
`;

export const Title = styled.div`
  font-family: Gilroy;
  font-weight: 400;
  font-size: 16px;
  color: #000;
  @media (max-width: ${sizes.mobile}px) {
    font-size: 14px;
  }
`;

export const Calc = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

export const ResultRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const ResultName = styled.div`
  font-family: Mont;
  font-weight: 800;
  font-size: 14px;
  color: #191919;
  text-transform: uppercase;
  @media (max-width: ${sizes.mobile}px) {
    font-size: 12px;
  }
`;

export const ResultValue = styled.div`
  font-family: Mont;
  font-weight: 800;
  font-size: 14px;
  color: #191919;
  @media (max-width: ${sizes.mobile}px) {
    font-size: 12px;
  }
`;

export const CalcRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  &:nth-child(1) {
    margin-top: 0;
  }
`;

export const CalcName = styled.div`
  font-family: Mont;
  font-weight: 600;
  font-size: 14px;
  color: #191919;
  @media (max-width: ${sizes.mobile}px) {
    font-size: 12px;
  }
`;

export const CalcValue = styled.div`
  font-family: Mont;
  font-weight: 600;
  font-size: 14px;
  color: #191919;
  @media (max-width: ${sizes.mobile}px) {
    font-size: 12px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  margin-top: 24px;
`;

export const Information = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
`;

export const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  background: #f9f9f9;
  border-radius: 50%;
`;

export const InfoText = styled.div`
  font-family: Mont;
  font-weight: 600;
  font-size: 12px;
  color: #717171;
  margin-left: 20px;
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 51px;
  margin-top: 37px;

  @media (max-width: ${sizes.mobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 8px;
  }
`;

export const Buttons2 = styled.div``;
