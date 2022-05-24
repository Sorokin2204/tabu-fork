import styled from 'styled-components';
import Arrow from 'assets/svg/chevron-bold.svg';
import Close from 'assets/svg/close.svg';
import { css } from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 3px;
  border: 1px solid #e5e5e5;
  margin-top: 41px;
  position: relative;
  @media (max-width: 1110px) {
    margin-top: 34px;
  }
`;

export const Label = styled.label`
  position: absolute;
  z-index: 1;
  top: -11px;
  left: 12px;
  background-color: #fff;
  padding: 0 4px;
  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  color: #717171;
  @media (max-width: 1110px) {
    top: -10px;
    font-size: 12px;
  }
`;

export const Input = styled.div`
  height: 45px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  padding-left: 16px;

  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: #191919;

  &::placeholder {
    font-family: 'Mont';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;

    color: #ababab;
  }
  &::before {
    content: '';
    display: block;
    width: 11px;
    height: 7px;
    background-image: url(${Arrow});
    background-size: contain;
    transform: translateY(-50%);
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    right: 19px;

    margin-left: 1px;
  }
  ${(props) =>
    props.selected &&
    css`
      &::before {
        display: none;
      }
    `}
  ${(props) =>
    props.open &&
    css`
      &::before {
        transform: translateY(-50%) rotate(180deg);
      }
    `}
`;
export const ResetSelected = styled.div`
  width: 20px;
  height: 20px;

  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    mask-image: url(${Close});
    mask-size: contain;
    background-color: #717171;
  }
`;
export const Dropdown = styled.div`
  position: absolute;
  z-index: 2;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  width: calc(100% + 2px);
  height: auto;
  max-height: 464px;
  overflow-y: auto;
  padding: 24px 16px 41px 16px;
  top: 100%;
  left: -1px;
  @media (max-width: 1110px) {
    max-height: 444px;
    padding: 20px 16px 24px 16px;
  }
`;

export const CheckBoxes = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-top: 24px;
  @media (max-width: 1110px) {
    margin-top: 20px;
  }
`;

export const Input1 = styled.div``;
