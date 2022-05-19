import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 48px 25px 33px;
  flex-direction: column;
`;

export const Title = styled.div`
  font-family: Mont;
  font-size: 20px;
  font-weight: 700;
  color: #191919;
`;

export const Products = styled.div`
  display: grid;
  margin-top: 24px;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
  align-self: start;
  grid-gap: 48px 32px;
  justify-content: start;
`;

export const Title1 = styled.div``;
