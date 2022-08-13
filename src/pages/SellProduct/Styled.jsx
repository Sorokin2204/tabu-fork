import { sizes } from 'sizes';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 62px;
  @media (max-width: 1110px) {
    box-sizing: border-box;
    padding-bottom: 170px;
    max-width: 444px;
    margin: 0 auto;
  }
`;
export const Title = styled.div`
  margin-top: 56px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  text-transform: uppercase;
  color: #191919;
  @media (max-width: 1110px) {
    margin-top: 8px;
    font-size: 14px;
    margin-right: auto;
    padding: 0 25px;
  }
`;

export const Description = styled.div`
  font-family: 'Gilroy';
  margin-top: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  color: #717171;
  max-width: 395px;

  @media (max-width: ${sizes.mobile}px) {
    padding: 0 25px;
    margin-right: auto;
    font-size: 12px;
    text-align: left;
  }
`;

export const Blocks = styled.div`
  margin-top: 72px;
  display: grid;
  grid-template-columns: 384px 1fr;
  max-width: 1215px;
  padding: 0 60px 0 40px;
  margin: 72px auto 0 auto;
  grid-gap: 132px;
  @media (max-width: 1110px) {
    grid-template-columns: auto;
    padding: 0 25px;
    margin: 80px auto 0 auto;
    grid-gap: 57px;
  }
`;

export const TitleSection = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */

  text-transform: uppercase;

  color: #000000;
  margin-top: 56px;
`;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const Accept = styled.div`
  text-align: center;
  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 13px;
  margin-top: 12px;
  color: #717171;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 332px;
  margin-top: 174px;
  @media (max-width: 1110px) {
    box-sizing: border-box;
    padding: 0 25px;
    width: 100%;
    margin-top: 80px;
  }
`;
