import FormInput from "components/Molecules/Form/FormInput/FormInput";
import { useState } from "react";
import * as S from "./Styled";

const Authenticity = ({
  serial,
  setSerial,
  model,
  setModel,
  vintage,
  setVintage,
  anther,
  setAnther,
  box,
  setBox,
}) => {
  return (
    <S.Wrapper>
      <S.Title>Подлинность</S.Title>
      <S.Inputs>
        <S.Left>
          <FormInput
            value={serial}
            setValue={setSerial}
            label={"Серийный номер"}
          />
          <FormInput value={model} setValue={setModel} label={"Модель"} />
        </S.Left>
        <S.Left>
          <S.Row>
            <S.RowCol>
              <S.RowTitle>Винтаж</S.RowTitle>
              <S.RowDescription>Если товару более 15 лет</S.RowDescription>
            </S.RowCol>
            <S.Switch onClick={() => setVintage(!vintage)} active={vintage}>
              <S.SwitchCircle active={vintage} />
            </S.Switch>
          </S.Row>

          <S.Row>
            <S.RowCol>
              <S.RowTitle>Наличие пыльника</S.RowTitle>
            </S.RowCol>
            <S.Switch onClick={() => setAnther(!anther)} active={anther}>
              <S.SwitchCircle active={anther} />
            </S.Switch>
          </S.Row>

          <S.Row>
            <S.RowCol>
              <S.RowTitle>Наличие коробки</S.RowTitle>
            </S.RowCol>
            <S.Switch onClick={() => setBox(!box)} active={box}>
              <S.SwitchCircle active={box} />
            </S.Switch>
          </S.Row>
        </S.Left>
      </S.Inputs>
    </S.Wrapper>
  );
};

export default Authenticity;
