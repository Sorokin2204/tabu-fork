import { useState } from "react";
import styled from "styled-components";
import Expand from "assets/svg/Expand.svg";

const StyledSelect = styled.select`
  display: flex;
  width: 100%;
  margin-top: 29px;
  padding: 11px 14px;
  outline: none;
  border: 1px solid #e5e5e5;
  font-family: "Gilroy";
  font-size: 12px;
  color: #717171;
  font-weight: 400;

  background-image: url(${Expand});
  background-size: 11px 6px;
  background-position: right 17px center;
  background-repeat: no-repeat;

  /*for WebKit*/
  -webkit-appearance: none;
  /* for FF */
  -moz-appearance: none;
  text-indent: 0.01px;
  text-overflow: "";
  /* for IE */
  -ms-appearance: none;
  appearance: none !important;
`;
const StyledOption = styled.option`
  outline: none;
  border: 0;
  padding: 11px 14px;
`;

const DefaultSelect = (props) => {
  const Add = props.optionsSelect.map((Add) => Add);

  return (
    <StyledSelect>
      {Add.map((address, key) => (
        <StyledOption key={key} value={key}>
          {address}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};

export default DefaultSelect;
