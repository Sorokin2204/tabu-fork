import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  outline: none;
  cursor: pointer;
  user-select: none;
  width: ${({ width }) => width || ''};
  background: ${({ background }) => background || ''};
  border: ${({ border }) => border || ''};
  border-radius: ${({ borderRadius }) => borderRadius || ''};
  color: ${({ color }) => color || ''};
  font-family: ${({ fontFamily }) => fontFamily || 'Mont'};
  font-size: ${({ fontSize }) => fontSize || '13px'};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  padding: ${({ padding }) => padding || '12px 16px'};
  margin: ${({ margin }) => margin || '0'};

  ${(props) =>
    props.outlined &&
    css`
      background-color: #ffffff;
      border: 1px solid #000000 !important;
    `}

  ${(props) =>
    props.topGreen &&
    css`
      background-color: #025b37;
      border: none;
      color: #fff;
    `}

  ${(props) =>
    props.filled &&
    css`
      background-color: #ffffff;
      border: 0;
      color: #000;
    `}

    ${(props) =>
    props.dark_filled &&
    css`
      background-color: #191919;
      border: 0;
      color: #fff;
    `}

    ${(props) =>
    props.w100 &&
    css`
      width: 100%;
    `}

    ${(props) =>
    props.grid &&
    css`
      display: grid;
    `}

    ${(props) =>
    props.alignCenter &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

    ${(props) =>
    props.green &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #025b37;
      color: #fff;
      border: none;
    `}

    ${(props) =>
    props.edit &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    `}

    ${(props) =>
    props.grayBorder &&
    css`
      border: 1px solid #717171;
      background: #fff;

      font-family: 'Mont';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      /* identical to box height */

      /* Tabu/Dark/Text-Gray */

      color: #717171;
    `}
`;

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
