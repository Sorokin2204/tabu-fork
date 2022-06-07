import * as S from './Styled';
import { URL } from 'config';
import { useDispatch, useSelector } from 'react-redux';
import { setCartProducts } from '../../../../../../redux/reducers/cartReducer';
import { useEffect, useState } from 'react';
import { sizes } from '../../../../../../sizes';
import IconClose from 'assets/svg/close.svg';
import Button from 'components/Atoms/Button';
import { returnRole } from 'components/Molecules/ProductPage/Desktop/RightBlock/Seller/Seller';
import { currencyFormat } from 'utils/currencyFormat';
import { removeFromCart } from 'utils/removeFromCart';
import { getCartProducts } from 'redux/actions/cart';
import { useNavigate } from 'react-router-dom';
import { removeFavorite } from 'redux/actions/product';
import { setShowRemoveFromSaleModal } from 'redux/reducers/appReducer';
import { setSelectedProductProfile } from 'redux/reducers/productReducer';

const CartProductCard = ({ profile, product, type }) => {
  // const cartProducts = useSelector((state) => state.cart.cartProducts);
  const dispatch = useDispatch();

  // const deleteItem = (id) => {
  //   let copyCartProducts = cartProducts;
  //   copyCartProducts = copyCartProducts.filter((x) => x.id !== id);
  //   dispatch(setCartProducts());

  //   // Сохранение в localstorage
  //   localStorage.setItem('cartProducts', JSON.stringify(copyCartProducts));
  //   console.log(id);
  // };
  const navigate = useNavigate();
  return (
    <S.CardWrapper>
      <S.Card type={type}>
        <S.LeftCol>
          {type == 'cart' && (
            <S.Profile>
              <S.ProfileAvatar src={URL + product?.seller?.avatar} />
              <S.ProfileDetails>
                <S.ProfileName>{product?.seller?.fio ? product?.seller?.fio : product?.seller?.company_name}</S.ProfileName>
                <S.ProfileRole>{returnRole(product?.seller?.user_type)}</S.ProfileRole>
              </S.ProfileDetails>
            </S.Profile>
          )}

          <S.ProductImage type={type} src={URL + product.images[0]?.image} />
        </S.LeftCol>
        <S.DescriptionCol type={type}>
          <S.DescBlock type={type}>
            <S.DescriptionTitle
              type={type}
              onClick={() => {
                if (type === 'cart' || type === 'favorite' || type === 'publish') {
                  navigate(`/products/${product?.id}`);
                }
              }}>
              {product?.title}
            </S.DescriptionTitle>
            <S.DescriptionText>{product?.description?.length > 65 ? product?.description?.slice(0, 65) + ' ...' : product?.description}</S.DescriptionText>
          </S.DescBlock>
          {type !== 'favorite' && <S.SizeBlock>{product?.size?.title ? product?.size?.title : product?.size?.map((item) => item.title).join(', ')}</S.SizeBlock>}

          {type !== 'cart' && type !== 'favorite' && (
            <S.Btns>
              <Button
                grayBorder
                style={{ padding: '12px' }}
                onClick={() => {
                  if (type == 'publish') {
                    dispatch(setSelectedProductProfile(product?.id));
                    dispatch(setShowRemoveFromSaleModal(true));
                  }
                }}>
                {type == 'publish' ? 'Снять с продажи' : type == 'moderate' || type == 'canceled' ? 'Удалить' : type == 'removed' ? 'Опубликовать' : 'Снять с продажи'}
              </Button>
              <Button
                topGreen
                onClick={() => {
                  navigate(`/sellproduct/${product?.id}`);
                }}>
                Редактировать
              </Button>
            </S.Btns>
          )}
        </S.DescriptionCol>
        <div>
          <S.PriceCol type={type}>
            <S.Price type={type}>{currencyFormat(product?.price)}</S.Price>

            <S.OldPrice>{currencyFormat(product?.old_price)}</S.OldPrice>
          </S.PriceCol>
          {(type === 'cart' || type === 'favorite') && (
            <S.CloseBtn
              onClick={() => {
                if (type === 'cart') {
                  removeFromCart(product?.id);
                  dispatch(getCartProducts());
                }
                if (type === 'favorite') {
                  dispatch(removeFavorite(product?.id));
                }
              }}>
              {/* <img src={IconClose} /> */}
              <svg viewBox="0 0 10 10" fill="none" width={10} height={10} xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.88735 0.656579C10.0375 0.506378 10.0375 0.262853 9.88735 0.112651C9.73715 -0.0375504 9.49362 -0.0375504 9.34342 0.112651L5 4.45607L0.656579 0.112651C0.506378 -0.0375504 0.262853 -0.0375504 0.112651 0.112651C-0.0375504 0.262853 -0.0375504 0.506378 0.112651 0.656579L4.45607 5L0.112651 9.34342C-0.0375504 9.49362 -0.0375504 9.73715 0.112651 9.88735C0.262853 10.0375 0.506378 10.0375 0.656579 9.88735L5 5.54393L9.34342 9.88735C9.49362 10.0375 9.73715 10.0375 9.88735 9.88735C10.0375 9.73715 10.0375 9.49362 9.88735 9.34342L5.54393 5L9.88735 0.656579Z"
                  fill="#717171"
                />
              </svg>
            </S.CloseBtn>
          )}
        </div>
      </S.Card>
    </S.CardWrapper>
  );
};

export default CartProductCard;
