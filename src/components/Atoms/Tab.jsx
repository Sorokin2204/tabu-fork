import styled, { css } from "styled-components";

const StyledTab = styled.div`
  padding: 23px;
  background: none;
  color: #717171;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;
  color: #191919;
  font-family: "Mont";
  font-weight: 600;
  font-size: 16px;
  text-align: center;

  ${(props) =>
    props.active &&
    css`
      color: #191919;
      border-bottom: 3px solid #191919;
      font-weight: 700;
    `}
`;

const Tab = (props) => {
  return <StyledTab {...props}>{props.children}</StyledTab>;
};

export default Tab;
