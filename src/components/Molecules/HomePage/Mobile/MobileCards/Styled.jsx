import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Card = styled.div`
  display: flex;
  padding: 32px 25px;
  border-bottom: 1px solid #e2e2e2;
  align-items: center;

  &:nth-child(1) {
    border-top: 1px solid #e2e2e2;
  }
`;

export const Left = styled.div``;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  justify-content: center;
`;

export const Title = styled.div`
  font-family: Manrope;
  font-weight: 400;
  font-size: 14px;
  color: #252525;
  text-transform: uppercase;
`;

export const Description = styled.div`
  font-family: Manrope;
  font-weight: 300;
  font-size: 12px;
  color: #252525;
  margin-top: 4px;
`;

export const Button = styled.div`
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  color: #252525;
  margin-top: 16px;
  border-bottom: 1px solid #252525;
  cursor: pointer;
  text-transform: uppercase;
`;

export const ButtonBox = styled.div`
  display: inherit;
`;
