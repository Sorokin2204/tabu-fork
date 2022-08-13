import { useEffect, useState } from 'react';
import Button from '../../../Atoms/Button';
import Flex from '../../../Atoms/Flex';
import Input from '../../../Atoms/Form/Input';

import Radio from '../../../Atoms/Form/Radio';
import Text from '../../../Atoms/Text';
import styled from 'styled-components';
import { sizes } from '../../../../sizes';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { postSubscribe } from 'redux/actions/subscribe';
import Loading from 'components/Loading/Loading';
import MessageModal from 'components/Molecules/ProductPage/ThanksModal/ThanksModal';
import { setShowSubscribeErrorModal, setShowSubscribeThanksModal } from 'redux/reducers/appReducer';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 422px;
  @media (max-width: ${sizes.mobile}px) {
    width: 100%;
    padding: 48px 25px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 0;

  @media (max-width: ${sizes.mobile}px) {
    padding: 0px 0 0 0;
  }
`;

const Subscribe = () => {
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
        <Wrapper>
          <Container name="Wrapper" width="30%" direction="column">
            <Text color="#191919" fontFamily="Gilroy" fontWeight="400" fontSize="32px" textAlign="center">
              ПОДПИШИТЕСЬ НА РАССЫЛКУ
            </Text>
            <Text color="#191919" fontFamily="Manrope" fontWeight="400" fontSize="14px" textAlign="center" margin="20px 0 0 0">
              Ранний доступ к распродаже, новости о специальных предложениях и подборки лучших новинок — для подписчиков рассылки.
            </Text>
            <Flex margin="40px 0 0 0" justify="center">
              <Radio label="Женщина" value={gender === 140} onChange={handleWomanChange} />
              <Radio label="Мужчина" value={gender === 141} onChange={handleMenChange} margin="0 0 0 64px" />
            </Flex>
            <Flex margin="31px 0 0 0">
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
              />
            </Flex>
            <Button type="submit" fontFamily="Gilroy" fontSize="14px" fontWeight="400" padding="11px 0" margin="20px 0 0 0" topGreen>
              Подписаться
            </Button>
            <Text fontFamily="Gilroy" fontSize="14px" fontWeight="400" color="#717171" textAlign="center" margin="32px 0 0 0">
              Подписываясь на рассылку, вы соглашаетесь с «Правилами пользования» и «Публичной офертой и Политикой конфиденциальности».
            </Text>
          </Container>
          {loading && <Loading />}
        </Wrapper>
      </form>
      <MessageModal open={showSubscribeThanksModal} onClose={() => dispatch(setShowSubscribeThanksModal(false))} title={'Подписка на рассылку оформлена'} desc={''} textFirstBtn={'Отлично'} onClickFirstBtn={() => dispatch(setShowSubscribeThanksModal(false))} />
      <MessageModal open={showSubscribeErrorModal} onClose={() => dispatch(setShowSubscribeErrorModal(false))} title={error?.title} desc={error?.desc} textFirstBtn={'Закрыть'} onClickFirstBtn={() => dispatch(setShowSubscribeErrorModal(false))} />
    </>
  );
};

export default Subscribe;
