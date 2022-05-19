import * as S from "./Styled";
import Sidebar from "../Sidebar/Sidebar";
import React from "react";

const MobileFilter = (props) => {
  const onClose = () => {
    props.setActive(false);
    document.body.style.overflow = document.body.style.overflow
      ? null
      : "hidden";
  };

  return (
    <S.MobileFilter className={props.active ? "show_mobile_filter" : ""}>
      <S.Header>
        <S.Title>Фильтр по</S.Title>
        <S.Close onClick={onClose}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 7L17 17"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 17L17 7"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </S.Close>
      </S.Header>
      <S.SidebarWrapper>
        <Sidebar />
      </S.SidebarWrapper>
    </S.MobileFilter>
  );
};

export default MobileFilter;
