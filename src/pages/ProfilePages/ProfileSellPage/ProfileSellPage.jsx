import LogoutModal from 'components/Molecules/ProfilePage/LogoutModal/LogoutModal';
import ProfileContent from 'components/Molecules/ProfilePage/ProfileContent/ProfileContent';
import ProfileMenu from 'components/Molecules/ProfilePage/ProfileMenu/ProfileMenu';
import TopBackground from 'components/Molecules/ProfilePage/TopBackground/TopBackground';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { sizes } from 'sizes';
import * as S from './Styled';

const ProfileSellPage = () => {
  const [showLogout, setShowLogout] = useState(false);
  const isMobile = useSelector((state) => state.app.isMobile);

  return (
    <S.Wrapper>
      <LogoutModal show={showLogout} setShow={setShowLogout} />
      <TopBackground />
      <S.Container>
        <ProfileMenu setShowLogout={setShowLogout} />

        {isMobile ? '' : <ProfileContent />}
      </S.Container>
    </S.Wrapper>
  );
};

export default ProfileSellPage;
