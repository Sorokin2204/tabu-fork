import styled from 'styled-components';
import { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  height: calc(100vh - 174px);
  transform: translateX(-100%);
  transition: 0.3s;
  ${(props) =>
    props.active &&
    css`
      transform: translateX(0%);
    `}
`;
export const Back = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  cursor: pointer;
`;
export const BackText = styled.div`
  margin-left: 2px;
  font-family: Mont;
  font-size: 12px;
  font-weight: 600;
  color: #191919;
`;
export const Title = styled.div`
  font-family: Mont;
  margin-left: 25px;
  font-size: 12px;
  font-weight: 700;
  color: #191919;
  margin-top: 36.5px;
`;
export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
export const Category = styled.div`
  padding: 16px 25px;
  font-family: Mont;
  font-weight: 600;
  font-size: 12px;
  color: #191919;
  cursor: pointer;

  &:nth-child(1) {
    margin-top: 16px;
  }
`;
export const Wrapper1 = styled.div``;
