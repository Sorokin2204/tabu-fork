import LogoutModal from 'components/Molecules/ProfilePage/LogoutModal/LogoutModal';
import ProfileContent from 'components/Molecules/ProfilePage/ProfileContent/ProfileContent';
import ProfileMenu from 'components/Molecules/ProfilePage/ProfileMenu/ProfileMenu';
import TopBackground from 'components/Molecules/ProfilePage/TopBackground/TopBackground';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { sizes } from 'sizes';
import * as S from './Styled';

const ProfileWishListPage = () => {
  const isMobile = useSelector((state) => state.app.isMobile);

  return (
    <S.Wrapper>
      <LogoutModal />
      {!isMobile && <TopBackground />}

      <S.Container>
        {!isMobile && <ProfileMenu />}

        <ProfileContent wishlist title={'Избранные: 12'} />
      </S.Container>
    </S.Wrapper>
  );
};

export default ProfileWishListPage;
