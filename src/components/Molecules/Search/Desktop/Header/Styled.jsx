import { sizes } from "sizes";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  height: 80px;
  width: 100vw;
  border-bottom: 1px solid #e5e5e5;

  @media (max-width: ${sizes.mobile}px) {
    height: 60px;
  }
`;

export const Logo = styled.header`
  @media (max-width: ${sizes.mobile}px) {
    width: 105px;
  }
`;

export const Close = styled.header`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 68px;
  right: 40px;
  cursor: pointer;

  @media (max-width: ${sizes.mobile}px) {
    width: 24px;
    height: 24px;
    right: 24px;
    top: 19px;
  }
`;
