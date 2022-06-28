import Loading from 'components/Loading/Loading';
import MessageModal from 'components/Molecules/ProductPage/ThanksModal/ThanksModal';
import ProfileMenu from 'components/Molecules/ProfilePage/ProfileMenu/ProfileMenu';
import TopBackground from 'components/Molecules/ProfilePage/TopBackground/TopBackground';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromSale, removeSoft } from 'redux/actions/product';
import { setShowRemoveFromSaleModal, setShowRemoveFromSaleSuccessModal, setShowRemoveModal, setShowRemoveSuccessModal } from 'redux/reducers/appReducer';
import { setActiveTab } from 'redux/reducers/userReducer';
import * as S from './Styled';
const ProfileLayout = ({ children }) => {
  const { showRemoveFromSaleModal, showRemoveFromSaleSuccessModal, showRemoveModal, showRemoveSuccessModal } = useSelector((state) => state.app);
  const { removeFromSaleLoading, removeFromSaleData, removeSoftLoading, removeSoftData } = useSelector((state) => state.product);

  const isMobile = useSelector((state) => state.app.isMobile);
  useEffect(() => {
    if (removeFromSaleData) {
      dispatch(setShowRemoveFromSaleModal(false));
      dispatch(setShowRemoveFromSaleSuccessModal(true));
      dispatch(setActiveTab({ id: 2, name: 'Снят с продажи', slug: 'removed' }));
    }
  }, [removeFromSaleData]);

  useEffect(() => {
    if (typeof removeSoftData == 'string') {
      dispatch(setShowRemoveModal(false));
      dispatch(setShowRemoveSuccessModal(true));
      // dispatch(resetRemoveSoft());
    }
  }, [removeSoftData]);

  const dispatch = useDispatch();
  return (
    <>
      <S.Wrapper>
        {!isMobile && <TopBackground />}

        <S.Container>
          {!isMobile && <ProfileMenu />}

          {children}
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
          open={showRemoveModal}
          onClose={() => {
            dispatch(setShowRemoveModal(false));
          }}
          title={'Вы уверены что хотите удалить товар ?'}
          desc={'Товар невозможно будет восстановить.'}
          textFirstBtn={'Удалить'}
          onClickSecondBtn={() => {
            dispatch(setShowRemoveModal(false));
          }}
          onClickFirstBtn={() => {
            dispatch(removeSoft());
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

        <MessageModal
          open={showRemoveSuccessModal}
          onClose={() => {
            dispatch(setShowRemoveSuccessModal(false));
          }}
          title={'Товар удален'}
          textFirstBtn={'Отлично'}
          onClickFirstBtn={() => {
            dispatch(setShowRemoveSuccessModal(false));
          }}
        />

        {(removeFromSaleLoading || removeSoftLoading) && <Loading />}
      </S.Wrapper>
    </>
  );
};

export default ProfileLayout;
