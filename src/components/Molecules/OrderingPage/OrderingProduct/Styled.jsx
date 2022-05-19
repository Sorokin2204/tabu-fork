import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;

  &:nth-child(1) {
    margin-top: 0;
  }
`;

export const Image = styled.div`
  min-width: 140px;
  min-height: 175px;

  width: 140px;
  height: 175px;

  background-image: url(${({ src }) => src || ""});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Details = styled.div`
  display: flex;
  margin-left: 14px;
  flex-direction: column;
`;

export const Title = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */

  text-transform: uppercase;

  /* Tabu/Black */

  color: #191919;
`;

export const Description = styled.div`
  font-family: "Mont";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  /* or 16px */

  /* Tabu/Black */

  color: #191919;
  margin-top: 12px;
`;

export const Size = styled.div`
  font-family: "Mont";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  /* identical to box height, or 16px */

  /* Tabu/Dark/Text-Gray */

  color: #717171;
  margin-top: 16px;
`;

export const Price = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 130%;
  /* identical to box height, or 16px */

  /* Tabu/Black */

  color: #191919;
  margin-top: 12px;
`;

export const Wrapper3 = styled.div``;

export const Wrapper2 = styled.div``;
