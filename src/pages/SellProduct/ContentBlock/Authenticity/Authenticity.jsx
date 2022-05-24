import FormInput from 'components/Molecules/Form/FormInput/FormInput';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from './Styled';

const Authenticity = ({ serial, setSerial, model, setModel, vintage, setVintage, anther, setAnther, box, setBox }) => {
  const isMobile = useSelector((state) => state.app.isMobile);
  return (
    <S.Wrapper>
      <S.Title>Подлинность</S.Title>
      <S.Inputs>
        <S.Left>
          <FormInput value={serial} setValue={setSerial} label={'Серийный номер'} style={{ marginTop: 0 }} />
          <FormInput value={model} setValue={setModel} label={'Модель'} style={{ marginTop: isMobile ? '34px' : '47px' }} />
        </S.Left>
        <S.Left>
          <S.Row onClick={() => setVintage(!vintage)}>
            <S.RowCol>
              <S.RowTitle>Винтаж</S.RowTitle>
              <S.RowDescription>Если товару более 15 лет</S.RowDescription>
            </S.RowCol>
            <S.Switch active={vintage}>
              <S.SwitchCircle active={vintage} />
            </S.Switch>
          </S.Row>

          <S.Row onClick={() => setAnther(!anther)}>
            <S.RowCol>
              <S.RowTitle>Наличие пыльника</S.RowTitle>
            </S.RowCol>
            <S.Switch active={anther}>
              <S.SwitchCircle active={anther} />
            </S.Switch>
          </S.Row>

          <S.Row onClick={() => setBox(!box)}>
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
