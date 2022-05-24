import styled from 'styled-components';
import { css } from 'styled-components';

export const Wrapper = styled.div`
  z-index: 121;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*  
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms; */
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BlockInside = styled.div`
  width: 1040px;
  height: 573px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: calc(100vh - 40px);
  overflow: overlay;
  @media (max-width: 1110px) {
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
  }
`;

export const Title = styled.div`
  font-family: 'Gilroy';
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
export const CategoriesEmpty = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #717171;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
`;
export const Categories = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 240px 254px 254px;
  grid-template-rows: 230px;
  width: 100%;
  padding: 0 88px 96px 88px;
  margin-top: 69px;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1110px) {
    grid-template-rows: auto;
    padding: 0;
    width: 320px;
    justify-content: start;
    grid-template-columns: 1fr;
    margin-top: 40px;
    padding-bottom: 40px;
  }
`;
export const CategoriesColWrapper = styled.div`
  position: relative;
  &::after {
    content: '';
    display: block;
    height: 124px;
    width: 1px;
    background: #e5e5e5;
    position: absolute;
    top: 30px;
    left: -27px;
  }
  @media (max-width: 1110px) {
    &::after {
      display: none;
    }
  }
`;
export const CategoriesCol = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 230px;
  overflow-y: auto;
  position: relative;
  @media (max-width: 1110px) {
    max-height: calc(100vh - 213px);
  }
  /* &::-webkit-scrollbar {
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
  } */
`;

export const Category = styled.div`
  /* width: 212px; */
  /* height: 32px; */
  max-height: 46px;
  padding: 14px;
  font-family: 'Gilroy';
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
  margin-top: 23px;
`;

export const Wraper = styled.div``;
