import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImagesBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.div`
  /* width: 100%; */
  height: 400px;
  width: 400px;
  /* height: 469px; */
  background-image: url(${({ src }) => src || ''});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Slides = styled.div`
  margin-top: 16px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Slide = styled.div`
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
  border: 1px solid #e5e5e5;
  margin-left: 8px;

  &:nth-child(1) {
    margin-left: 0;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: #191919;
      border: none;
    `}
`;

export const Container2 = styled.div``;
