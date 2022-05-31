import styled from 'styled-components';

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
  box-sizing: border-box;
  padding: 109px 76px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  width: 647px;
  height: 389px;
  max-height: calc(100vh - 40px);
  z-index: 110;
  @media (max-width: 1110px) {
    width: 343px;
    height: 267px;
  }
`;
export const Description = styled.div`
  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  max-width: 450px;
  color: #6a6a6a;
  margin-top: 24px;
`;
export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  /* identical to box height, or 26px */

  text-transform: uppercase;

  color: #000000;
  @media (max-width: 1110px) {
    font-size: 14px;
  }
`;
export const ButtonsSingle = styled.div`
  display: grid;
  grid-template-columns: 240px;
  margin: auto auto 0 auto;
  /* @media (max-width: 1110px) {
    margin-top: 40px;
    grid-template-columns: repeat(1, 215px);
    grid-gap: 12px;
  } */
`;
export const Buttons = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-top: auto;
  @media (max-width: 1110px) {
    margin-top: 40px;
    grid-template-columns: repeat(1, 215px);
    grid-gap: 12px;
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 12px;
  cursor: pointer;
  right: 12px;
  @media (max-width: 1110px) {
    top: 14px;
    right: 16px;
    & svg {
      width: 20px;
      height: 20px;
    }
  }
`;
