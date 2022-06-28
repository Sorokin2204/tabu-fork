import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { changePassword } from 'redux/actions/user';
import { setShowChangePassModal, setShowChangePassSuccessModal } from 'redux/reducers/appReducer';
import { changePasswordSuccess } from 'redux/reducers/userReducer';
import Loading from 'components/Loading/Loading';
import MessageModal from 'components/Molecules/ProductPage/ThanksModal/ThanksModal';
import FormInput from 'components/Molecules/Form/FormInput/FormInput';
import * as S from './Styled';
const EditPasswordModal = () => {
  const { showEditUserSuccessModal, showChangePassModal, showChangePassSuccessModal } = useSelector((state) => state.app);
  const dispath = useDispatch();
  const { changePasswordLoading, changePasswordData, changePasswordError } = useSelector((state) => state.user);
  const defaultValues = {
    oldPassword: '',
    newPassword: '',
    newRepeatPassword: '',
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
    reset,
    clearErrors,
    control,
    setError,
  } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    dispath(changePassword({ newPassword: data.newPassword, oldPassword: data.oldPassword }));
    console.log(data);
  };
  const watchNewPass = watch('newPassword');
  const watchNewRepeatPass = watch('newRepeatPassword');
  useEffect(() => {
    if (watchNewPass !== watchNewRepeatPass) {
      setError('newRepeatPassword', { type: 'notEqual', message: 'Пароли не совпадают' });
    } else {
      clearErrors('newRepeatPassword');
    }
  }, [watchNewPass, watchNewRepeatPass]);
  useEffect(() => {
    if (changePasswordData && !changePasswordLoading) {
      reset();
      dispath(setShowChangePassModal(false));
      dispath(setShowChangePassSuccessModal(true));
      dispath(changePasswordSuccess(null));
    }
  }, [changePasswordData, changePasswordLoading]);

  const isMobile = useSelector((state) => state.app.isMobile);
  return (
    <>
      {changePasswordLoading && <Loading />}
      <MessageModal
        style={{ height: isMobile ? '500px' : '560px', width: '858px', paddingBottom: '60px', paddingTop: isMobile ? '50px' : '80px', maxWidth: isMobile ? '400px' : 'none' }}
        open={showChangePassModal}
        onClose={() => dispath(setShowChangePassModal(false))}
        title={'Сменить пароль'}
        desc={
          <div style={{ maxWidth: isMobile ? '300px' : '420px', width: '420px', textAlign: 'left' }}>
            <S.Error>{changePasswordError}</S.Error>
            <FormInput
              style={{ marginTop: isMobile ? 0 : '20px', marginBottom: isMobile ? '20px' : '0' }}
              label="Старый пароль"
              placeholder="Введите старый пароль"
              type="text"
              register={register}
              name="oldPassword"
              rules={{
                required: { value: true, message: 'Обязательное поле' },
              }}
              errors={errors}
            />
            <FormInput
              label="Новый пароль"
              placeholder="Введите новый пароль"
              type="text"
              register={register}
              name="newPassword"
              rules={{
                required: { value: true, message: 'Обязательное поле' },
              }}
              errors={errors}
            />
            <FormInput
              label="Повторите новый пароль"
              placeholder="Введите повторно новый пароль"
              type="text"
              register={register}
              name="newRepeatPassword"
              rules={{
                required: { value: true, message: 'Обязательное поле' },
              }}
              errors={errors}
            />
          </div>
        }
        textFirstBtn={'Изменить'}
        onClickFirstBtn={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default EditPasswordModal;
