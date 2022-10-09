import Button from 'components/Atoms/Button';
import Radio from 'components/Atoms/Form/Radio';
import FormInput from 'components/Molecules/Form/FormInput/FormInput';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as S from './Styled';
import FormTextarea from 'components/Molecules/Form/FormTextarea/FormTextarea';
const Delivery = ({ register, handleSubmit, watch, errors, setValue, control, setStep, active }) => {
  const continueClick = () => {};
  const isMobile = useSelector((state) => state.app.isMobile);
  const onSubmit = (data) => {
    setStep(2);
    window.scrollTo(0, 0);
  };
  return (
    <S.Wrapper active={active}>
      <S.Form>
        <S.TitleForm>Контактная информация</S.TitleForm>
        <S.DescriptionForm>Пожалуйста, заполните все поля</S.DescriptionForm>
        <FormInput
          width="100%"
          label="Имя"
          placeholder={'Введите имя'}
          register={register}
          name="name"
          rules={{
            required: { value: true, message: 'Заполните имя' },
          }}
          errors={errors}
        />
        <FormInput
          width="100%"
          label="Фамилия"
          placeholder={'Введите фамилию'}
          register={register}
          name="surname"
          rules={{
            required: { value: true, message: 'Заполните фамилию' },
          }}
          errors={errors}
        />
        <FormInput
          width="100%"
          label="Телефон"
          placeholder="Введите ваш номер телефона"
          type="phone"
          control={control}
          name="phone"
          errors={errors}
          rules={{
            required: { value: true, message: 'Заполните телефон' },
          }}
        />
        <FormInput
          width="100%"
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
          placeholder={'Введите адрес эл.почты'}
          label="Адрес эл. почты"
        />
      </S.Form>

      <S.Form>
        <S.TitleForm>Адрес и регион доставки</S.TitleForm>
        <S.DescriptionForm>Пожалуйста, заполните все поля</S.DescriptionForm>
        <FormInput
          width="100%"
          label="Страна"
          placeholder={'Введите вашу страну'}
          register={register}
          name="region"
          rules={{
            required: { value: true, message: 'Заполните страну' },
          }}
          errors={errors}
        />
        <FormInput
          width="100%"
          label="Город"
          placeholder={'Введите город'}
          register={register}
          name="city"
          rules={{
            required: { value: true, message: 'Заполните город' },
          }}
          errors={errors}
        />
        <FormInput
          width="100%"
          label="Улица"
          placeholder={'Введите улицу'}
          register={register}
          name="street"
          rules={{
            required: { value: true, message: 'Заполните улицу' },
          }}
          errors={errors}
        />
        <FormInput
          width="100%"
          control={control}
          label="Номер дома"
          placeholder={'Введите номер дома'}
          register={register}
          name="house"
          rules={{
            required: { value: true, message: 'Заполните номер дома' },
          }}
          errors={errors}
        />
        <FormInput
          width="100%"
          control={control}
          label="Квартира"
          placeholder={'Введите номер квартиры'}
          register={register}
          name="flat"
          rules={{
            required: { value: false, message: 'Заполните номер квартиры' },
          }}
          errors={errors}
        />
      </S.Form>

      <S.Form>
        <S.TitleForm>Комментарий к заказу</S.TitleForm>
        <FormTextarea style={{ width: '100%' }} errors={errors} watch={watch} setValue={setValue} register={register} placeholder="" label="Описание" name="comment" rules={{ required: false, maxLength: { value: 1000, message: 'Количество симовлов не более 1000' } }} />
      </S.Form>

      <S.Form padding="0 0 80px 0">
        <S.TitleForm>Способ оплаты</S.TitleForm>
        <S.Radios>
          <Radio onChange={() => {}} label="Банковские карты" value={true} />
        </S.Radios>
      </S.Form>

      <div
        style={{
          width: isMobile ? '100%' : '233px',
          marginTop: isMobile ? '40px' : '0',
          padding: isMobile ? '0 25px' : '0',
          boxSizing: 'border-box',
        }}>
        <Button onClick={handleSubmit(onSubmit)} topGreen padding="14px 0" width="100%">
          Продолжить
        </Button>
      </div>
    </S.Wrapper>
  );
};

export default Delivery;
