import styled from "styled-components";

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  display: inline-flex;
  background-color: #f9f9f9;
  padding: 14px 16px;
  margin-left: 20px;

  &:nth-child(1) {
    margin-left: 0;
  }
`;

export const CloseBtn = styled.img`
  margin-left: 36.58px;
`;
