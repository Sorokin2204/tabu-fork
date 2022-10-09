import { useEffect, useState } from 'react';
import Button from 'components/Atoms/Button';
import Flex from 'components/Atoms/Flex';
import Input from 'components/Atoms/Form/Input';
import Radio from 'components/Atoms/Form/Radio';
import Text from 'components/Atoms/Text';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { postSubscribe } from 'redux/actions/subscribe';
import Loading from 'components/Loading/Loading';
import MessageModal from 'components/Molecules/ProductPage/ThanksModal/ThanksModal';
import { setShowSubscribeErrorModal, setShowSubscribeThanksModal } from 'redux/reducers/appReducer';
const MobileSubscribe = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.subscribe);
  const showSubscribeThanksModal = useSelector((state) => state.app.showSubscribeThanksModal);
  const showSubscribeErrorModal = useSelector((state) => state.app.showSubscribeErrorModal);
  const defaultValues = {
    category: 140,
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
  } = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (data) {
      setValue('category', 140);
      setValue('email', '');
      clearErrors();
    }
  }, [data]);

  const onSubmit = (data) => {
    dispatch(postSubscribe(data));
  };
  const handleWomanChange = () => {
    setValue('category', 140);
  };
  const gender = watch('category');
  const handleMenChange = () => {
    setValue('category', 141);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex padding="48px 25px" justify="center">
          <Flex name="Wrapper" width="100%" direction="column">
            <Text
              color="#191919"
              fontFamily="Gilroy"
              fontWeight="400"
              fontSize="20px"
              textAlign="center"
              style={{
                maxWidth: '245px',
                margin: '0 auto',
              }}>
              ПОДПИШИТЕСЬ НА РАССЫЛКУ
            </Text>
            <Text
              color="#191919"
              fontFamily="Manrope"
              fontWeight="400"
              fontSize="14px"
              textAlign="center"
              margin="20px 0 0 0"
              style={{
                maxWidth: '234px',
                margin: '16px auto 0 auto',
              }}>
              Ранний доступ к распродаже, новости о специальных предложениях и подборки лучших новинок — для подписчиков рассылки.
            </Text>
            <Flex margin="24px 0 0 0" justify="center">
              <Radio label="Женщина" value={gender === 140} onChange={handleWomanChange} />
              <Radio label="Мужчина" value={gender === 141} onChange={handleMenChange} margin="0 0 0 32px" />
            </Flex>
            <Flex
              margin="31px auto 0 auto"
              style={{
                maxWidth: '326px',
                width: '100%',
              }}>
              <Input
                type="email"
                width="100%"
                label="Электронная почта"
                placeholder="Эл.почта"
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
                style={{
                  margin: '0 auto !important',
                  maxWidth: '326px',
                  width: '100%',
                }}
              />
            </Flex>
            <Button
              fontFamily="Gilroy"
              fontSize="14px"
              fontWeight="400"
              padding="10px 0 12px 0"
              margin="20px 0 0 0"
              topGreen
              style={{
                margin: '16px  auto 0 auto',
                width: '100%',
                maxWidth: '326px',
              }}
              type="submit">
              Подписаться
            </Button>
            <Text fontFamily="Gilroy" fontSize="14px" fontWeight="400" color="#717171" textAlign="center" margin="32px 0 0 0" style={{ maxWidth: '326px', margin: '32px auto 0 auto' }}>
              Подписываясь на рассылку, вы соглашаетесь с «Правилами пользования», «Публичной офертой» и «Политикой конфиденциальности».
            </Text>
          </Flex>
          {loading && <Loading />}
        </Flex>
      </form>
      <MessageModal open={showSubscribeThanksModal} onClose={() => dispatch(setShowSubscribeThanksModal(false))} title={'Подписка на рассылку оформлена'} desc={''} textFirstBtn={'Отлично'} onClickFirstBtn={() => dispatch(setShowSubscribeThanksModal(false))} />
      <MessageModal open={showSubscribeErrorModal} onClose={() => dispatch(setShowSubscribeErrorModal(false))} title={error?.title} desc={error?.desc} textFirstBtn={'Закрыть'} onClickFirstBtn={() => dispatch(setShowSubscribeErrorModal(false))} />
    </>
  );
};

export default MobileSubscribe;
