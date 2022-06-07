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
import { removeFromSale } from 'redux/actions/product';
const ProfileSellPage = () => {
  const isMobile = useSelector((state) => state.app.isMobile);
  const [tabs, setTabs] = useState();
  const { showRemoveFromSaleModal, showRemoveFromSaleSuccessModal } = useSelector((state) => state.app);
  const { removeFromSaleLoading, removeFromSaleData } = useSelector((state) => state.product);
  const tabsNoCount = [
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

  const {
    currentUser: { product_set },
    activeTab,
  } = useSelector((state) => state.user);
  useEffect(() => {
    if (product_set) {
      const tabsWithCount = tabsNoCount.map((tab) => ({ ...tab, name: `${tab.name} ${product_set[tab.id]?.length ?? 0}` }));
      setTabs(tabsWithCount);
      if (!activeTab) {
        dispatch(setActiveTab(tabsWithCount[0]));
      }
    }
  }, [product_set]);
  useEffect(() => {
    dispatch(auth());
  }, []);
  useEffect(() => {
    if (removeFromSaleData) {
      dispatch(setShowRemoveFromSaleModal(false));
      dispatch(setShowRemoveFromSaleSuccessModal(true));
    }
  }, [removeFromSaleData]);

  return (
    <S.Wrapper>
      {!isMobile && <TopBackground />}

      <S.Container>
        {!isMobile && <ProfileMenu />}
        {activeTab && product_set && tabs && <ProfileContent products={product_set[activeTab?.id]} type={activeTab?.slug} tabs={tabs} title={`Товары на продажу:  ${_.sum(Object.values(product_set)?.map((item) => item.length))}`} />}
      </S.Container>
      <MessageModal
        open={showRemoveFromSaleModal}
        onClose={() => {
          dispatch(setShowRemoveFromSaleModal(false));
        }}
        title={'Вы уверены что хотите снять товар с продажи ?'}
        desc={'Товар будет снят с продажи. В дальнейшем вы сможете его вернуть.'}
        textFirstBtn={'Снять с продажи'}
        onClickSecondBtn={() => {
          dispatch(setShowRemoveFromSaleModal(false));
        }}
        onClickFirstBtn={() => {
          dispatch(removeFromSale());
        }}
        textSecondBtn={'Закрыть'}
      />
      <MessageModal
        open={showRemoveFromSaleSuccessModal}
        onClose={() => {
          dispatch(setShowRemoveFromSaleSuccessModal(false));
        }}
        title={'Товар снят с продажи'}
        textFirstBtn={'Отлично'}
        onClickFirstBtn={() => {
          dispatch(setShowRemoveFromSaleSuccessModal(false));
        }}
      />
      {removeFromSaleLoading && <Loading />}
    </S.Wrapper>
  );
};

export default ProfileSellPage;
