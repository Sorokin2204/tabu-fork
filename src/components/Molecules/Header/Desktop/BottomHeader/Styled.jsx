import styled from 'styled-components';

export const BottomHeader = styled.div`
  display: flex;
  height: 49px;
  padding: 0 56px;
  background: #025b37;
  justify-content: space-between;
`;

export const BottomCategories = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BottomCategory = styled.div`
  display: flex;
  align-items: center;
  margin-left: 28px;
  padding: 0 4px 0 4px;

  font-family: Mont;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;

  cursor: pointer;
  color: #ffffff;

  &:nth-child(1) {
    margin-left: 0;
  }
  position: relative;
  &:hover {
    &::after {
      content: '';
      height: 2px;
      width: 100%;
      background-color: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    /* border-bottom: 2px solid #fff; */
  }
`;

export const SearchBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
