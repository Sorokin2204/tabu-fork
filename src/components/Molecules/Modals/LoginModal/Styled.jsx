import styled from "styled-components";
import Image from "assets/img/reg.png";
import { sizes } from "sizes";

export const Wrapper = styled.div`
  transition: 300ms;
  position: fixed;
  z-index: 60;
  top: 0;
  left: 0;
  padding: 90px 80px;
  width: calc(100vw - 160px);
  height: calc(100vh - 180px);
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Block = styled.div`
  display: flex;
  background-color: #fff;
  width: 100%;
  height: 100%;
  position: relative;

  @media (max-width: ${sizes.mobile}px) {
    top: 0;
    left: 0;
    z-index: 104;
    position: fixed;
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 45%;
  padding: 0px 137px 0px 100px;

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
  @media (max-width: ${sizes.mobile}px) {
    padding: 48px 24px 0 24px;
    height: 100%;
    width: calc(100% - 48px);
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
`;

export const Right = styled.div`
  display: flex;
  width: 45%;
  background-image: url(${Image});
  background-size: cover;
  background-position: left center;
  display: inherit;

  @media (max-width: ${sizes.mobile}px) {
    display: none;
  }
`;

export const Title = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;

  color: #191919;
`;

export const Description = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  /* Tabu/Dark/Text-Gray */

  color: #717171;
  margin-top: 6px;
`;

export const Radios = styled.div`
  display: flex;
  margin-top: 28px;
`;

export const BottomBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  align-content: center;
`;

export const RememberBlock = styled.div``;

export const Forgot = styled.div`
  font-family: "Gilroy";
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

export const CreateAccount = styled.div`
  margin-top: 40px;
  display: flex;
  width: 100%;
  justify-content: center;

  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-decoration: underline;

  color: #000000;
  cursor: pointer;
`;

export const Wrapper2 = styled.div``;
