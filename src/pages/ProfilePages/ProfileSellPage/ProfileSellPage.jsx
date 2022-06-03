import LogoutModal from 'components/Molecules/ProfilePage/LogoutModal/LogoutModal';
import ProfileContent from 'components/Molecules/ProfilePage/ProfileContent/ProfileContent';
import ProfileMenu from 'components/Molecules/ProfilePage/ProfileMenu/ProfileMenu';
import TopBackground from 'components/Molecules/ProfilePage/TopBackground/TopBackground';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from 'redux/reducers/userReducer';
import { sizes } from 'sizes';
import * as S from './Styled';

const ProfileSellPage = () => {
  const isMobile = useSelector((state) => state.app.isMobile);
  const tabs = [
    {
      id: 1,
      name: 'Опубликовано',
      slug: 'publish',
    },
    { id: 0, name: 'На модерации', slug: 'moderate' },
    { id: 2, name: 'Снят с продажи', slug: 'removed' },
    { id: 3, name: 'Отклонено', slug: 'canceled' },
    { id: 4, name: 'Продано', slug: 'sales' },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveTab(tabs[0]));
  }, []);
  const {
    currentUser: { product_set },
    activeTab,
  } = useSelector((state) => state.user);
  return (
    <S.Wrapper>
      <LogoutModal />
      {!isMobile && <TopBackground />}

      <S.Container>
        {!isMobile && <ProfileMenu />}
        {activeTab && product_set && <ProfileContent products={product_set[activeTab?.id]} type={activeTab?.slug} tabs={tabs} title={'Товары на продажу: 12'} />}
      </S.Container>
    </S.Wrapper>
  );
};

export default ProfileSellPage;
