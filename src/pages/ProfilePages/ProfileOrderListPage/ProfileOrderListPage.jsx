import LogoutModal from 'components/Molecules/ProfilePage/LogoutModal/LogoutModal';
import ProfileContent from 'components/Molecules/ProfilePage/ProfileContent/ProfileContent';
import Tabs from 'components/Molecules/ProfilePage/ProfileContent/Tabs/Tabs';
import ProfileMenu from 'components/Molecules/ProfilePage/ProfileMenu/ProfileMenu';
import ProfileProducts from 'components/Molecules/ProfilePage/ProfileProducts/ProfileProducts';
import TopBackground from 'components/Molecules/ProfilePage/TopBackground/TopBackground';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasedProducts } from 'redux/actions/product';
import { setActiveTab } from 'redux/reducers/userReducer';
import ProfileLayout from '../ProfileLayout/ProfileLayout';
import * as S from '../ProfileSellPage/Styled';
const ProfileOrderListPage = () => {
  const [tabs, setTabs] = useState();
  const dispatch = useDispatch();
  const tabsNoCount = [
    {
      id: 0,
      name: 'Экспертиза',
      slug: 'expertise',
    },
    { id: 1, name: 'Отправлено', slug: 'sent' },
    { id: 2, name: 'Доставлено', slug: 'delivered' },
  ];
  const {
    currentUser: { delivered_count, sent_count, expertise_count, purchased_count },
    activeTab,
  } = useSelector((state) => state.user);
  const { currentUser } = useSelector((state) => state.user);
  const { getPurchasedProductsData, getPurchasedProductsLoading, currentPage } = useSelector((state) => state.product);

  const refreshTabs = () => {
    if (currentUser) {
      const tabsWithCount = [...tabsNoCount];
      tabsWithCount[0].name = `${tabsWithCount[0].name} ${expertise_count ?? 0}`;
      tabsWithCount[1].name = `${tabsWithCount[1].name} ${sent_count ?? 0}`;
      tabsWithCount[2].name = `${tabsWithCount[2].name} ${delivered_count ?? 0}`;
      setTabs(tabsWithCount);
      if (!activeTab || !tabs) {
        dispatch(setActiveTab(tabsWithCount[0]));
      }
    }
  };

  useEffect(() => {
    refreshTabs();
  }, [currentUser]);

  useEffect(() => {
    if (activeTab) {
      dispatch(getPurchasedProducts(activeTab.id, 1));
    }
  }, [activeTab]);
  return (
    <ProfileLayout>
      {activeTab && tabs && (
        <ProfileContent
          products={getPurchasedProductsData?.results}
          type={activeTab?.slug}
          tabs={tabs}
          title={`Мои заказы: ${purchased_count}`}
          loading={getPurchasedProductsLoading}
          currentPage={currentPage}
          productsCount={getPurchasedProductsData?.count}
          onPageClick={(val) => {
            dispatch(getPurchasedProducts(activeTab?.id, val));
          }}
        />
      )}{' '}
    </ProfileLayout>
  );
};

export default ProfileOrderListPage;
