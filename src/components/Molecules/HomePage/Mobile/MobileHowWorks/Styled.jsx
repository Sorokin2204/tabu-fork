import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 64px;
  padding-bottom: 144px;
  @media (max-width: 1110px) {
    padding-top: 46px;
    padding-bottom: 16px;
  }
`;
export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 41px;
  @media (max-width: 1110px) {
    margin-top: 28px;
  }
  @media (max-width: 601px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
