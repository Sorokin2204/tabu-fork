import styled from "styled-components";

export const HoverMenu = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;
  padding: 32px 56px 120px 0;
  height: 497px;
`;
export const SubCategory = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 150px;

  &:nth-child(1) {
    margin-left: 0;
  }
`;
export const SubCategoryName = styled.div`
  font-family: Mont;
  font-weight: 700;
  font-size: 12px;
  color: #717171;
  text-transform: uppercase;
  margin-left: 56px;
`;
export const SubCategoryItems = styled.div`
  display: flex;
  column-count: 4;
  max-height: 300px;
  flex-flow: column wrap;
  justify-content: start;
`;
export const SubCategoryItem = styled.div`
  margin-top: 24px;
  font-family: Mont;
  font-weight: 600;
  font-size: 12px;
  color: #191919;
  margin-left: 56px;

  // &:nth-child(1) {
  //   margin-top: 0;
  // }
`;
export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 10;
  height: 497px;
`;

export const OpenAll = styled.div`
  font-family: Mont;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  color: #191919;
  cursor: pointer;
  margin: 40px 0 0 0;
  margin-left: 56px;
`;
