import LogoutModal from 'components/Molecules/ProfilePage/LogoutModal/LogoutModal';
import ProfileContent from 'components/Molecules/ProfilePage/ProfileContent/ProfileContent';
import ProfileMenu from 'components/Molecules/ProfilePage/ProfileMenu/ProfileMenu';
import TopBackground from 'components/Molecules/ProfilePage/TopBackground/TopBackground';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteProducts } from 'redux/actions/product';
import { getFavorites } from 'redux/actions/user';
import { sizes } from 'sizes';
import * as S from './Styled';

const ProfileWishListPage = () => {
  const isMobile = useSelector((state) => state.app.isMobile);
  const { countFavorite, getFavoritesData, getFavoriteProductsLoading, getFavoriteProductsData } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <S.Wrapper>
      {!isMobile && <TopBackground />}

      <S.Container>
        {!isMobile && <ProfileMenu />}

        <ProfileContent type="favorite" loading={getFavoriteProductsLoading} wishlist title={`Избранные: ${getFavoritesData?.length ?? 0}`} products={getFavoritesData} />
      </S.Container>
    </S.Wrapper>
  );
};

export default ProfileWishListPage;
