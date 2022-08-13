import MessageModal from 'components/Molecules/ProductPage/ThanksModal/ThanksModal';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setShowOrderingError } from 'redux/reducers/appReducer';
import Delivery from './Delivery/Delivery';
import Payment from './Payment/Payment';
import Steps from './Steps/Steps';
import * as S from './Styled';

const ContentBlock = () => {
  const [step, setStep] = useState(1);
  const defaultValues = {
    name: '',
    surname: '',
    phone: '',
    email: '',
    city: '',
    street: '',
    house: '',
    flat: '',
    comment: '',
    region: '',
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    control,
    getValues,
    reset,
    clearErrors,
    trigger,
    setError,
  } = useForm({
    defaultValues: defaultValues,
  });
  const dispatch = useDispatch();
  const { orderingError } = useSelector((state) => state.cart);
  const { showOrderingError } = useSelector((state) => state.app);
  useEffect(() => {
    if (orderingError) {
      dispatch(setShowOrderingError(true));
    }
  }, [orderingError]);

  return (
    <S.ContentBlock>
      <S.Header>
        <Link to="/">
          <S.HeaderLogo src={'/img/logo.svg'} alt="" />
        </Link>
      </S.Header>
      <Steps step={step} />
      <S.Container>
        <Delivery register={register} handleSubmit={handleSubmit} watch={watch} errors={errors} setValue={setValue} control={control} setStep={setStep} active={step === 1 && true} />
        <Payment data={getValues()} values={watch()} setStep={setStep} active={step === 2 && true} />

        <MessageModal
          open={showOrderingError}
          onClose={() => {
            dispatch(setShowOrderingError(false));
          }}
          title={orderingError ? orderingError : 'Произошла непредвиденная ошибка'}
          textFirstBtn={'Закрыть'}
          onClickFirstBtn={() => {
            dispatch(setShowOrderingError(false));
          }}
        />
      </S.Container>
    </S.ContentBlock>
  );
};

export default ContentBlock;
