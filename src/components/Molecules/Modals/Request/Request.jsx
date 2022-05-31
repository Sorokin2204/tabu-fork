import Button from 'components/Atoms/Button';
import Flex from 'components/Atoms/Flex';
import FormInput from 'components/Molecules/Form/FormInput/FormInput';
import MessageModal from 'components/Molecules/ProductPage/ThanksModal/ThanksModal';
import Header from 'components/Molecules/Search/Desktop/Header/Header';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postFeedback } from 'redux/actions/feedback';
import { setShowRequestErrorModal, setShowRequestModal, setShowRequestThanksModal } from 'redux/reducers/appReducer';
import { useForm } from 'react-hook-form';
import { sizes } from 'sizes';
import * as S from './Styled';
import Loading from 'components/Loading/Loading';

const Request = (props) => {
  const showRequest = useSelector((state) => state.app.showRequestModal);
  const isMobile = useSelector((state) => state.app.isMobile);
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.feedback);
  const showRequestThanksModal = useSelector((state) => state.app.showRequestThanksModal);
  const showRequestErrorModal = useSelector((state) => state.app.showRequestErrorModal);
  const defaultValues = {
    fio: '',
    email: '',
    phone: undefined,
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
  } = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (data) {
      reset(defaultValues);
      setValue('fio', '');
      setValue('email', '');
      setValue('phone', '');
      clearErrors();
    }
  }, [data]);

  const onSubmit = (data) => {
    console.log(data);
    const phone = data.phone.replace(/-/g, ' ').replace(/ /g, '').replace(/\(/g, '').replace(/\)/g, '');
    dispatch(postFeedback({ ...data, phone }));
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Wrapper {...props} className={`request ${showRequest ? 'visible' : 'hidden'}`}>
          <S.Block onClick={() => dispatch(setShowRequestModal(false))}> </S.Block>
          <S.BlockInside>
            {isMobile ? (
              ''
            ) : (
              <S.Close onClick={() => dispatch(setShowRequestModal(false))}>
                <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.4701 8.47108C24.7305 8.21073 24.7305 7.78862 24.4701 7.52827C24.2098 7.26792 23.7876 7.26792 23.5273 7.52827L15.9987 15.0569L8.4701 7.52827C8.20975 7.26792 7.78764 7.26792 7.52729 7.52827C7.26694 7.78862 7.26694 8.21073 7.52729 8.47108L15.0559 15.9997L7.52729 23.5283C7.26694 23.7886 7.26694 24.2107 7.52729 24.4711C7.78764 24.7314 8.20975 24.7314 8.4701 24.4711L15.9987 16.9425L23.5273 24.4711C23.7876 24.7314 24.2098 24.7314 24.4701 24.4711C24.7305 24.2107 24.7305 23.7886 24.4701 23.5283L16.9415 15.9997L24.4701 8.47108Z"
                    fill="#191919"
                  />
                </svg>
              </S.Close>
            )}
            {isMobile ? <Header onClose={() => dispatch(setShowRequestModal(false))} /> : ''}

            <Flex direction="column" padding="60px 122px 54px 32px" style={{ overflow: 'scroll' }}>
              <S.Title>Оставить заявку</S.Title>
              <FormInput
                label="ФИО"
                placeholder="Введите ФИО"
                type="text"
                register={register}
                name="fio"
                rules={{
                  required: { value: true, message: 'Обязательное поле ' },
                }}
                errors={errors}
              />
              <FormInput
                label="Эл.почта"
                placeholder="Введите электронную почту"
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
              <S.ButtonWrapper>
                <Button borderRadius="2px" padding="14px 49.5px" topGreen>
                  Отправить
                </Button>
              </S.ButtonWrapper>
            </Flex>
          </S.BlockInside>

          <S.Background />
        </S.Wrapper>
      </form>
      {loading && <Loading />}
      <MessageModal open={showRequestThanksModal} onClose={() => dispatch(setShowRequestThanksModal(false))} title={'Спасибо заявка принята'} desc={'Это текст снизу'} textFirstBtn={'Отлично'} onClickFirstBtn={() => dispatch(setShowRequestThanksModal(false))} />
      <MessageModal open={showRequestErrorModal} onClose={() => dispatch(setShowRequestErrorModal(false))} title={error?.title} desc={error?.desc} textFirstBtn={'Закрыть'} onClickFirstBtn={() => dispatch(setShowRequestErrorModal(false))} />
    </>
  );
};

export default Request;
