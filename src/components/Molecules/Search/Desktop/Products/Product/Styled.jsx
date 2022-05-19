import { sizes } from "sizes";
import styled from "styled-components";

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  &:nth-child(1) {
    margin-left: 0;
  }
`;

export const Image = styled.div`
  width: 167px;
  height: 207px;
  background-image: url(${(props) => props.src || ""});
  background-position: center;
  background-size: cover;

  @media (max-width: ${sizes.mobile}px) {
    width: 155px;
    height: 205px;
  }
`;

export const Title = styled.div`
  margin-top: 6px;
  font-family: "Mont";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;

  color: #191919;
`;

export const Product2 = styled.div``;
