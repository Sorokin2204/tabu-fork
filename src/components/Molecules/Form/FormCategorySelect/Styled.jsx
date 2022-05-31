import styled from 'styled-components';
import Arrow from 'assets/svg/chevron-bold.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 3px;
  border: 1px solid #e5e5e5;
  margin-top: 34px;
  position: relative;
  @media (max-width: 1110px) {
    margin-top: 0;
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

  color: ${(props) => (props.error ? '#D51313' : '#717171')};
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
  /* padding-left: 16px; */
  padding: 0 16px 0 16px;
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
`;

export const Dropdown = styled.div`
  position: absolute;
  z-index: 2;

  background: #ffffff;
  border: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  width: calc(100% - 32px);
  height: auto;
  max-height: 464px;
  overflow-y: auto;
  padding: 24px 16px 41px 16px;
  top: 54px;
`;

export const CheckBoxes = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-top: 24px;

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 16px;
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    width: 4px;
    border-radius: 16px;
    background: #e5e5e5;
  }
`;

export const Input1 = styled.div``;
