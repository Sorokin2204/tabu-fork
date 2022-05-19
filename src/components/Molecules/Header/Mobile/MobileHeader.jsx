import * as S from "./Styled";
import ImageBlock from "../../../Atoms/ImageBlock";
import Logo from "assets/img/logo.png";
import MobileTopHeader from "./MobileTopHeader/MobileTopHeader";
import MobileSidebar from "./MobileSidebar/MobileSidebar";
import { useDispatch, useSelector } from "react-redux";
import { showMobileSidebar } from "../../../../redux/reducers/appReducer";
import { useNavigate } from "react-router-dom";
import { setShowSearch } from "redux/reducers/searchReducer";

const MobileHeader = () => {
  const dispatch = useDispatch();
  const showMobSidebar = useSelector((state) => state.app.showMobileSidebar);
  let navigate = useNavigate();

  const onClickLogo = () => {
    navigate("/");
  };

  return (
    <>
      <MobileTopHeader />
      <MobileSidebar active={showMobSidebar ? true : false} />
      <S.StyledMobileHeader>
        <S.LeftBox>
          <S.Burger onClick={() => dispatch(showMobileSidebar())}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 12H20" stroke="black" strokeLinecap="round" />
              <path d="M4 6H20" stroke="black" strokeLinecap="round" />
              <path d="M4 18H20" stroke="black" strokeLinecap="round" />
            </svg>
          </S.Burger>
          <S.AddItem>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5ZM1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM12 7.5C12.2761 7.5 12.5 7.72386 12.5 8V11.5H16C16.2761 11.5 16.5 11.7239 16.5 12C16.5 12.2761 16.2761 12.5 16 12.5H12.5V16C12.5 16.2761 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.2761 11.5 16V12.5H8C7.72386 12.5 7.5 12.2761 7.5 12C7.5 11.7239 7.72386 11.5 8 11.5H11.5V8C11.5 7.72386 11.7239 7.5 12 7.5Z"
                fill="black"
              />
            </svg>
          </S.AddItem>
        </S.LeftBox>

        <S.Logo>
          <ImageBlock onClick={onClickLogo} src={Logo} />
        </S.Logo>
        <S.UserBlock>
          <S.Search onClick={() => dispatch(setShowSearch(true))}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="14"
                height="14"
                rx="7"
                stroke="black"
                strokeLinecap="round"
              />
              <path d="M15 15L21 21" stroke="black" strokeLinecap="round" />
            </svg>
          </S.Search>
          <S.Cart onClick={() => navigate("/cart")}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 7H18L19 20H5L6 7Z"
                stroke="black"
                strokeLinecap="round"
              />
              <path
                d="M9 9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V9"
                stroke="black"
                strokeLinecap="round"
              />
            </svg>
          </S.Cart>
        </S.UserBlock>
      </S.StyledMobileHeader>
    </>
  );
};

export default MobileHeader;
