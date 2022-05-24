import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 48px 25px 33px;
  flex-direction: column;
`;

export const Title = styled.div`
  font-family: Mont;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: #191919;
`;

export const Products = styled.div`
  display: grid;
  width: 100%;
  margin-top: 24px;
  grid-template-columns: repeat(auto-fit, 156px);
  align-self: start;
  grid-gap: 48px 14px;
  justify-content: start;
`;

export const Title1 = styled.div``;
