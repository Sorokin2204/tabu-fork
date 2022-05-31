import styled from 'styled-components';
import { css } from 'styled-components';
import { sizes } from '../../../../sizes';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  visibility: hidden;
  opacity: 0;
  transition: 0.3s;

  @media (max-width: ${sizes.mobile}px) {
    max-width: calc(100vw - 32px);
    overflow: overlay;
  }
  ${(props) =>
    props.active &&
    css`
      visibility: inherit;
      opacity: 1;
    `}
`;

export const WrapperOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;

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
  width: 760px;
  position: relative;
  max-height: calc(100vh - 40px);
  overflow: overlay;

  @media (max-width: ${sizes.mobile}px) {
    width: min-content;
  }
`;

export const Left = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 56px 132px 97px;

  @media (max-width: ${sizes.mobile}px) {
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
  position: absolute;
  right: -64px;
  top: 0;
`;

export const Title = styled.div`
  font-size: 20px;
  color: #191919;
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
  color: #717171;
  font-weight: 400;
  font-family: Gilroy;

  @media (max-width: ${sizes.mobile}px) {
    font-size: 14px;
    text-align: left;
    margin-top: 8px;
    line-height: 140%;
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
  background-color: #f9f9f9;
  border-radius: 50%;
  & img {
    width: 24px;
    height: 24px;
  }
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
  display: grid;
  grid-template-columns: repeat(4, 120px);
  grid-gap: 4px;
  justify-content: center;
  margin-top: 40px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;

  padding: 12.5px 16px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  cursor: pointer;
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
  @media (max-width: ${sizes.mobile}px) {
    margin-top: 32px;
  }
`;

export const Label = styled.div`
  font-family: Gilroy;
  font-size: 14px;
  color: #717171;
  @media (max-width: ${sizes.mobile}px) {
    font-size: 12px;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;

  padding: 11px 16px;
  margin-top: 18px;
  @media (max-width: ${sizes.mobile}px) {
    margin-top: 24px;
  }
`;

export const InputText = styled.div`
  font-family: Mont;
  font-size: 14px;
  color: #191919;
  @media (max-width: ${sizes.mobile}px) {
    font-size: 12px;
  }
`;

export const InputCopy = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
