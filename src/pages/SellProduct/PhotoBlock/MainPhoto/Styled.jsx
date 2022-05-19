import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const MainPhoto = styled.button`
  border: 1px dashed rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 16px;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 210px;

  background: url(${(props) => props.background || "#ffffff"});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
