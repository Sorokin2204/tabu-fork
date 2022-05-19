import styled, { css } from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  background: ${({ background }) => background || ""};
  border-radius: ${({ radius }) => radius || ""};
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  cursor: ${({ cursor }) => cursor || ""};
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};

  ${(props) =>
    props.w100 &&
    css`
      width: 100%;
    `}
`;

const Flex = (props) => {
  return <StyledFlex {...props} />;
};

export default Flex;
