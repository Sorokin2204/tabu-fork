import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 56px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 600;
  color: #191919;
  text-transform: uppercase;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameRow = styled.div`
  font-family: Mont;
  font-size: 14px;
  font-weight: 600;
  color: #717171;

  margin-top: 12px;

  &:nth-child(1) {
    margin-top: 0;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 35px;
`;

export const ValueRow = styled.div`
  font-family: Mont;
  font-size: 14px;
  font-weight: 600;
  color: #191919;

  margin-top: 12px;

  &:nth-child(1) {
    margin-top: 0;
  }
`;

export const Columns = styled.div`
  display: flex;
  margin-top: 22px;
`;
