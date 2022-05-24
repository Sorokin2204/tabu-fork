import Button from 'components/Atoms/Button';
import Radio from 'components/Atoms/Form/Radio';
import FormInput from 'components/Molecules/Form/FormInput/FormInput';
import Header from 'components/Molecules/Search/Desktop/Header/Header';
import { API_URL } from 'config';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsDisableScroll } from 'redux/reducers/appReducer';
import { sizes } from 'sizes';
import IconCamera from 'assets/svg/camera.svg';
import * as S from './Styled';

const EditProfileModal = ({ show, onClose }) => {
  const user = useSelector((state) => state.user.currentUser);

  const [favorite, setFavorite] = useState('private');

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const isMobile = useSelector((state) => state.app.isMobile);

  const handlePrivateChange = () => {
    setFavorite('private');
  };

  const handleCompanyChange = () => {
    setFavorite('company');
  };
  const dispath = useDispatch();
  const handleClose = () => {
    onClose(false);
    dispath(setIsDisableScroll(false));
  };

  return (
    <>
      <S.Wrapper className={show ? 'visible' : 'hidden'} onClick={handleClose}></S.Wrapper>
      <div
        className={show ? 'visible' : 'hidden'}
        style={{
          transition: 'all 0.3s',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '110',
          position: 'fixed',
          maxHeight: !isMobile ? 'calc(100vh - 40px)' : '100vh',
        }}>
        <S.Block>
          {isMobile ? <Header onClose={handleClose} /> : ''}
          <div
            style={{
              width: isMobile ? 'calc(100% - 50px)' : '100%',
              maxWidth: isMobile ? '326px' : '633px',
              margin: '0 auto',
              padding: isMobile ? '48px 25px 184px' : '71px 0 80px 0',
            }}>
            {!isMobile ? <S.Title>Редактировать профиль</S.Title> : <></>}

            <S.BottomBlock>
              <S.AvatarBox>
                {user?.avatar ? <S.Avatar src={API_URL} /> : <S.AvatarText>{user?.first_name?.length ? user?.first_name[0]?.toUpperCase() : ''}</S.AvatarText>}
                <S.AvatarBtn>
                  <img src={IconCamera} />
                </S.AvatarBtn>
              </S.AvatarBox>

              {isMobile ? <S.Title>Редактировать профиль</S.Title> : <></>}

              {/* <S.Slice /> */}
              <S.Form>
                <S.FormTop>
                  <S.Radios>
                    <Radio label="Частный продавец" value={favorite === 'private'} onChange={handlePrivateChange} />
                    <Radio label="Компания" value={favorite === 'company'} onChange={handleCompanyChange} margin="0 0 0 27px" />
                  </S.Radios>
                  <FormInput value={firstName} setValue={setFirstName} label="Имя пользователя" placeholder="Введите имя пользователя" type="text" />
                  <FormInput value={email} setValue={setEmail} label="Эл.почта" placeholder="Введите электронную почту" type="text" />
                  <FormInput value={email} setValue={setEmail} label="Страна" placeholder="Введите страну" type="text" />
                  <FormInput value={email} setValue={setEmail} label="Город" placeholder="Введите город" type="text" />
                </S.FormTop>
                <S.ButtonBlock>
                  <Button
                    topGreen
                    width="233px"
                    padding="14px 0"
                    style={{
                      width: isMobile ? '100%' : '233px',
                      margin: isMobile ? '64px 0 0 0' : '85px 0 0 57px',
                    }}>
                    Сохранить
                  </Button>
                </S.ButtonBlock>
              </S.Form>
            </S.BottomBlock>
          </div>
        </S.Block>
        <S.CloseBlock onClick={handleClose}>
          <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.4701 8.47108C24.7305 8.21073 24.7305 7.78862 24.4701 7.52827C24.2098 7.26792 23.7876 7.26792 23.5273 7.52827L15.9987 15.0569L8.4701 7.52827C8.20975 7.26792 7.78764 7.26792 7.52729 7.52827C7.26694 7.78862 7.26694 8.21073 7.52729 8.47108L15.0559 15.9997L7.52729 23.5283C7.26694 23.7886 7.26694 24.2107 7.52729 24.4711C7.78764 24.7314 8.20975 24.7314 8.4701 24.4711L15.9987 16.9425L23.5273 24.4711C23.7876 24.7314 24.2098 24.7314 24.4701 24.4711C24.7305 24.2107 24.7305 23.7886 24.4701 23.5283L16.9415 15.9997L24.4701 8.47108Z"
              fill="white"
            />
          </svg>
        </S.CloseBlock>
      </div>
    </>
  );
};

export default EditProfileModal;
