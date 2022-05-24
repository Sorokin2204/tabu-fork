import LogoutModal from 'components/Molecules/ProfilePage/LogoutModal/LogoutModal';
import ProfileContent from 'components/Molecules/ProfilePage/ProfileContent/ProfileContent';
import ProfileMenu from 'components/Molecules/ProfilePage/ProfileMenu/ProfileMenu';
import TopBackground from 'components/Molecules/ProfilePage/TopBackground/TopBackground';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { sizes } from 'sizes';
import * as S from './Styled';

const ProfileSellPage = () => {
  const isMobile = useSelector((state) => state.app.isMobile);
  const tabs = [
    {
      name: 'Опубликовано',
      slug: 'publish',
    },
    {
      name: 'На модерации',
      slug: 'moderate',
    },
    {
      name: 'Снят с продажи',
      slug: 'dont-sell',
    },
    {
      name: 'Отклонено',
      slug: 'canceled',
    },
    {
      name: 'Продано',
      slug: 'sales',
    },
  ];
  return (
    <S.Wrapper>
      <LogoutModal />
      {!isMobile && <TopBackground />}

      <S.Container>
        {!isMobile && <ProfileMenu />}

        <ProfileContent tabs={tabs} title={'Товары на продажу: 12'} />
      </S.Container>
    </S.Wrapper>
  );
};

export default ProfileSellPage;
