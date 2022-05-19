import styled from "styled-components";

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Category = styled.div`
  display: flex;
  width: calc(100% - 54px);
  justify-content: space-between;
  padding: 16.5px 29px 16.5px 25px;
  font-family: Mont;
  font-weight: 600;
  font-size: 12px;
  color: #191919;
  text-transform: uppercase;
  cursor: pointer;

  &:nth-child(1) {
    margin-top: 12px;
  }
`;
