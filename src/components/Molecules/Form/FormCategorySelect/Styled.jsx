import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 10px;
  border: 1px solid #e5e5e5;
  margin-top: 34px;
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  z-index: 1;
  top: -8px;
  left: 16px;
  background-color: #fff;

  font-family: "Mont";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  color: #717171;
`;

export const Input = styled.div`
  height: 45px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  padding-left: 16px;

  font-family: "Mont";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  color: #191919;

  &::placeholder {
    font-family: "Mont";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;

    color: #a8a8a8;
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
