import styled, { css } from "styled-components";
import StartImage from "assets/img/start.png";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 25px 22px 25px;
`;

export const Title = styled.div`
  font-family: Gilroy;
  font-size: 32px;
  color: #191919;
  font-weight: 400;
`;

export const SubTitle = styled.div`
  margin-top: 16px;
  font-family: Gilroy;
  font-size: 14px;
  font-weight: 400;
  color: #191919;
`;

export const Image = styled.div`
  height: 190px;
  width: 100%;
  background-image: url(${({ src }) => src || ""});
  background-size: cover;
  margin-top: 16px;
`;

export const Description = styled.div`
  font-family: Mont;
  font-weight: 600;
  font-size: 12px;
  color: #191919;
  margin-top: 16px;
`;

export const Bottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 24px;
  align-items: center;
`;
export const Slides = styled.div`
  display: flex;
`;
export const Slide = styled.div`
  width: 8px;
  height: 8px;
  background-color: #e5e5e5;
  margin-left: 8px;
  border-radius: 50%;

  &:nth-child(1) {
    margin-left: 0;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: #191919;
    `}
`;
export const Button = styled.div`
  font-family: Gilroy;
  font-size: 14px;
  font-weight: 400;
  border-bottom: 1px solid #191919;
  text-transform: uppercase;
  cursor: pointer;
`;
export const Wrapper1 = styled.div``;
