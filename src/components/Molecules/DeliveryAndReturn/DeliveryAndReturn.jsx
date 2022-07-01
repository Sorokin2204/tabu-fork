import React from 'react';
import * as S from './Styled';
const DeliveryAndReturn = () => {
  const steps = ['Подтверждение заказа', 'Доставка в TAABU', 'Экспертиза TAABU', 'Доставка покупателю'];
  return (
    <>
      <S.Wrapper name="delivery-block">
        <S.Inner>
          <S.Title>ДОСТАВКА И ВОЗВРАТ</S.Title>
          <S.Content>
            <S.Left>
              <S.LeftTitle>Доставка от двери до двери в течении 7 рабочих дней</S.LeftTitle>
              <S.LeftText>Отслеживать статус доставки вы можете в личном кабинете TAABU, где мы подробно показываем на каком этапе в данный момент находится ваш товар</S.LeftText>
              <S.LeftSteps>
                {steps?.map((step) => (
                  <S.LeftStep>{step}</S.LeftStep>
                ))}
              </S.LeftSteps>
            </S.Left>
            <S.Right>
              <S.RightTitle>Возврат</S.RightTitle>
              <S.RightText>
                Вещи, купленные у частных продавцов, возврату не подлежат. Каждый товар проходит тщательную экспертизу на соответствие представленным фотографиям и описанию. Если покупка не оправдала Ваших ожиданий, Вы всегда можете выставить ее на продажу на нашей платформе указав причину продажи.
              </S.RightText>
            </S.Right>
            {/* {list?.map((item) => (
              <S.Block>
                <S.BlockTitle>{item.title}</S.BlockTitle>
                <S.List>
                  {item.list?.map((item, i) => (
                    <S.Item>{`${i + 1}. ${item}`}</S.Item>
                  ))}
                </S.List>
              </S.Block>
            ))} */}
          </S.Content>
        </S.Inner>
      </S.Wrapper>
    </>
  );
};

export default DeliveryAndReturn;
