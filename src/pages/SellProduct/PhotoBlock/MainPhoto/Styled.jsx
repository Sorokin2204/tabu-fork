import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const MainPhoto = styled.button`
  box-sizing: border-box;
  border-radius: 16px;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 220px;
  @media (max-width: 1110px) {
    min-width: 156px;
  }
  background: url(${(props) => props.background || '#ffffff'});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
