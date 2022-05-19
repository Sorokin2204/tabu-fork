import styled from "styled-components";
import { css } from "styled-components";
import {sizes} from "../../../../sizes";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 39;

  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.32);

  display: flex;
  justify-content: center;
  align-items: center;

  visibility: hidden;
  opacity: 0;
  transition: 0.3s;

  ${(props) =>
    props.active &&
    css`
      visibility: inherit;
      opacity: 1;
    `}
`;

export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 740px;

  @media (max-width: ${sizes.mobile}px) {
    width: 90%;
  }
`;

export const Left = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;

  @media (max-width: ${sizes.mobile}px) {
    width: 90%;
    padding: 32px 24px 40px 24px;
    align-items: start;
  }
`;

export const CloseMobile = styled.div`
  position: absolute;
  top: 14px;
  right: 16px;
  cursor: pointer;
`;

export const Close = styled.div`
  margin-left: 24px;
  display: flex;
  align-items: start;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 20px;
  color: #717171;
  font-weight: 400;
  font-family: Gilroy;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: ${sizes.mobile}px) {
    font-size: 16px;
    text-align: left;
  }
`;

export const Description = styled.div`
  margin-top: 6px;
  text-align: center;
  font-size: 14px;
  color: #191919;
  font-weight: 400;
  font-family: Gilroy;

  @media (max-width: ${sizes.mobile}px) {
    font-size: 14px;
    text-align: left;
    margin-top: 8px;
  }
`;

export const MobileSocials = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

export const MobileSocial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 24px;
  
  &:nth-child(1) {
    margin-left: 0;
  }
`;

export const MobileSocialIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  min-width: 56px;
  min-height: 56px;
  background-color: #F9F9F9;
  border-radius: 50%;
`;

export const MobileSocialName = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: #1f1f1f;
  font-weight: 400;
  text-align: center;
  font-family: Inter;
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;

  padding: 13px 16px;
  border: 1px solid #e5e5e5;

  cursor: pointer;

  margin-left: 6px;

  &:nth-child(1) {
    margin-left: 0;
  }
`;

export const SocialIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialName = styled.div`
  margin-left: 12px;

  font-family: Gilroy;
  font-size: 14px;
  color: #3d3d3d;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 40px;
  background: #e5e5e5;
`;

export const LinkBlock = styled.div`
  margin-top: 42px;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Label = styled.div`
  font-family: Gilroy;
  font-size: 14px;
  color: #717171;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;

  padding: 15px 16px;
  margin-top: 18px;
`;

export const InputText = styled.div`
  font-family: Mont;
  font-size: 14px;
  color: #191919;
`;

export const InputCopy = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
