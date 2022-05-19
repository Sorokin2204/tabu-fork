import styled from "styled-components";
import Background from "assets/img/startSell.png";

export const Wrapper = styled.div`
  display: flex;
  padding: 130px 39px;
  width: calc(100%-78px);
  background-image: url(${Background});
  background-size: cover;
  flex-direction: column;
`;
export const Title = styled.div`
  font-family: Gilroy;
  width: 80%;
  font-weight: 700;
  font-size: 32px;
  color: #fff;
  text-transform: uppercase;
`;
export const Description = styled.div`
  font-family: Manrope;
  font-weight: 400;
  font-size: 12px;
  color: #fff;
  margin-top: 24px;
`;
export const Wrapper1 = styled.div``;
