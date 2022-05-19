import { sizes } from "sizes";
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
  align-items: start;
  background: #ffffff;
  position: relative;
  width: 71%;
  height: 80%;
  align-items: center;

  @media (max-width: ${sizes.mobile}px) {
    width: 100%;
    height: 100%;
    align-items: start;
  }
`;

export const Avatar = styled.div`
  min-width: 100px;
  min-height: 100px;
  width: 100px;
  height: 100px;

  border-radius: 50%;
  background-image: url(${({ src }) => src || ""});
  background-size: cover;
  background-position: center;

  @media (max-width: ${sizes.mobile}px) {
    border: 6px solid #ffffff;
  }
`;

export const AvatarText = styled.div`
  min-width: 100px;
  min-height: 100px;
  width: 100px;
  height: 100px;

  border-radius: 50%;
  background: #f9f9f9;

  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;

  color: #e5e5e5;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${sizes.mobile}px) {
    border: 6px solid #ffffff;
    margin-left: 25px;
  }
`;

export const BottomBlock = styled.div`
  margin-top: 50px;
  width: 65%;
  display: flex;

  @media (max-width: ${sizes.mobile}px) {
    flex-direction: column;
    width: 87%;
  }
`;

export const Slice = styled.div`
  height: 356px;
  width: 1px;
  background: #e5e5e5;
  margin-left: 56px;

  @media (max-width: ${sizes.mobile}px) {
    display: none;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 43px;
  width: 100%;

  @media (max-width: ${sizes.mobile}px) {
    margin-left: 0;
  }
`;

export const FormTop = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 56px;
  width: 100%;

  @media (max-width: ${sizes.mobile}px) {
    margin-left: 28px;
    margin-top: 28px;
  }
`;

export const Radios = styled.div`
  display: flex;
`;

export const ButtonBlock = styled.div``;

export const Title = styled.div`
  margin-top: 80px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  /* identical to box height, or 28px */

  text-transform: uppercase;

  /* Tabu/Black */

  color: #191919;

  @media (max-width: ${sizes.mobile}px) {
    margin-top: 32px;
    margin-left: 25px;
  }
`;

export const CloseBlock = styled.div`
  height: 80%;
  display: flex;
  align-items: start;
  margin-left: 24px;
  cursor: pointer;

  @media (max-width: ${sizes.mobile}px) {
    display: none;
  }
`;
