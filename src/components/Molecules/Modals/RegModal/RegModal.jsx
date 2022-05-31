import Button from 'components/Atoms/Button';
import CheckBox from 'components/Atoms/Form/CheckBox';
import Radio from 'components/Atoms/Form/Radio';
import FormInput from 'components/Molecules/Form/FormInput/FormInput';
import Header from 'components/Molecules/Search/Desktop/Header/Header';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowAuthModal, setShowRegModal } from 'redux/reducers/appReducer';
import { sizes } from 'sizes';
import * as S from './Styled';
import { login, registration } from 'redux/actions/user';
import { useForm } from 'react-hook-form';
import Loading from 'components/Loading/Loading';
import { userReset } from 'redux/reducers/userReducer';

const RegModal = () => {
  const dispatch = useDispatch();
  const showRegModal = useSelector((state) => state.app.showRegModal);
  const showAuthModal = useSelector((state) => state.app.showAuthModal);
  const { data, loading, error } = useSelector((state) => state.user);
  const defaultValuesReg = {
    fullName: '',
    companyName: '',
    user_type: 0,
    email: '',
    password: '',
  };
  const defaultValuesLogin = {
    email: '',
    password: '',
  };
  const regForm = useForm({
    defaultValues: defaultValuesReg,
  });

  const loginForm = useForm({
    defaultValues: defaultValuesLogin,
  });

  const isMobile = useSelector((state) => state.app.isMobile);

  const handlePrivateChange = () => {
    regForm.setValue('companyName', '');
    regForm.setValue('user_type', 0);
  };

  const handleCompanyChange = () => {
    regForm.setValue('fullName', '');
    regForm.setValue('user_type', 1);
  };

  const resetFields = () => {
    dispatch(userReset());
    regForm.reset();
    loginForm.reset();
  };
  const handleClose = () => {
    dispatch(setShowRegModal(false));
    resetFields();
  };

  const onLoginSubmit = (data) => {
    console.log(data);
    dispatch(login(data));
    // if (firstName === '' || lastName === '' || email === '' || password === '' || favorite === '') {
    //   alert('Заполните все поля');
    // } else {
  };
  const onRegSubmit = (data) => {
    console.log(data);
    dispatch(registration(data));
  };
  const userType = regForm.watch('user_type');
  console.log(userType);
  return (
    <>
      <S.Wrapper className={showRegModal ? 'visible' : 'hidden'} onClick={handleClose}></S.Wrapper>
      <S.Block className={showRegModal ? 'visible' : 'hidden'}>
        {isMobile ? (
          ''
        ) : (
          <S.Close onClick={handleClose}>
            <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.4708 8.47132C24.7312 8.21097 24.7312 7.78886 24.4708 7.52851C24.2105 7.26816 23.7884 7.26816 23.528 7.52851L15.9994 15.0571L8.47083 7.52851C8.21049 7.26816 7.78838 7.26816 7.52803 7.52851C7.26768 7.78886 7.26768 8.21097 7.52803 8.47132L15.0566 15.9999L7.52803 23.5285C7.26768 23.7889 7.26768 24.211 7.52803 24.4713C7.78838 24.7317 8.21049 24.7317 8.47083 24.4713L15.9994 16.9427L23.528 24.4713C23.7884 24.7317 24.2105 24.7317 24.4708 24.4713C24.7312 24.211 24.7312 23.7889 24.4708 23.5285L16.9422 15.9999L24.4708 8.47132Z"
                fill="#191919"
              />
            </svg>
          </S.Close>
        )}
        {isMobile ? <Header onClose={handleClose} /> : ''}
        <S.Left>
          <S.LeftBlock>
            <S.Title>{showAuthModal ? 'Войти' : 'Зарегистрироваться'}</S.Title>
            <S.Description error={error}>{error && typeof error === 'string' ? error : 'Введите свои учетные данные'}</S.Description>

            {!showAuthModal && (
              <S.Radios>
                <Radio label="Частный продавец" value={userType === 0} onChange={handlePrivateChange} />
                <Radio label="Компания" value={userType === 1} onChange={handleCompanyChange} margin="0 0 0 27px" />
              </S.Radios>
            )}
            <form>
              {userType === 0 && !showAuthModal && (
                <>
                  <FormInput
                    label="ФИО"
                    placeholder="Введите Имя, фамилию и отчество"
                    type="text"
                    register={regForm.register}
                    name="fullName"
                    rules={{
                      required: { value: true, message: 'Обязательное поле ' },
                    }}
                    errors={regForm.formState.errors}
                  />
                </>
              )}
              {userType === 1 && !showAuthModal && (
                <>
                  <FormInput
                    label="Компания"
                    placeholder="Название компании"
                    type="company"
                    register={regForm.register}
                    name="companyName"
                    rules={{
                      required: { value: true, message: 'Обязательное поле ' },
                    }}
                    errors={regForm.formState.errors}
                  />
                </>
              )}
              {!showAuthModal && (
                <>
                  <FormInput
                    label="Эл.почта"
                    placeholder="Введите электронную почту"
                    type="email"
                    register={regForm.register}
                    name="email"
                    rules={{
                      required: { value: true, message: 'Обязательное поле для заполнения' },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Неправильный формат почты',
                      },
                    }}
                    errors={regForm.formState.errors}
                  />
                  <FormInput
                    label="Пароль"
                    placeholder="Введите пароль"
                    type="password"
                    register={regForm.register}
                    name="password"
                    rules={{
                      required: { value: true, message: 'Обязательное поле для заполнения' },
                      minLength: { value: 8, message: 'Пароль должен быть длинее 7 символов' },
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
                        message: 'Пароль должен содержать одну букву и цифру',
                      },
                    }}
                    errors={regForm.formState.errors}
                  />
                </>
              )}
            </form>
            <form>
              {showAuthModal && (
                <>
                  <FormInput
                    label="Эл.почта"
                    placeholder="Введите электронную почту"
                    type="email"
                    register={loginForm.register}
                    name="email"
                    rules={{
                      required: { value: true, message: 'Обязательное поле для заполнения' },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Неправильный формат почты',
                      },
                    }}
                    errors={loginForm.formState.errors}
                  />
                  <FormInput
                    label="Пароль"
                    placeholder="Введите пароль"
                    type="password"
                    name="password"
                    register={loginForm.register}
                    rules={{
                      required: { value: true, message: 'Обязательное поле для заполнения' },
                    }}
                    errors={loginForm.formState.errors}
                  />
                </>
              )}
            </form>
            <S.BottomBlock>
              <S.RememberBlock>
                <CheckBox name="Запомнить информацию" />
              </S.RememberBlock>
              <S.Forgot>Забыли пароль?</S.Forgot>
            </S.BottomBlock>
            {showAuthModal ? (
              <Button onClick={loginForm.handleSubmit(onLoginSubmit)} topGreen padding="14px 0" margin="62px 0 0 0">
                Вход
              </Button>
            ) : (
              <Button onClick={regForm.handleSubmit(onRegSubmit)} topGreen padding="14px 0" margin="62px 0 0 0">
                Зарегистрироваться
              </Button>
            )}
            {showAuthModal && (
              <S.CreateAccount
                onClick={() => {
                  dispatch(setShowAuthModal(false));
                  dispatch(userReset());
                }}>
                Создать аккаунт
              </S.CreateAccount>
            )}
          </S.LeftBlock>
        </S.Left>
        <S.Right />
      </S.Block>
      {loading && <Loading />}
    </>
  );
};

export default RegModal;
