import Text from "components/Atoms/Text";
import styled from "styled-components";
import React, { useState } from "react";
import ExpandIcon from "components/Atoms/Icons/ExpandIcon";
import Flex from "components/Atoms/Flex";
import { css } from "styled-components";

const QuestionComp = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 32.9px 0 34.89px 0;
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;

  ${(props) =>
    props.first &&
    css`
      padding: 0 0 34.89px 0;
      margin-top: 15px;
    `}
`;

const Description = styled.div`
  color: #191919;
  font-family: Mont;
  font-weight: 400;
  font-size: 14px;
  margin: 20px 0 0 0;
  width: 100%;
`;

const Question = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <QuestionComp {...props} onClick={() => setOpen(!open)}>
      <Flex justify="space-between" width="100%">
        <Text
          color="#191919"
          fontFamily="Mont"
          fontWeight="600"
          fontSize="16px"
          flex
          width="100%"
        >
          {props.title}
        </Text>
        {open ? (
          <svg
            width={10}
            height={6}
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 4.95914L5 0.971675L1 4.95914" stroke="#191919" />
          </svg>
        ) : (
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 0.97168L5 4.95914L9 0.97168" stroke="#191919" />
          </svg>
        )}
      </Flex>
      {open && <Description>{props.description}</Description>}
    </QuestionComp>
  );
};

export default Question;
