import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: calc(100% - 50px);
  max-width: 468px;
  margin: 0 auto;
  justify-content: center;
  margin-top: 24px;
  overflow: scroll;
  @media (max-width: 1110px) {
    padding: 0 25px;
  }
`;
export const NotFound = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: auto;
  font-family: 'Mont';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  color: #717171;
  padding-bottom: 50px;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 468px;
  display: flex;
  flex-direction: column;
`;

export const Category = styled.div`
  margin-top: 20px;
  cursor: pointer;
  font-family: 'Mont';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  & span {
    font-weight: 700;
  }
  color: #000000;

  &:nth-child(1) {
    margin-top: 0;
    cursor: pointer;
  }
`;

export const Wrapper2 = styled.div``;
