import Button from "components/Atoms/Button";
import CheckBox from "components/Atoms/Form/CheckBox";
import Radio from "components/Atoms/Form/Radio";
import FormInput from "components/Molecules/Form/FormInput/FormInput";
import Header from "components/Molecules/Search/Desktop/Header/Header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowRegModal } from "redux/reducers/appReducer";
import { sizes } from "sizes";
import * as S from "./Styled";
import { registration } from "redux/actions/user";

const RegModal = () => {
  const dispatch = useDispatch();
  const showRegModal = useSelector((state) => state.app.showRegModal);

  const [favorite, setFavorite] = useState("private");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isMobile = useSelector((state) => state.app.isMobile);

  const handlePrivateChange = () => {
    setFavorite("private");
  };

  const handleCompanyChange = () => {
    setFavorite("company");
  };

  const handleClose = () => {
    dispatch(setShowRegModal(false));
  };

  const onReg = async () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      favorite === ""
    ) {
      alert("Заполните все поля");
    } else {
      await registration(
        favorite === "private" ? 0 : 1,
        firstName,
        lastName,
        password,
        email
      );
    }
  };

  return (
    <S.Wrapper className={showRegModal ? "visible" : "hidden"}>
      <S.Block>
        {isMobile ? (
          ""
        ) : (
          <S.Close onClick={handleClose}>
            <svg
              width={32}
              height={32}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.4708 8.47132C24.7312 8.21097 24.7312 7.78886 24.4708 7.52851C24.2105 7.26816 23.7884 7.26816 23.528 7.52851L15.9994 15.0571L8.47083 7.52851C8.21049 7.26816 7.78838 7.26816 7.52803 7.52851C7.26768 7.78886 7.26768 8.21097 7.52803 8.47132L15.0566 15.9999L7.52803 23.5285C7.26768 23.7889 7.26768 24.211 7.52803 24.4713C7.78838 24.7317 8.21049 24.7317 8.47083 24.4713L15.9994 16.9427L23.528 24.4713C23.7884 24.7317 24.2105 24.7317 24.4708 24.4713C24.7312 24.211 24.7312 23.7889 24.4708 23.5285L16.9422 15.9999L24.4708 8.47132Z"
                fill="#191919"
              />
            </svg>
          </S.Close>
        )}

        <S.Left>
          {isMobile ? <Header onClose={handleClose} /> : ""}

          <S.LeftBlock>
            <S.Title>Зарегистрироваться</S.Title>
            <S.Description>Введите свои учетные данные</S.Description>
            <S.Radios>
              <Radio
                label="Частный продавец"
                value={favorite === "private"}
                onChange={handlePrivateChange}
              />
              <Radio
                label="Компания"
                value={favorite === "company"}
                onChange={handleCompanyChange}
                margin="0 0 0 27px"
              />
            </S.Radios>
            <FormInput
              value={firstName}
              setValue={setFirstName}
              label="Имя"
              placeholder="Введите имя"
              type="text"
            />
            <FormInput
              value={lastName}
              setValue={setLastName}
              label="Фамилия"
              placeholder="Введите фамилию"
              type="text"
            />
            <FormInput
              value={email}
              setValue={setEmail}
              label="Эл.почта"
              placeholder="Введите электронную почту"
              type="email"
            />
            <FormInput
              value={password}
              setValue={setPassword}
              label="Пароль"
              placeholder="Введите пароль"
              type="password"
            />
            <S.BottomBlock>
              <S.RememberBlock>
                <CheckBox name="Запомнить информацию" />
              </S.RememberBlock>
              <S.Forgot>Забыли пароль?</S.Forgot>
            </S.BottomBlock>
            <Button
              onClick={() => onReg()}
              topGreen
              padding="14px 0"
              margin="62px 0 0 0"
            >
              Зарегистрироваться
            </Button>
          </S.LeftBlock>
        </S.Left>
        <S.Right />
      </S.Block>
    </S.Wrapper>
  );
};

export default RegModal;
