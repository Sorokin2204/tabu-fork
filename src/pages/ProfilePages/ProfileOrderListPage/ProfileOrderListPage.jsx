import LogoutModal from 'components/Molecules/ProfilePage/LogoutModal/LogoutModal';
import ProfileContent from 'components/Molecules/ProfilePage/ProfileContent/ProfileContent';
import Tabs from 'components/Molecules/ProfilePage/ProfileContent/Tabs/Tabs';
import ProfileMenu from 'components/Molecules/ProfilePage/ProfileMenu/ProfileMenu';
import ProfileProducts from 'components/Molecules/ProfilePage/ProfileProducts/ProfileProducts';
import TopBackground from 'components/Molecules/ProfilePage/TopBackground/TopBackground';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../ProfileSellPage/Styled';
const ProfileOrderListPage = ({ title }) => {
  const tabs = [
    {
      name: 'Экспертиза',
      slug: 'expertisa',
    },
    {
      name: 'Отправлено',
      slug: 'sent',
    },
    {
      name: 'Доставлено',
      slug: 'delivered',
    },
  ];
  const isMobile = useSelector((state) => state.app.isMobile);
  const {
    currentUser: { purchased_count },
  } = useSelector((state) => state.user);
  return (
    <S.Wrapper>
      {!isMobile && <TopBackground />}

      <S.Container>
        {!isMobile && <ProfileMenu />}

        <ProfileContent tabs={tabs} title={`Мои заказы: ${purchased_count}`} />
      </S.Container>
    </S.Wrapper>
  );
};

export default ProfileOrderListPage;
