import { sizes } from 'sizes';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 90vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  @media (max-width: 1110px) {
    height: 80vh;
  }
`;

export const Block = styled.div`
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;

  display: grid;
  grid-template-rows: repeat(4, auto) 1fr;
  flex-direction: column;
  background-color: #fff;
  width: 100vw;
  height: 90vh;
  @media (max-width: 1110px) {
    grid-template-rows: repeat(3, auto) 1fr;
    height: 80vh;
  }
`;

export const Background = styled.div`
  background: #191919;
  opacity: 0.8;
  position: fixed;
  z-index: 99;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
