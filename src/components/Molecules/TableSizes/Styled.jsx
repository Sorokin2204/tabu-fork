import styled from "styled-components";
import { css } from "styled-components";
import {sizes} from "../../../sizes";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 40;

  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.32);

  display: flex;
  justify-content: center;
  align-items: center;

  visibility: hidden;
  opacity: 0;
  transition: 0.3s;

  ${(props) =>
    props.active &&
    css`
      visibility: inherit;
      opacity: 1;
    `}
`;

export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 740px;

  @media (max-width: ${sizes.mobile}px) {
    width: 90%;
  }
`;

export const Left = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;

  padding: 56px 37px 156px 37px;

  @media (max-width: ${sizes.mobile}px) {
    padding: 63px 16px 40px 16px;
  }
`;

export const Close = styled.div`
  margin-left: 24px;
  display: flex;
  align-items: start;
  cursor: pointer;
`;

export const CloseMobile = styled.div`
  position: absolute;
  top: 14px;
  right: 16px;
  cursor: pointer;
`;


export const Title = styled.div`
  font-family: Gilroy;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const ImageContainer = styled.div`
  margin-top: 56px;
`;
