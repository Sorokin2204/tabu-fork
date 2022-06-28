import Button from 'components/Atoms/Button';
import Radio from 'components/Atoms/Form/Radio';
import FormInput from 'components/Molecules/Form/FormInput/FormInput';
import Header from 'components/Molecules/Search/Desktop/Header/Header';
import { API_URL } from 'config';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsDisableScroll, setShowChangePassModal, setShowEditUserModal, setShowEditUserSuccessModal } from 'redux/reducers/appReducer';
import { sizes } from 'sizes';
import IconCamera from 'assets/svg/camera.svg';
import * as S from './Styled';
import { useForm } from 'react-hook-form';
import Loading from 'components/Loading/Loading';
import { editUser } from 'redux/actions/user';
import MessageModal from 'components/Molecules/ProductPage/ThanksModal/ThanksModal';
import { URL as URL_SITE } from 'config';

const EditProfileModal = ({ show, onClose }) => {
  const dispatch = useDispatch();
  const { showEditUserModal, showEditUserSuccessModal } = useSelector((state) => state.app);
  const { currentUser: user, editUserLoading } = useSelector((state) => state.user);
  const defaultValues = {
    email: '',
    user_type: 0,
    fio: '',
    // company_name: '',
    city: '',
    country: '',
    phone: '',
    avatar: { oldImage: null, newFile: null, newPreview: null },
  };

  const {
    setValue,
    watch,
    formState: { errors },
    register,
    handleSubmit,
    control,
  } = useForm({
    defaultValues,
  });

  useEffect(() => {
    console.log(user);
    if (user && showEditUserModal) {
      setValue('email', user?.email);
      setValue('fio', user?.user_type === 0 ? user?.fio : user?.company_name);
      setValue('phone', user?.phone);
      // setValue('company_name', user?.company_name);
      setValue('city', user?.city);
      setValue('country', user?.country);
      setValue('avatar', { oldImage: user?.avatar, newFile: null, newPreview: null });
      setValue('user_type', user?.user_type);
    }
  }, [user, showEditUserModal]);

  const [favorite, setFavorite] = useState('private');

  const isMobile = useSelector((state) => state.app.isMobile);

  const handlePrivateChange = () => {
    setValue('user_type', 0);
    setValue('fio', user?.fio);
  };

  const handleCompanyChange = () => {
    setValue('user_type', 1);
    setValue('company_name', user?.company_name);
  };
  const dispath = useDispatch();
  const handleClose = () => {
    dispath(setShowEditUserModal(false));
  };
  const avatar = watch('avatar');
  const userType = watch('user_type');
  const onUploadImage = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setValue(`avatar`, {
      oldImage: avatar.oldImage,
      newFile: file,
      newPreview: url,
    });
  };
  const onClickAvatar = (event) => {
    hiddenFileInput.current.click();
  };
  const hiddenFileInput = useRef(null);
  const onSubmit = (data) => {
    const { token } = user;
    const newData = { ...data };
    // if (newData.user_type === 0) {
    //   newData.company_name = '';
    // }
    // if (newData.user_type === 1) {
    //   newData.fio = '';
    // }
    const formData = new FormData();
    formData.append('email', newData.email);
    if (newData.user_type === 0) {
      formData.append('fio', newData.fio);
    } else {
      formData.append('company_name', newData.fio);
    }
    formData.append('user_type', newData.user_type);
    formData.append('phone', newData.phone);
    formData.append('country', newData.country);
    if (newData?.avatar?.newFile) {
      formData.append('avatar', newData?.avatar?.newFile);
    }
    formData.append('city', newData.city);
    dispath(editUser({ data: formData, token }));
  };

  return (
    <>
      <S.Wrapper className={showEditUserModal ? 'visible' : 'hidden'} onClick={handleClose}></S.Wrapper>
      <div
        className={showEditUserModal ? 'visible' : 'hidden'}
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
              <S.AvatarBox onClick={onClickAvatar}>
                {avatar?.oldImage || avatar?.newPreview ? (
                  <S.Avatar src={avatar?.newPreview ? avatar?.newPreview : `${URL_SITE + avatar?.oldImage}`} />
                ) : (
                  <S.AvatarText>{user?.fio?.length ? user?.fio[0]?.toUpperCase() : user?.company_name?.length ? user?.company_name[0]?.toUpperCase() : ''}</S.AvatarText>
                )}
                <S.AvatarBtn>
                  <img src={IconCamera} />
                </S.AvatarBtn>
              </S.AvatarBox>
              <input type="file" accept="image/png, image/jpeg, image/jpg" ref={hiddenFileInput} onChange={onUploadImage} style={{ display: 'none' }} />
              {isMobile ? <S.Title>Редактировать профиль</S.Title> : <></>}

              {/* <S.Slice /> */}
              <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.FormTop>
                  {/* <S.Radios>
                    <Radio label="Частный продавец" value={userType === 0} onChange={handlePrivateChange} />
                    <Radio label="Компания" value={userType === 1} onChange={handleCompanyChange} margin="0 0 0 27px" />
                  </S.Radios> */}
                  <FormInput
                    label={user?.user_type === 0 ? 'ФИО' : 'Название компании'}
                    placeholder={user?.user_type === 0 ? 'Введите имя, фамилию и отчество' : 'Введите название компании'}
                    type="text"
                    register={register}
                    name="fio"
                    rules={{
                      required: { value: true, message: 'Обязательное поле' },
                    }}
                    errors={errors}
                  />
                  {/* <FormInput
                    label="Название компании"
                    placeholder="Введите название компании"
                    type="text"
                    register={register}
                    name="company_name"
                    rules={{
                      required: { value: true, message: 'Обязательное поле' },
                    }}
                    errors={errors}
                  /> */}
                  <FormInput
                    label="Телефон"
                    placeholder="Введите ваш номер телефона"
                    type="phone"
                    control={control}
                    name="phone"
                    errors={errors}
                    rules={{
                      required: { value: true, message: 'Обязательное поле' },
                    }}
                  />
                  <FormInput
                    label="Эл.почта"
                    placeholder="Введите эл.почту"
                    type="text"
                    register={register}
                    name="email"
                    rules={{
                      required: { value: true, message: 'Обязательное поле' },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Неправильный формат почты',
                      },
                    }}
                    errors={errors}
                  />
                  <FormInput
                    label="Страна"
                    placeholder="Введите страну"
                    type="text"
                    register={register}
                    name="country"
                    rules={{
                      required: { value: true, message: 'Обязательное поле' },
                    }}
                    errors={errors}
                  />
                  <FormInput
                    label="Город"
                    placeholder="Введите город"
                    type="text"
                    register={register}
                    name="city"
                    rules={{
                      required: { value: true, message: 'Обязательное поле' },
                    }}
                    errors={errors}
                  />
                  <S.ChangePassLink
                    onClick={() => {
                      dispatch(setShowEditUserModal(false));
                      dispatch(setShowChangePassModal(true));
                    }}>
                    Сменить пароль
                  </S.ChangePassLink>
                </S.FormTop>
                <S.ButtonBlock>
                  <Button
                    topGreen
                    width="233px"
                    padding="14px 0"
                    style={{
                      width: isMobile ? '100%' : '233px',
                      margin: isMobile ? '64px 0 0 0' : '52px 0 0 57px',
                    }}>
                    Сохранить
                  </Button>
                </S.ButtonBlock>
              </S.Form>
            </S.BottomBlock>
          </div>
        </S.Block>
        {editUserLoading && <Loading />}
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
