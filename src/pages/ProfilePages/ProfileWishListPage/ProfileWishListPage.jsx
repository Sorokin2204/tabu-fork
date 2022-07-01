import LogoutModal from 'components/Molecules/ProfilePage/LogoutModal/LogoutModal';
import ProfileContent from 'components/Molecules/ProfilePage/ProfileContent/ProfileContent';
import ProfileMenu from 'components/Molecules/ProfilePage/ProfileMenu/ProfileMenu';
import TopBackground from 'components/Molecules/ProfilePage/TopBackground/TopBackground';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteProducts } from 'redux/actions/product';
import { sizes } from 'sizes';
import ProfileLayout from '../ProfileLayout/ProfileLayout';
import * as S from './Styled';

const ProfileWishListPage = () => {
  const isMobile = useSelector((state) => state.app.isMobile);
  const { currentUser } = useSelector((state) => state.user);
  const { countFavorite, getFavoriteProductsLoading, getFavoriteProductsData, currentPage } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavoriteProducts(1));
  }, []);

  return (
    <ProfileLayout>
      <ProfileContent
        type="favorite"
        loading={getFavoriteProductsLoading}
        wishlist
        title={`Избранные: ${currentUser?.favorites_count ?? 0}`}
        products={getFavoriteProductsData?.results}
        currentPage={currentPage}
        productsCount={getFavoriteProductsData?.count}
        onPageClick={(val) => {
          dispatch(getFavoriteProducts(val));
        }}
      />
    </ProfileLayout>
  );
};

export default ProfileWishListPage;
