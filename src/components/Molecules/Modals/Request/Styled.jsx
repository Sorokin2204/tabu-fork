import { sizes } from "sizes";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  padding: 0 16px;
  transition: 300ms;
`;

export const Block = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 106;
`;

export const BlockInside = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 584px;
  height: auto;
  padding: 60px 62px 64px;
  position: relative;

  @media (max-width: ${sizes.mobile}px) {
    width: 100vw;
    height: 100vh;
    padding: 0;
    justify-content: start;
  }
`;

export const Title = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  /* identical to box height, or 28px */
  padding-bottom: 20px;

  text-transform: uppercase;

  /* Tabu/Black */

  color: #191919;
`;

export const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 101;
  background: rgba(0, 0, 0, 0.32);
`;

export const Close = styled.div`
  position: absolute;
  cursor: pointer;
  z-index: 110;
  top: 12px;
  right: 12px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 48px;

  @media (max-width: ${sizes.mobile}px) {
    width: 100%;
  }
`;
