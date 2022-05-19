import styled from "styled-components";

export const MobileFilter = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 20;
  top: 0;
  left: 0;
  display: none;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  margin-top: 28px;
  padding: 0 25px;
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.div`
  font-family: Mont;
  font-weight: 600;
  font-size: 14px;
`
export const Close = styled.div`
  cursor: pointer;
`

export const SidebarWrapper = styled.div`
  padding: 0 25px;
  margin-top: 26px;
`