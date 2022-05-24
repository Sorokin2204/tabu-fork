import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 25px 0 25px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  margin-top: 60px;
  @media (max-width: 1110px) {
    margin-top: 56px;
  }
`;
