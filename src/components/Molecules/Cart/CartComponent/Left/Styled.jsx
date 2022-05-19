import styled from "styled-components";
import {sizes} from "../../../../../sizes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FirstCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 30% 40% 30%;
  padding: 16px 16px;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  grid-column-gap: 10px;

  @media (max-width: ${sizes.mobile}px) {
    padding: 16px 0;
    display: flex;
    width: 100vw;
    justify-content: space-between;
  }
`;

export const Head = styled.div`
  display: grid;

  font-family: Gilroy;
  font-weight: 400;
  font-size: 16px;
  color: #000;
  padding: ${({ padding }) => padding || ""};
  text-transform: uppercase;

  @media (max-width: ${sizes.mobile}px) {
    padding: 0;
    &:nth-child(1) {
      margin-left: 25px;
    }
    &:nth-child(3) {
     margin-right: 25px;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 24px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  margin-top: 40px;
`;
