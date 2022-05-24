import styled from 'styled-components';
export const Wrapper = styled.div`
  margin-top: 72px;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  @media (max-width: 1110px) {
    margin-top: 40px;
  }
`;

export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  /* identical to box height, or 28px */

  text-transform: uppercase;

  /* Tabu/Black */

  color: #191919;
  @media (max-width: 1110px) {
    font-size: 12px;
    margin-right: auto;
  }
`;

export const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 45px;
`;
