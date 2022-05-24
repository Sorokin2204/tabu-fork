import styled, { css } from 'styled-components';

const StyledTab = styled.div`
  padding: 23px;
  background: none;
  color: #717171;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;

  font-family: 'Mont';
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  @media (max-width: 1110px) {
    padding: 12px 26px;
    font-size: 14px;
  }
  ${(props) =>
    props.active &&
    css`
      color: #025b37;
      border-bottom: 3px solid #025b37;
      font-weight: 700;
    `}
`;

const Tab = (props) => {
  return <StyledTab {...props}>{props.children}</StyledTab>;
};

export default Tab;
