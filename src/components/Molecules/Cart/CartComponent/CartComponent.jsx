import Grid from 'components/Atoms/Grid';
import Left from './Left/Left';
import Right from './Right/Right';
import * as S from './Styled';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { sizes } from '../../../../sizes';
import Loading from 'components/Loading/Loading';

const CartComponent = (props) => {
  const { cartProducts, cartProductsLoading } = useSelector((state) => state.cart);
  const { relevantCartLoading } = useSelector((state) => state.product);

  const isMobile = useSelector((state) => state.app.isMobile);

  return (
    <S.Container {...props}>
      <S.Title>{`Корзина ${cartProducts?.length ? `(${cartProducts?.length})` : ''}`}</S.Title>

      <Grid
        margin="56px 0 0 0"
        w100
        justify="start"
        columns="7.5fr 2.5fr"
        gap="0 96px"
        style={{
          minHeight: '200px',
          marginTop: isMobile ? '35px' : '56px',
          gridTemplateColumns: isMobile ? '1fr' : '7.5fr 2.5fr',
        }}>
        {!cartProductsLoading && cartProducts?.length !== 0 && !relevantCartLoading ? (
          <Left />
        ) : (
          <>
            <div style={{ position: 'relative' }}>
              <Loading relative style={{ top: isMobile ? '30%' : '50%' }} />
            </div>
          </>
        )}

        {!isMobile && <Right />}
      </Grid>
    </S.Container>
  );
};

export default CartComponent;
