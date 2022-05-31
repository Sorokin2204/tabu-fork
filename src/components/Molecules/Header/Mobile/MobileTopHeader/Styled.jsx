import styled from 'styled-components';

export const MobileTopHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  color: #ffffff;
  font-weight: 600;
  font-size: 12px;
  font-family: Mont;
  justify-content: center;
  padding: 12px 0;
  background: #191919;
  box-sizing: border-box;
  @media (max-width: 1110px) {
    z-index: 99;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    left: 0;

    width: 100%;
    z-index: 99;
    height: 39px;
  }
`;
