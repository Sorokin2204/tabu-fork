import styled from 'styled-components';

export const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  flex-direction: row;
  padding: 27px 25px;
`;
export const CategoryName = styled.div`
  font-family: Mont;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  user-select: none;
`;
export const CategoryExpand = styled.div`
  /* height: 6px; */
  /* width: 10px; */
  & svg {
    transform: ${(props) => (props.open ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;
export const CategoryLink = styled.a`
  & + & {
    margin-top: 14px;
  }
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  color: rgba(255, 255, 255, 0.8);
`;
export const CategoryContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  flex-basis: 100%;
`;
export const CategoryHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  cursor: pointer;
`;
