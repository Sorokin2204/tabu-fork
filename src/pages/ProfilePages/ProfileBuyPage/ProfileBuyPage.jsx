import LogoutModal from 'components/Molecules/ProfilePage/LogoutModal/LogoutModal';
import ProfileContent from 'components/Molecules/ProfilePage/ProfileContent/ProfileContent';
import ProfileMenu from 'components/Molecules/ProfilePage/ProfileMenu/ProfileMenu';
import TopBackground from 'components/Molecules/ProfilePage/TopBackground/TopBackground';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { sizes } from 'sizes';
import * as S from './Styled';

const ProfileBuyPage = () => {
  const isMobile = useSelector((state) => state.app.isMobile);
  console.log(isMobile);
  return (
    <S.Wrapper>
      <LogoutModal />
      <TopBackground />
      <S.Container>
        <ProfileMenu />
      </S.Container>
    </S.Wrapper>
  );
};

export default ProfileBuyPage;
