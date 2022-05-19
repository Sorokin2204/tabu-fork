import ImageBlock from "components/Atoms/ImageBlock";
import * as S from "./Styled";
import Logo from "assets/img/logo.png";
import { useDispatch } from "react-redux";
import { setShowSearch } from "redux/reducers/searchReducer";

const Header = (props) => {
  const dispatch = useDispatch();

  return (
    <S.Header>
      <S.Close onClick={() => props?.onClose()}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <S.Logo>
        <ImageBlock src={Logo} />
      </S.Logo>
    </S.Header>
  );
};

export default Header;
