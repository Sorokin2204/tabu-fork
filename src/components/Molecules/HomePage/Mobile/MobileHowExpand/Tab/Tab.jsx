import Flex from "components/Atoms/Flex";
import { useState } from "react";
import * as S from "./Styled";

const Tab = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <S.Tab>
      <Flex justify="space-between" width="100%" onClick={() => setOpen(!open)}>
        <div>{props.title}</div>
        <S.TabIcon>
          {open ? (
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 14L12 10L16 14"
                stroke="#191919"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 10L12 14L8 10"
                stroke="#191919"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </S.TabIcon>
      </Flex>
      {open && <S.Description>{props.description}</S.Description>}
    </S.Tab>
  );
};

export default Tab;
