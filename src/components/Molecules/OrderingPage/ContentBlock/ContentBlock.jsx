import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
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
  return (
    <S.ContentBlock>
      <S.Header>
        <Link to="/">
          <S.HeaderLogo src={'/img/logo.png'} alt="" />
        </Link>
      </S.Header>
      <Steps step={step} />
      <S.Container>
        <Delivery register={register} handleSubmit={handleSubmit} watch={watch} errors={errors} setValue={setValue} control={control} setStep={setStep} active={step === 1 && true} />
        <Payment data={getValues()} values={watch()} setStep={setStep} active={step === 2 && true} />
      </S.Container>
    </S.ContentBlock>
  );
};

export default ContentBlock;
