import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 8px;
  border: 1px solid #e5e5e5;
  margin-top: 34px;
  width: ${({ width }) => width || ''};
`;

export const Label = styled.label`
  position: relative;
  top: -20px;
  left: 12px;
  background-color: #fff;
  padding: 0 4px;
  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  color: ${({ error }) => (error ? '#D51313' : '#717171')};
  @media (max-width: 1110px) {
    top: -19px;
    font-size: 12px;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 0px 16px 13px;

  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: #191919;

  &::placeholder {
    font-family: 'Mont';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;

    color: #ababab;
  }
`;
