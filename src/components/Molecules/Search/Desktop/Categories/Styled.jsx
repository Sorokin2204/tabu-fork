import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 24px;
`;

export const Container = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
`;

export const Category = styled.div`
  margin-top: 20px;

  font-family: "Mont";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  color: #000000;

  &:nth-child(1) {
    margin-top: 0;
    cursor: pointer;
  }
`;

export const Wrapper2 = styled.div``;
