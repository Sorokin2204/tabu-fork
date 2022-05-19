import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.32);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 110;
  transition: 300ms;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  position: relative;
  width: 55%;
  height: 50%;
`;

export const Title = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  /* identical to box height, or 26px */

  text-transform: uppercase;

  color: #000000;
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 48px;
  width: 70%;
`;

export const Close = styled.div`
  position: absolute;
  top: 12px;
  cursor: pointer;
  right: 12px;
`;
