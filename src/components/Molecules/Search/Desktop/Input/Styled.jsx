import { sizes } from 'sizes';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 32px;
  width: 100%;
  justify-content: center;

  @media (max-width: ${sizes.mobile}px) {
    margin-top: 24px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 35%;
  @media (max-width: ${sizes.mobile}px) {
    width: 85%;
  }
`;

export const Subcont = styled.div`
  display: flex;
  width: 100%;

  padding-bottom: 4.42px;
  border-bottom: 1px solid #191919;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 8px;
  border: none;
  outline: none;

  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  ::placeholder {
    font-weight: 500;
    color: #ababab;
  }
  color: #191919;
`;

export const Submit = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  cursor: pointer;
`;
