import { sizes } from 'sizes';
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
export const AvatarBox = styled.div`
  position: relative;
  min-width: 100px;
  min-height: 100px;
  width: 100px;
  height: 100px;
  @media (max-width: ${sizes.mobile}px) {
    margin: 0 auto;
  }
`;
export const AvatarBtn = styled.div`
  background-color: #191919;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  right: 0;
  position: absolute;
  & img {
    width: 16px;
    height: 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-46%, -55%);
    display: block;
    /* margin-left: 1px; */
  }
`;
export const Block = styled.div`
  flex-direction: column;
  align-items: start;
  background: #ffffff;
  width: 1024px;
  height: 726px;
  align-items: center;
  overflow: overlay;
  max-height: calc(100vh - 40px);
  @media (max-width: ${sizes.mobile}px) {
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
  }
`;

export const Avatar = styled.div`
  min-width: 100px;
  min-height: 100px;
  width: 100px;
  height: 100px;

  border-radius: 50%;
  background-image: url(${({ src }) => src || ''});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

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

  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;

  color: #e5e5e5;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${sizes.mobile}px) {
    margin: 0 auto;
  }
`;

export const BottomBlock = styled.div`
  display: flex;
  margin: 0 auto;
  @media (max-width: ${sizes.mobile}px) {
    flex-direction: column;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 56px;
  width: 100%;

  @media (max-width: ${sizes.mobile}px) {
    margin-left: 0;
  }
`;

export const FormTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-left: 1px solid #e5e5e5;
  padding-left: 56px;
  box-sizing: border-box;
  @media (max-width: ${sizes.mobile}px) {
    margin-top: 28px;
    padding: 0;
    border: none;
  }
`;

export const Radios = styled.div`
  display: flex;
  padding-bottom: 3px;
  @media (max-width: ${sizes.mobile}px) {
    padding-bottom: 2px;
  }
`;

export const ButtonBlock = styled.div``;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  margin-bottom: 48px;
  text-transform: uppercase;
  color: #191919;

  @media (max-width: ${sizes.mobile}px) {
    font-size: 16px;
    margin-top: 32px;
    margin-right: auto;
    margin-bottom: 0px;
  }
`;

export const CloseBlock = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  align-items: start;
  margin-left: 24px;
  cursor: pointer;
  position: absolute;
  right: -56px;
  top: -7px;
  z-index: 110;
  @media (max-width: ${sizes.mobile}px) {
    display: none;
  }
`;
