import styled, { css } from "styled-components";

const StyledText = styled.div`
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  width: ${({ width }) => width || ""};
  background: ${({ background }) => background || "none"};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  color: ${({ color }) => color || "#ffffff"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  text-align: ${({ textAlign }) => textAlign || ""};
  font-family: ${({ fontFamily }) => fontFamily || ""};
  text-transform: ${({ textTransform }) => textTransform || ""};
  cursor: ${({ cursor }) => cursor || "auto"};
  border-bottom: ${({ decLine }) => decLine || ""};
  text-decoration: ${({ decoration }) => decoration || ""};
  align-self: ${({ alignSelf }) => alignSelf || "auto"};
  justify-self: ${({ justifySelf }) => justifySelf || "auto"};

  ${(props) =>
    props.inlineGrid &&
    css`
      display: inline-grid;
    `}
  ${(props) =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `}

    ${(props) =>
    props.flex &&
    css`
      display: flex;
    `}

    ${(props) =>
    props.minWidth &&
    css`
      min-width: 0;
    `}
`;

const Text = (props) => {
  return <StyledText {...props}></StyledText>;
};

export default Text;
