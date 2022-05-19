import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 0 23px;
  background-color: #f9f9f9;
`;

export const Title = styled.div`
  font-family: Gilroy;
  font-size: 20px;
  font-weight: 400;
  color: #191919;
  text-align: center;
`;

export const Tab = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e2e2e2;
  padding: 24px 25px;
  align-items: center;

  font-family: Mont;
  font-size: 14px;
  font-weight: 600;
  color: #191919;

  &:nth-child(1) {
    margin-top: 7px;
  }

  &:nth-last-child(1) {
    border-bottom: 0;
  }
`;

export const TabIcon = styled.div`
  margin-left: 23px;
`;
export const Title1 = styled.div``;
