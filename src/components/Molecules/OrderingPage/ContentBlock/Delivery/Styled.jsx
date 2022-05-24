import styled from 'styled-components';
import { css } from 'styled-components';

export const Wrapper = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  padding-bottom: 123px;

  ${(props) =>
    props.active &&
    css`
      display: flex;
    `};
  @media (max-width: 1110px) {
    padding-bottom: 200px;
    width: 100%;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
  width: 100%;
  padding: ${({ padding }) => padding || ''};

  @media (max-width: 1110px) {
    width: calc(100% - 50px);
    padding: 0 25px 0px 25px;
    margin-top: 56px;
  }
`;

export const Error = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

  color: #ee1616;
`;

export const TitleForm = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  text-transform: uppercase;
  color: #191919;
  @media (max-width: 1110px) {
    font-size: 14px;
    margin-right: auto;
  }
`;

export const DescriptionForm = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  padding-bottom: 8px;

  color: #717171;
  margin-top: 6px;
  @media (max-width: 1110px) {
    margin-top: 4px;
    padding-bottom: 6px;
    font-size: 12px;
    margin-right: auto;
  }
`;

export const Textarea = styled.textarea`
  width: 570px;
  height: 86px;
  resize: none;
  padding: 12px 16px;
  border: 1px solid #e5e5e5;
  outline: none;

  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;

  /* Tabu/Dark/Gray */

  color: #191919;
  margin-top: 32px;

  ::placeholder {
    font-family: 'Mont';
    font-style: normal;
    font-weight: 500;
    color: #ababab;
  }
  @media (max-width: 1110px) {
    padding: 12px 16px;
    font-size: 14px;
    box-sizing: border-box;
    width: 100%;
    ::placeholder {
      font-weight: 500;
      font-size: 14px;
    }
  }
`;

export const Radios = styled.div`
  display: flex;
  margin-top: 32px;
  width: 100%;
`;
