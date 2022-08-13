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
import { getFavoriteProducts, publish, removeFavorite } from 'redux/actions/product';
import { setShowPublishModal, setShowRemoveFromSaleModal, setShowRemoveModal, setShowResaleModal } from 'redux/reducers/appReducer';
import { setSelectedProductProfile, updateCountCart } from 'redux/reducers/productReducer';
import RestoreIcon from 'assets/svg/restore.svg';
import ProfileIcon from 'assets/svg/profile.svg';
import { getUser } from 'redux/actions/user';
const CartProductCard = ({ profile, product, type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <S.CardWrapper key={product?.id}>
      <S.Card type={type}>
        <S.LeftCol>
          {type == 'cart' && (
            <S.Profile>
              <S.ProfileAvatar empty={!product?.seller?.avatar} src={product?.seller?.avatar ? `${product?.seller?.avatar}` : ProfileIcon} />
              <S.ProfileDetails>
                <S.ProfileName>{product?.seller?.fio ? product?.seller?.fio : product?.seller?.company_name}</S.ProfileName>
                <S.ProfileRole>{returnRole(product?.seller?.user_type)}</S.ProfileRole>
              </S.ProfileDetails>
            </S.Profile>
          )}

          <S.ProductImage type={type} src={URL + product?.images?.[0]?.image} />
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
          {type !== 'favorite' && <S.SizeBlock>{product?.size_variations?.map((item) => item.size.title).join(', ')}</S.SizeBlock>}

          {type !== 'cart' && type !== 'favorite' && type !== 'sold' && type !== 'sent' && type !== 'expertise' && type !== 'delivered' && (
            <S.Btns>
              <Button
                disabled={(type == 'moderate' || type == 'canceled') && product?.size_variations.filter((size) => size?.sold).length !== 0}
                grayBorder
                style={{
                  padding: '12px',
                  ...((type == 'moderate' || type == 'canceled') &&
                    product?.size_variations.filter((size) => size?.sold).length !== 0 && {
                      background: '#f9f9f9',
                      borderColor: '#f9f9f9',
                    }),
                }}
                onClick={() => {
                  if (type == 'publish') {
                    dispatch(setSelectedProductProfile(product?.id));
                    dispatch(setShowRemoveFromSaleModal(true));
                  } else if (type == 'moderate' || type == 'canceled') {
                    dispatch(setSelectedProductProfile(product?.id));
                    dispatch(setShowRemoveModal(true));
                  }
                  if (type == 'removed') {
                    dispatch(setSelectedProductProfile(product?.id));
                    dispatch(setShowPublishModal(true));
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
          {type === 'delivered' && (
            <S.Btns>
              <Button
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '140px', border: ' 1px solid #E2E2E2', color: '#191919' }}
                grayBorder
                onClick={() => {
                  dispatch(setSelectedProductProfile(product?.id));
                  dispatch(setShowResaleModal(true));
                }}>
                <img src={RestoreIcon} style={{ marginBottom: '2px', marginRight: '9.5px' }} />
                Продать
              </Button>
            </S.Btns>
          )}
        </S.DescriptionCol>
        <div>
          <S.PriceCol type={type}>
            <S.Price type={type}>{currencyFormat(product?.price)}</S.Price>
            {product?.old_price && <S.OldPrice>{currencyFormat(product?.old_price)}</S.OldPrice>}
          </S.PriceCol>
          {(type === 'cart' || type === 'favorite') && (
            <S.CloseBtn
              onClick={() => {
                if (type === 'cart') {
                  removeFromCart(product?.id);
                  dispatch(updateCountCart());
                  // dispatch(getCartProducts());
                }
                if (type === 'favorite') {
                  dispatch(removeFavorite(product?.id));
                  dispatch(getFavoriteProducts(1));
                  dispatch(getUser());
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
