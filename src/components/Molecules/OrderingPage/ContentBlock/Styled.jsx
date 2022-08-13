import styled from 'styled-components';

export const ContentBlock = styled.div`
  overflow: hidden;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  transform: scale(130%);
  width: 100%;
  height: 80px;
  @media (max-width: 1110px) {
    height: 77px;
    transform: scale(160%);
  }
`;

export const HeaderLogo = styled.img`
  width: 196px;
  height: auto;
  @media (max-width: 1110px) {
    width: 105px;
  }
`;

export const Container = styled.div`
  width: 599px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1110px) {
    width: 100%;
    max-width: 390px;
  }
`;

export const Header3 = styled.div``;
