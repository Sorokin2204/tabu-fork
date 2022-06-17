import styled from 'styled-components';

export const HoverMenu = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 32px 56px 56px 56px;
  /* height: 497px; */
`;
export const SubCategory = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fit, minmax(0, auto)); */
  /* flex-direction: column; */
  /* margin-left: 150px; */

  &:nth-child(1) {
    margin-left: 0;
  }
`;
export const SubCategoryName = styled.div`
  font-family: Mont;
  font-weight: 700;
  font-size: 12px;
  color: #717171;
  margin-bottom: 26px;
  text-transform: uppercase;
  /* margin-left: 56px; */
`;
export const SubCategoryItems = styled.div`
  display: grid;
  grid-gap: 14px;
  grid-template-columns: repeat(auto-fill, minmax(auto, 180px));
  /* max-height: 300px; */
  /* flex-flow: column wrap; */
  /* justify-content: start; */
`;
export const SubCategoryItem = styled.div`
  /* margin-top: 24px; */
  font-family: Mont;
  font-weight: 600;
  font-size: 12px;
  color: #191919;
  /* max-width: min-content; */
  white-space: nowrap;
  /* margin-left: 56px; */

  // &:nth-child(1) {
  //   margin-top: 0;
  // }
`;
export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 10;
  /* height: 497px; */
`;

export const OpenAll = styled.div`
  font-family: Mont;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  color: #191919;
  cursor: pointer;
  margin-top: 40px;
  /* margin: 40px 0 0 0; */
  /* margin-left: 56px; */
`;
