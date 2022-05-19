import { sizes } from "sizes";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding-bottom: 450px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 308px 1fr;
  grid-column-gap: 56px;
  padding: 0 103px 0 56px;

  @media (max-width: ${sizes.mobile}px) {
    grid-template-columns: 1fr;
    padding: 0 25;
  }
`;
