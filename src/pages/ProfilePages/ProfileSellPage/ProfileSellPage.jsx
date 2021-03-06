import LogoutModal from 'components/Molecules/ProfilePage/LogoutModal/LogoutModal';
import ProfileContent from 'components/Molecules/ProfilePage/ProfileContent/ProfileContent';
import ProfileMenu from 'components/Molecules/ProfilePage/ProfileMenu/ProfileMenu';
import TopBackground from 'components/Molecules/ProfilePage/TopBackground/TopBackground';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from 'redux/reducers/userReducer';
import { sizes } from 'sizes';
import * as S from './Styled';
import _ from 'lodash';
import { auth } from 'redux/actions/user';
import { setShowRemoveFromSaleModal, setShowRemoveFromSaleSuccessModal } from 'redux/reducers/appReducer';
import MessageModal from 'components/Molecules/ProductPage/ThanksModal/ThanksModal';
import Loading from 'components/Loading/Loading';
import { getSellProducts, removeFromSale } from 'redux/actions/product';
import ProfileLayout from '../ProfileLayout/ProfileLayout';
const ProfileSellPage = () => {
  const [tabs, setTabs] = useState();
  const dispatch = useDispatch();
  const tabsNoCount = [
    {
      id: 1,
      name: 'Опубликовано',
      slug: 'publish',
    },
    { id: 0, name: 'На модерации', slug: 'moderate' },
    { id: 2, name: 'Снят с продажи', slug: 'removed' },
    { id: 3, name: 'Отклонено', slug: 'canceled' },
    { id: 4, name: 'Продано', slug: 'sold' },
  ];
  const {
    currentUser: { products_count, product_set, publish_count, moderate_count, remove_from_sale_count, canceled_count, sales_count, rejected_count },
    activeTab,
  } = useSelector((state) => state.user);
  const { currentUser } = useSelector((state) => state.user);
  const { getSellProductsData, getSellProductsLoading, currentPage } = useSelector((state) => state.product);
  useEffect(() => {
    if (currentUser) {
      const tabsWithCount = [...tabsNoCount];
      tabsWithCount[0].name = `${tabsWithCount[0].name} ${publish_count ?? 0}`;
      tabsWithCount[1].name = `${tabsWithCount[1].name} ${moderate_count ?? 0}`;
      tabsWithCount[2].name = `${tabsWithCount[2].name} ${remove_from_sale_count ?? 0}`;
      tabsWithCount[3].name = `${tabsWithCount[3].name} ${rejected_count ?? 0}`;
      tabsWithCount[4].name = `${tabsWithCount[4].name} ${sales_count ?? 0}`;
      setTabs(tabsWithCount);
      if (!activeTab || !tabs) {
        dispatch(setActiveTab(tabsWithCount[0]));
      }
    }
  }, [currentUser]);

  useEffect(() => {
    if (activeTab) {
      dispatch(getSellProducts(activeTab.id, 1));
    }
  }, [activeTab]);

  return (
    <ProfileLayout>
      {activeTab && tabs && (
        <ProfileContent
          products={getSellProductsData?.results}
          type={activeTab?.slug}
          tabs={tabs}
          title={`Товары на продажу:  ${products_count}`}
          loading={getSellProductsLoading}
          currentPage={currentPage}
          productsCount={getSellProductsData?.count}
          onPageClick={(val) => {
            dispatch(getSellProducts(activeTab?.id, val));
          }}
        />
      )}{' '}
    </ProfileLayout>
  );
};

export default ProfileSellPage;
