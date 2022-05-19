import styled from "styled-components";

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
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

export const Description = styled.div`
  margin-top: 15px;
  font-family: Mont;
  font-size: 13px;
  font-weight: 400;
  color: #191919;
`;
