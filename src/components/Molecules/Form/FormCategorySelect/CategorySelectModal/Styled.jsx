import styled from "styled-components";
import { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;
`;

export const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.32);
  z-index: 120;
`;

export const Block = styled.div`
  z-index: 121;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BlockInside = styled.div`
  width: 73%;
  height: 80%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  /* identical to box height, or 28px */

  text-transform: uppercase;

  /* Tabu/Black */

  color: #191919;
  margin-top: 56px;
`;

export const Categories = styled.div`
  display: flex;
  margin-top: 69px;
  flex-direction: row;
  width: 80%;
  justify-content: start;
`;

export const CategoriesCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 36px;
  max-height: 230px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 16px;
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    width: 4px;
    border-radius: 16px;
    background: #e5e5e5;
  }

  &:nth-child(1) {
    margin-left: 0;
  }
`;

export const Category = styled.div`
  width: 212px;
  height: 32px;
  padding: 14px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;

  color: #000000;
  background-color: #fff;

  ${(props) =>
    props.active &&
    css`
      background-color: #f9f9f9;
    `}
`;

export const Line = styled.div`
  background: #e5e5e5;
  opacity: 0.5;
  height: 124px;
  width: 1px;
  margin-left: 36px;
  margin-top: 23px;
`;

export const Wraper = styled.div``;
