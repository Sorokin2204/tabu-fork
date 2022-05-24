import { sizes } from 'sizes';
import styled from 'styled-components';

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: ${sizes.mobile}px) {
    order: 1;
    margin-left: 0px;
    width: 100%;
  }
`;

export const TitleBlock = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  text-transform: uppercase;
  color: #191919;
  @media (max-width: 1110px) {
    display: none;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  width: 100%;
  @media (max-width: 1110px) {
    margin-top: 0px;
  }
`;

export const Form3 = styled.div``;

export const Buttons = styled.div`
  display: flex;
  margin-top: 174px;
`;
