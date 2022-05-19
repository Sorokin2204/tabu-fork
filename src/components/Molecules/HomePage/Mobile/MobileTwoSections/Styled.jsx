import styled from "styled-components";
import FirstImg from "assets/img/twoSections/1.png";
import SecondImg from "assets/img/twoSections/2.png";

export const Wrapper = styled.div`
  padding: 48px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Block = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 32px;
  cursor: pointer;

  &:nth-child(1) {
    margin-top: 48px;
  }
`;
export const Title = styled.div`
  font-family: Mont;
  font-weight: 800;
  font-size: 14px;
  color: #191919;
  text-transform: uppercase;
`;
export const Description = styled.div`
  font-family: Mont;
  margin-top: 4px;
  font-weight: 600;
  font-size: 14px;
  border-bottom: 1px solid #717171;
  color: #717171;
  text-transform: uppercase;
`;
export const Image1 = styled.div`
  height: 190px;
  width: 100%;
  background-image: url(${({ src }) => src || ""});
  background-size: cover;
  margin-top: 24px;
`;

export const Image2 = styled.div`
  height: 190px;
  width: 100%;
  background-image: url(${({ src }) => src || ""});
  background-size: cover;
  margin-top: 24px;
`;

export const Title1 = styled.div``;
