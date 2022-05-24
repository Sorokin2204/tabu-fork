import styled from 'styled-components';

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1110px) {
    display: none;
  }
`;

export const TitleText = styled.div`
  font-family: Gilroy;
  font-weight: 400;
  font-size: 18px;
  color: #191919;
  text-transform: uppercase;
  margin-top: ${({ marginTop }) => marginTop || ''};
`;

export const DefaultText = styled.div`
  margin-top: ${({ marginTop }) => marginTop || ''};
  font-family: Mont;
  font-weight: 600;
  font-size: 14px;
  color: #191919;
`;
