import { sizes } from 'sizes';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 32px;
  width: calc(100% - 50px);
  max-width: 468px;
  margin: 32px auto 0 auto;
  justify-content: center;

  @media (max-width: ${sizes.mobile}px) {
    padding: 0 25px;
    margin-top: 24px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 468px;
`;

export const Subcont = styled.div`
  display: flex;
  width: 100%;

  padding-bottom: 2px;
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
