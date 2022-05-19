import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
  justify-content: center;
`

export const Button = styled.button`
  border: 1px solid #e5e5e5;
  padding: 14px 0;
  color: #717171;
  font-family: Mont;
  font-weight: 600;
  font-size: 12px;
  width: 100%;
  margin-left: 16px;
  outline: none;
  background: none;
  
  &:nth-child(1) {
    margin-left: 0;
  }
`