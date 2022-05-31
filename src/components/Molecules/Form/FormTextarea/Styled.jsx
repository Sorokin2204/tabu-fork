import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 10px;
  border: 1px solid #e5e5e5;
  margin-top: 41px;
  @media (max-width: 1110px) {
    margin-top: 34px;
  }
`;

export const Label = styled.label`
  position: relative;
  top: -21px;
  left: 12px;
  background-color: #fff;
  padding: 0 4px;
  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  color: ${({ error }) => (error ? '#D51313' : '#717171')};
  @media (max-width: 1110px) {
    top: -20px;
    font-size: 12px;
  }
`;

export const Textarea = styled.textarea`
  border: none;
  outline: none;
  padding: 0px 16px 13px;

  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  min-height: 100px;
  overflow-y: auto;
  resize: none;

  color: #191919;

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 16px;
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    width: 4px;
    border-radius: 16px;
    background: #e5e5e5;
  }

  &::placeholder {
    font-family: 'Mont';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;

    color: #ababab;
  }
`;
