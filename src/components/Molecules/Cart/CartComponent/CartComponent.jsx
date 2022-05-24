import Grid from 'components/Atoms/Grid';
import Left from './Left/Left';
import Right from './Right/Right';
import * as S from './Styled';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { sizes } from '../../../../sizes';

const CartComponent = (props) => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  const isMobile = useSelector((state) => state.app.isMobile);

  return (
    <S.Container {...props}>
      <S.Title>Корзина({cartProducts?.length})</S.Title>
      <S.Description>Бесплатная доставка и возврат</S.Description>

      <Grid
        margin="56px 0 0 0"
        w100
        justify="start"
        columns="7.5fr 2.5fr"
        gap="0 96px"
        style={{
          marginTop: isMobile ? '35px' : '56px',
        }}>
        <Left />
        {!isMobile && <Right />}
      </Grid>
    </S.Container>
  );
};

export default CartComponent;
