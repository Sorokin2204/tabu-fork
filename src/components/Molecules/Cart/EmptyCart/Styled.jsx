import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 220px 0 340px;
  width: 100%;
  @media (max-width: 1110px) {
    padding: 107px 0 256px;
  }
`;

export const Image = styled.div``;

export const Title = styled.div`
  font-family: Gilroy;
  font-weight: 400;
  font-size: 20px;
  color: #191919;
  margin-top: 34px;
  text-transform: uppercase;
`;

export const Description = styled.div`
  font-family: Gilroy;
  font-weight: 400;
  font-size: 14px;
  color: #717171;
  margin-top: 6px;
`;
