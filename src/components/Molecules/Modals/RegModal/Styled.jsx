import styled from 'styled-components';
import Image from 'assets/img/reg.png';
import { sizes } from 'sizes';

export const Wrapper = styled.div`
  transition: 300ms;
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${sizes.mobile}px) {
    display: none;
  }
`;

export const Block = styled.div`
  transition: 300ms;
  position: fixed;
  z-index: 101;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1280px;
  max-height: 720px;
  width: calc(100vw - 80px);
  height: calc(100vh - 80px);
  overflow: overlay;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #fff;
  @media (max-width: ${sizes.mobile}px) {
    width: 100vw;
    height: 100vh;
    grid-template-columns: 1fr;
  }
  /* @media (max-width: ${sizes.mobile}px) {
    top: 0;
    left: 0;
    z-index: 104;
    position: fixed;
  } */
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 420px;

  @media (max-width: ${sizes.mobile}px) {
    padding: 0;
    width: 100%;
  }
`;

export const LeftBlock = styled.div`
  padding: 0;
  display: block;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 40px;
  margin-bottom: 14px;
  @media (max-width: ${sizes.mobile}px) {
    padding: 48px 25px 48px 25px;
    max-width: calc(100% - 50px);
  }
  /* @media (max-width: ${sizes.mobile}px) {
    padding: 48px 24px 0 24px;
    height: 100%;
    width: calc(100% - 48px);
    display: flex;
    flex-direction: column;
    justify-content: start;
  } */
`;

export const Right = styled.div`
  display: flex;
  width: 100%;
  background-image: url(${Image});
  background-size: cover;
  background-position: left center;
  display: inherit;

  @media (max-width: ${sizes.mobile}px) {
    display: none;
  }
`;

export const CreateAccount = styled.div`
  margin-top: 40px;
  display: flex;
  width: 100%;
  justify-content: center;

  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-decoration: underline;

  color: #000000;
  cursor: pointer;
`;

export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;

  color: #191919;
`;

export const Description = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

  color: #717171;
  margin-top: 6px;
  @media (max-width: ${sizes.mobile}px) {
    margin-top: 12px;
  }
`;

export const Radios = styled.div`
  display: flex;
  margin-top: 28px;
`;

export const BottomBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  align-items: center;
  @media (max-width: ${sizes.mobile}px) {
    margin-top: 32px;
  }
`;

export const RememberBlock = styled.div``;

export const Forgot = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-decoration-line: underline;

  color: #191919;
  cursor: pointer;
`;

export const Close = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`;

export const Wrapper2 = styled.div``;
