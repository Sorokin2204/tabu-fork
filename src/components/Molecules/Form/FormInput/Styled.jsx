import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 10px;
  border: 1px solid #e5e5e5;
  margin-top: 34px;
  width: ${({ width }) => width || ""};
`;

export const Label = styled.label`
  position: relative;
  top: -20px;
  left: 16px;
  background-color: #fff;

  font-family: "Mont";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  color: #717171;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 0px 16px 13px;

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
