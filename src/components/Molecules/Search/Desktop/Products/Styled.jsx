import { sizes } from "sizes";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  margin-top: 40px;

  @media (max-width: ${sizes.mobile}px) {
    justify-content: center;
    margin-top: 56px;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: start;
  width: 68%;

  @media (max-width: ${sizes.mobile}px) {
    width: 85%;
  }
`;
