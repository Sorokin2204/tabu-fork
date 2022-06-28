import React, { useEffect } from 'react';
import MessageModal from 'components/Molecules/ProductPage/ThanksModal/ThanksModal';
import { useDispatch, useSelector } from 'react-redux';
import { setShowResetPassModal, setShowResetPassSuccessModal } from 'redux/reducers/appReducer';
import { useForm } from 'react-hook-form';
import FormInput from 'components/Molecules/Form/FormInput/FormInput';
import { resetPasswordSuccess } from 'redux/reducers/userReducer';
import { resetPassword } from 'redux/actions/user';
import Loading from 'components/Loading/Loading';
const ResetPassModal = () => {
  const dispath = useDispatch();
  const { showResetPassModal } = useSelector((state) => state.app);
  const { resetPasswordData, resetPasswordLoading } = useSelector((state) => state.user);
  const defaultValues = {
    email: '',
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
    dispath(resetPassword(data));
  };
  useEffect(() => {
    if (resetPasswordData && !resetPasswordLoading) {
      reset();
      dispath(setShowResetPassModal(false));
      dispath(setShowResetPassSuccessModal(true));
      dispath(resetPasswordSuccess(null));
    }
  }, [resetPasswordData, resetPasswordLoading]);

  const isMobile = useSelector((state) => state.app.isMobile);
  return (
    <>
      {resetPasswordLoading && <Loading />}
      <MessageModal
        style={{
          ...(isMobile && { height: '280px' }),
          //   height: '300px',
        }}
        open={showResetPassModal}
        onClose={() => dispath(setShowResetPassModal(false))}
        title={'Восстановление пароля'}
        desc={
          <div style={{ width: isMobile ? '260px' : '300px', textAlign: 'left', marginBottom: isMobile ? '28px' : '0' }}>
            <FormInput
              style={{ marginTop: '10px', width: '100%' }}
              label="Эл.почта"
              placeholder="Введите электронную почту"
              type="email"
              register={register}
              name="email"
              rules={{
                required: { value: true, message: 'Обязательное поле для заполнения' },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Неправильный формат почты',
                },
              }}
              errors={errors}
            />
          </div>
        }
        textFirstBtn={'Сбросить пароль'}
        onClickFirstBtn={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default ResetPassModal;
