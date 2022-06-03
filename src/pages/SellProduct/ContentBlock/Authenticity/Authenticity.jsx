import FormInput from 'components/Molecules/Form/FormInput/FormInput';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from './Styled';

const Authenticity = ({ errors, register, watch, setValue }) => {
  const isMobile = useSelector((state) => state.app.isMobile);
  const box = watch('box');
  const vintage = watch('vintage');
  const duster = watch('duster');
  return (
    <S.Wrapper>
      <S.Title>Подлинность</S.Title>
      <S.Inputs>
        <S.Left>
          <FormInput
            register={register}
            name="serial_number"
            rules={{
              required: { value: true, message: 'Заполните серийный номер' },
            }}
            errors={errors}
            label={'Серийный номер'}
            style={{ marginTop: 0 }}
          />
          <FormInput
            register={register}
            name="sample"
            rules={{
              required: { value: true, message: 'Заполните модель' },
            }}
            errors={errors}
            label={'Модель'}
            style={{ marginTop: isMobile ? '34px' : '47px' }}
          />
        </S.Left>
        <S.Left>
          <S.Row onClick={() => setValue('vintage', !vintage)}>
            <S.RowCol>
              <S.RowTitle>Винтаж</S.RowTitle>
              <S.RowDescription>Если товару более 15 лет</S.RowDescription>
            </S.RowCol>
            <S.Switch active={vintage}>
              <S.SwitchCircle active={vintage} />
            </S.Switch>
          </S.Row>

          <S.Row onClick={() => setValue('duster', !duster)}>
            <S.RowCol>
              <S.RowTitle>Наличие пыльника</S.RowTitle>
            </S.RowCol>
            <S.Switch active={duster}>
              <S.SwitchCircle active={duster} />
            </S.Switch>
          </S.Row>

          <S.Row onClick={() => setValue('box', !box)}>
            <S.RowCol>
              <S.RowTitle>Наличие коробки</S.RowTitle>
            </S.RowCol>
            <S.Switch active={box}>
              <S.SwitchCircle active={box} />
            </S.Switch>
          </S.Row>
        </S.Left>
      </S.Inputs>
    </S.Wrapper>
  );
};

export default Authenticity;
