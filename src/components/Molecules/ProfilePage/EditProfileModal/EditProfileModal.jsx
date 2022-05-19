import Button from 'components/Atoms/Button';
import Radio from 'components/Atoms/Form/Radio';
import FormInput from 'components/Molecules/Form/FormInput/FormInput';
import Header from 'components/Molecules/Search/Desktop/Header/Header';
import { API_URL } from 'config';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { sizes } from 'sizes';
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

  const handleClose = () => {
    onClose(false);
  };

  return (
    <S.Wrapper className={show ? 'visible' : 'hidden'}>
      <S.Block>
        {isMobile ? <Header onClose={handleClose} /> : ''}

        {!isMobile ? <S.Title>Редактировать профиль</S.Title> : <></>}

        <S.BottomBlock>
          {user?.avatar ? <S.Avatar src={API_URL} /> : <S.AvatarText>{user?.first_name?.length ? user?.first_name[0]?.toUpperCase() : ''}</S.AvatarText>}

          {isMobile ? <S.Title>Редактировать профиль</S.Title> : <></>}

          <S.Slice />
          <S.Form>
            <S.FormTop>
              <S.Radios>
                <Radio label="Частный продавец" value={favorite === 'private'} onChange={handlePrivateChange} />
                <Radio label="Компания" value={favorite === 'company'} onChange={handleCompanyChange} margin="0 0 0 27px" />
              </S.Radios>
              <FormInput value={firstName} setValue={setFirstName} label="Имя пользователя" placeholder="Введите имя пользователя" type="text" />
              <FormInput value={email} setValue={setEmail} label="Эл.почта" placeholder="Введите электронную почту" type="text" />
            </S.FormTop>
            <S.ButtonBlock>
              <Button topGreen width="233px" padding="14px 0" margin="104px 0 0 43px">
                Сохранить
              </Button>
            </S.ButtonBlock>
          </S.Form>
        </S.BottomBlock>
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
    </S.Wrapper>
  );
};

export default EditProfileModal;
