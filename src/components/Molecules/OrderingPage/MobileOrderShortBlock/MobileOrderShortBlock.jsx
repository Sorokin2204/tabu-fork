import { URL } from 'config';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Jacket from 'assets/img/jacket.png';
import * as S from './Styled';
import { setShowMobileCartModal } from 'redux/reducers/appReducer';
import { currencyFormat } from 'utils/currencyFormat';

const MobileOrderShortBlock = () => {
  const { cartProducts, cartTotal } = useSelector((state) => state.cart);
  console.log(cartProducts);
  const showMobileCartModal = useSelector((state) => state.app.showMobileCartModal);
  const dispatch = useDispatch();
  return (
    <>
      <S.Wrapper active={showMobileCartModal} onClick={() => dispatch(setShowMobileCartModal(true))}>
        <S.Count>{cartProducts?.length}</S.Count>
        <div
          style={{
            overflow: 'overlay',
            paddingBottom: '8px',
          }}>
          <S.ProductImageList>
            {cartProducts?.map((cartItem) => (
              <>
                <S.ProductImageBox>
                  <S.ProductImage src={URL + cartItem.images[0].image}></S.ProductImage>{' '}
                </S.ProductImageBox>
              </>
            ))}
          </S.ProductImageList>
        </div>
        <S.Total>
          <S.TotalLabel>Всего</S.TotalLabel>
          <S.TotalPrice>{currencyFormat(cartTotal)}</S.TotalPrice>
        </S.Total>
      </S.Wrapper>
    </>
  );
};

export default MobileOrderShortBlock;
