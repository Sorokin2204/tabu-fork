import styled from "styled-components";
import Text from "../../../Atoms/Text";
import Questions from "components/Molecules/HomePage/Desktop/Questions/Questions";

const StyledAnswers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 80px 0;
  background-color: #f9f9f9;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`;

const Answers = () => {
  return (
    <StyledAnswers>
      <Wrapper>
        <Text
          color="#191919"
          fontFamily="Gilroy"
          fontWeight="400"
          fontSize="32px"
          textAlign="center"
          uppercase
        >
          FAQ
        </Text>
        <Questions />
      </Wrapper>
    </StyledAnswers>
  );
};

export default Answers;
