import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;
  padding-bottom: 276px;
  align-items: center;

  ${(props) =>
    props.active &&
    css`
      display: flex;
    `};
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #e5e5e5;
  margin-top: 72px;
`;

export const TitleLine = styled.div`
  display: flex;
  margin-top: 32px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  text-transform: uppercase;

  /* Tabu/Black */

  color: #191919;
`;

export const Edit = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  text-decoration-line: underline;

  color: #000000;
  cursor: pointer;
`;

export const Ul = styled.ul`
  margin-top: 20px;
  width: 100%;
`;

export const Li = styled.li`
  margin-top: 4px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  margin-left: 15px;
  /* or 20px */

  color: #000000;
`;

export const Line2 = styled.div`
  width: 100%;
  height: 1px;
  background: #e5e5e5;
  margin-top: 40px;
`;
