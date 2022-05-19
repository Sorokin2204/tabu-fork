import { sizes } from "sizes";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const Block = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;

  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100vw;
  height: 90vh;
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
