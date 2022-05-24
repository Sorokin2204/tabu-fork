import styled from 'styled-components';
import { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 72px;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
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
  /* identical to box height, or 28px */

  text-transform: uppercase;

  /* Tabu/Black */

  color: #191919;
  @media (max-width: 1110px) {
    font-size: 14px;
    margin-right: auto;
  }
`;

export const Inputs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 44px;
  margin-top: 56px;
  @media (max-width: 1110px) {
    grid-template-columns: 1fr;
    margin-top: 40px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  &:first-child {
    margin-top: 0;
  }
  @media (max-width: 1110px) {
    &:first-child {
      margin-top: 32px;
    }
  }
`;

export const RowCol = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const RowTitle = styled.div`
  font-family: 'Mont';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  user-select: none;
  /* identical to box height */

  display: flex;
  align-items: center;
  font-feature-settings: 'case' on;

  /* Tabu/Black */

  color: #191919;
`;

export const RowDescription = styled.div`
  user-select: none;
  font-family: 'Mont';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* Tabu/Dark/Text-Gray */

  color: #717171;
  margin-top: 4px;
`;

export const Switch = styled.div`
  display: flex;
  width: 38px;
  height: 19px;
  border: 1.5px solid #025b37;
  border-radius: 20.1875px;
  align-items: center;
  padding: 0 1px;
  transition: 300ms;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      justify-content: end;
      background: #025b37;
    `}
`;

export const SwitchCircle = styled.div`
  width: 16px;
  height: 16px;
  background: #025b37;
  border-radius: 50%;

  ${(props) =>
    props.active &&
    css`
      background: #fff;
    `}
`;

export const Inputs2 = styled.div``;
