import Flex from 'components/Atoms/Flex';
import React, { useEffect, useState } from 'react';
import Favorite from 'assets/svg/favorite.svg';
import FavoriteFill from 'assets/svg/favorite-fill.svg';
import Text from 'components/Atoms/Text';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from 'redux/actions/product';
import { setShowAuthModal, setShowRegModal } from 'redux/reducers/appReducer';

const AddFavoriteBtn = ({ button, productId }) => {
  const { products, getFavoritesData, getFavoritesLoading, addFavoriteLoading, removeFavoriteLoading } = useSelector((state) => state.product);
  const [isFavorite, setIsFavorite] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    // if (getFavoritesData && getFavoritesData?.length !== 0) {
    const isFavorite = getFavoritesData?.find((item) => item.id === productId);
    setIsFavorite(!!isFavorite);
    // }
  }, [getFavoritesData, productId]);
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <button
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
      }}
      disabled={getFavoritesLoading || addFavoriteLoading || removeFavoriteLoading}
      onClick={() => {
        if (isAuth) {
          if (isFavorite) {
            dispatch(removeFavorite(productId));
          } else {
            dispatch(addFavorite(productId));
          }
        } else {
          dispatch(setShowAuthModal(true));
          dispatch(setShowRegModal(true));
        }
      }}>
      <Flex
        direction="row"
        margin="32px 0 0 0"
        cursor="pointer"
        style={{
          ...(button && {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #E5E5E5',
            padding: '17px',
          }),
        }}>
        <img
          src={isFavorite ? FavoriteFill : Favorite}
          style={{
            ...(button && {
              width: '18px',
              height: '16px',
            }),
          }}
        />
        <Text
          margin="0 0 0 11px"
          color="#191919"
          fontFamily="Gilroy"
          fontWeight="400"
          fonrSize="14px"
          cursor="pointer"
          style={{
            textTransform: 'uppercase',
            ...(button && {
              fontSize: '14px',
            }),
          }}>
          {isFavorite ? 'Добавлен в избранное' : 'Добавить в избранное'}
        </Text>
      </Flex>
    </button>
  );
};

export default AddFavoriteBtn;
