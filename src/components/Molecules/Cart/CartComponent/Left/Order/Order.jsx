import Button from 'components/Atoms/Button';
import { useSelector } from 'react-redux';
import * as S from './Styled';
import { useEffect, useState } from 'react';
import { sizes } from '../../../../../../sizes';
import { Navigate, useNavigate } from 'react-router-dom';

const Order = () => {
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const isMobile = useSelector((state) => state.app.isMobile);

  return (
    <S.Container>
      <S.Title>СУММА ЗАКАЗА</S.Title>
      <S.Calc>
        <S.CalcRow>
          <S.CalcName>Товары:</S.CalcName>
          <S.CalcValue>
            $&nbsp;
            {cartProducts.reduce((accumulator, current) => accumulator + current.price, 0)}
          </S.CalcValue>
        </S.CalcRow>
        <S.CalcRow>
          <S.CalcName>Экспертиза:</S.CalcName>
          <S.CalcValue>$0</S.CalcValue>
        </S.CalcRow>
        <S.CalcRow>
          <S.CalcName>Доставка:</S.CalcName>
          <S.CalcValue>$0</S.CalcValue>
        </S.CalcRow>
      </S.Calc>
      <S.Line />
      <S.ResultRow>
        <S.ResultName>Всего:</S.ResultName>
        <S.ResultValue>
          $&nbsp;
          {cartProducts?.length > 0 && cartProducts?.reduce((accumulator, current) => accumulator + current.price, 0)}
        </S.ResultValue>
      </S.ResultRow>
      <S.Information>
        <S.InfoIcon>
          <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 2.21624C5.25235 2.21624 2.21429 5.25431 2.21429 9.00195C2.21429 12.7496 5.25235 15.7877 9 15.7877C12.7476 15.7877 15.7857 12.7496 15.7857 9.00195C15.7857 5.25431 12.7476 2.21624 9 2.21624ZM1.5 9.00195C1.5 4.85982 4.85786 1.50195 9 1.50195C13.1421 1.50195 16.5 4.85982 16.5 9.00195C16.5 13.1441 13.1421 16.502 9 16.502C4.85786 16.502 1.5 13.1441 1.5 9.00195Z"
              fill="#191919"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.64509 9.71456L8.64509 4.71456C8.64509 4.51732 8.80499 4.35742 9.00223 4.35742C9.19948 4.35742 9.35937 4.51732 9.35937 4.71456L9.35937 9.71456C9.35937 9.91181 9.19948 10.0717 9.00223 10.0717C8.80499 10.0717 8.64509 9.91181 8.64509 9.71456Z"
              fill="#191919"
            />
            <path d="M9.71568 12.5717C9.71568 12.9662 9.39588 13.286 9.0014 13.286C8.60691 13.286 8.28711 12.9662 8.28711 12.5717C8.28711 12.1772 8.60691 11.8574 9.0014 11.8574C9.39588 11.8574 9.71568 12.1772 9.71568 12.5717Z" fill="#191919" />
          </svg>
        </S.InfoIcon>
        <S.InfoText>Обратите внимание, что если ваш заказ содержит один или несколько товаров, то доставка займет больше времени. Мы подготовим и отправим все ваши товары в одной посылке.</S.InfoText>
      </S.Information>
      <S.Buttons>
        <Button border="1px solid #717171" borderRadius="2px" background="#fff" color="#717171" padding="14px" width={isMobile ? '100%' : 'auto'} style={{ whiteSpace: 'nowrap', order: isMobile ? 2 : 1 }}>
          Продолжить покупки
        </Button>
        <Button onClick={() => navigate('/ordering')} green borderRadius="2px" padding="14px" width={isMobile ? '100%' : 'auto'} style={{ whiteSpace: 'nowrap', order: isMobile ? 1 : 2 }}>
          Оформить заказ
        </Button>
      </S.Buttons>
    </S.Container>
  );
};

export default Order;
