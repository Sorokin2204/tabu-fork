import styled from "styled-components";
import Image from "assets/img/weSelling.png";
import { sizes } from "sizes";

export const Wrapper = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 110px 0 110px 162px;
  jsutify-content: center;

  background-image: url(${Image});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 35%;

  @media (max-width: ${sizes.mobile}px) {
    background-size: 90%;
    padding: 40px 22px 254px;
    background-position: 172% bottom;
  }
`;

export const Title = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;

  color: #191919;

  @media (max-width: ${sizes.mobile}px) {
    font-size: 32px;
    width: 60%;
  }
`;

export const Description = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin-top: 32px;
  width: 40%;

  color: #191919;

  @media (max-width: ${sizes.mobile}px) {
    width: 70%;
    font-size: 12px;
  }
`;

export const ButtonBlock = styled.div`
  margin-top: 72px;
`;
