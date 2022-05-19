import styled from "styled-components";
import Text from "./Text";

const StyledMoreButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
`;

const Line = styled.div`
  display: flex;
  width: 65px;
  height: 1px;
  background-color: #ababab;
  cursor: pointer;
`;

const MoreButton = (props) => {
  const onClick = () => {
    if (props?.link) {
      window.open(props?.link, "_blank");
    }
  };

  return (
    <StyledMoreButton {...props} onClick={onClick}>
      <Line />
      <Text
        color="#191919"
        fontFamily="Gilroy"
        fontWeight="400"
        fontSize="20px"
        textTransform="uppercase"
        decLine="underline"
        margin="0 0 0 12px"
        cursor="pointer"
        decLine="1px #ACACAC solid"
      >
        {props.children}
      </Text>
    </StyledMoreButton>
  );
};

export default MoreButton;
