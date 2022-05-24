import styled from 'styled-components';

export const Expand = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: 32px 0;
  width: 100%;

  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;

  &:nth-child(1) {
    border-top: 1px solid #e5e5e5;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
`;

export const ExpandName = styled.div`
  margin-left: 24px;
  display: flex;
  align-items: center;

  font-family: Gilroy;
  font-size: 18px;
  font-weight: 400;
  color: #191919;
  text-transform: uppercase;
`;

export const ExpandIcon = styled.div``;

export const TextBox = styled.div`
  display: flex;
  margin-top: 40px;
  margin-left: 49px;
  flex-direction: column;
`;

export const Text = styled.div`
  font-family: Mont;
  font-size: 12px;
  font-weight: 600;
  color: #191919;
`;

export const ExpandContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
