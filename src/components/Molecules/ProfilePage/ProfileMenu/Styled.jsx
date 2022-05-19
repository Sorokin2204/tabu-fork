import { sizes } from "sizes";
import styled from "styled-components";
import { css } from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 88px;
  left: 56px;

  width: 308px;
  background: #fff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${sizes.mobile}px) {
    background: none;

    width: 90%;
    top: 48px;
    left: 0;
    right: 0;
    margin: 0 auto;
    box-shadow: none;
  }
`;

export const WrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 0px 116px 0px;
  width: 100%;

  @media (max-width: ${sizes.mobile}px) {
    padding: 0;
  }
`;

export const Avatar = styled.div`
  min-width: 100px;
  min-height: 100px;
  width: 100px;
  height: 100px;

  border-radius: 50%;
  background-image: url(${({ src }) => src || ""});
  background-size: cover;
  background-position: center;

  @media (max-width: ${sizes.mobile}px) {
    border: 6px solid #ffffff;
  }
`;

export const AvatarText = styled.div`
  min-width: 100px;
  min-height: 100px;
  width: 100px;
  height: 100px;

  border-radius: 50%;
  background: #f9f9f9;

  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;

  color: #e5e5e5;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${sizes.mobile}px) {
    border: 6px solid #ffffff;
  }
`;

export const Title = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;

  /* Tabu/Black */

  color: #191919;
  margin-top: 16px;
`;

export const Role = styled.div`
  font-family: "Mont";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;

  /* Tabu/Black */

  color: #191919;
  margin-top: 16px;
`;

export const Position = styled.div`
  display: flex;
  align-items: center;

  margin-top: 12px;

  font-family: "Mont";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 130%;
  /* identical to box height, or 16px */

  /* Tabu/Dark/Text-Gray */

  color: #717171;
`;

export const PositionIcon = styled.div`
  margin-right: 4px;
  display: flex;
  align-items: center;
`;

export const EditIcon = styled.div`
  margin-right: 8px;
  width: 12px;
  height: 12px;
`;

export const ButtonInner = styled.div`
  display: flex
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  padding: 11px 0;
  width: 100%;
  background-color: #191919;
  width: 80%;

  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  width: 80%;
`;

export const Item = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  width: 100%;

  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  color: #000000;

  &:nth-child(1) {
    padding: 0 0 8px 0;
  }

  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
    `}

  ${(props) =>
    props.logout &&
    css`
      color: #d41313;
      text-decoration: underline;
    `}
`;

export const ItemTitle = styled.div``;

export const ItemNumber = styled.div``;

export const Menu3 = styled.div``;
