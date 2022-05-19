import styled from "styled-components";
import Flex from "../Flex";
import ExpandIcon from "../Icons/ExpandIcon";
import Text from "../Text";

const StyledSelect = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-direction: row;
`;

const Select = () => {
  return (
    <StyledSelect>
      <Text
        color="#000000"
        fontFamily="Gilroy"
        fontWeight="400"
        fontSize="14px"
        cursor="pointer"
      >
        Сортировка
      </Text>
      <Flex margin="0 0 0 10px">
        <ExpandIcon />
      </Flex>
    </StyledSelect>
  );
};

export default Select;
