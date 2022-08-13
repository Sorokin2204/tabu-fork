import Loading from 'components/Loading/Loading';
import MessageModal from 'components/Molecules/ProductPage/ThanksModal/ThanksModal';
import ProfileMenu from 'components/Molecules/ProfilePage/ProfileMenu/ProfileMenu';
import TopBackground from 'components/Molecules/ProfilePage/TopBackground/TopBackground';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { publish, removeFromSale, removeSoft, resale } from 'redux/actions/product';
import { getUser } from 'redux/actions/user';
import { setShowPublishModal, setShowPublishSuccessModal, setShowRemoveFromSaleModal, setShowRemoveFromSaleSuccessModal, setShowRemoveModal, setShowRemoveSuccessModal, setShowResaleModal, setShowResaleSuccessModal } from 'redux/reducers/appReducer';
import { resetPublish, resetRemoveFromSale, resetRemoveSoft, resetResale } from 'redux/reducers/productReducer';
import { setActiveTab } from 'redux/reducers/userReducer';
import * as S from './Styled';
const ProfileLayout = ({ children, onlyProfile }) => {
  const { showRemoveFromSaleModal, showRemoveFromSaleSuccessModal, showRemoveModal, showRemoveSuccessModal, showResaleModal, showResaleSuccessModal, showPublishModal, showPublishSuccessModal } = useSelector((state) => state.app);
  const { removeFromSaleLoading, removeFromSaleData, removeSoftLoading, removeSoftData, publishData, publishLoading, resaleData, resaleLoading } = useSelector((state) => state.product);
  const { activeTab } = useSelector((state) => state.user);
  const isMobile = useSelector((state) => state.app.isMobile);

  useEffect(() => {
    if (resaleData) {
      dispatch(setShowResaleModal(false));
      dispatch(setShowResaleSuccessModal(true));
      dispatch(resetResale());
      dispatch(setActiveTab({ id: 2, name: 'Доставлено', slug: 'delivered' }));
      dispatch(getUser());
    }
  }, [resaleData]);

  useEffect(() => {
    if (removeFromSaleData) {
      dispatch(setShowRemoveFromSaleModal(false));
      dispatch(setShowRemoveFromSaleSuccessModal(true));
      dispatch(resetRemoveFromSale());
      dispatch(setActiveTab({ id: 2, name: 'Снят с продажи', slug: 'removed' }));
      dispatch(getUser());
    }
  }, [removeFromSaleData]);

  useEffect(() => {
    if (publishData) {
      dispatch(setShowPublishModal(false));
      dispatch(setShowPublishSuccessModal(true));
      dispatch(resetPublish());
      dispatch(setActiveTab({ id: 0, name: 'На модерации', slug: 'moderate' }));
      dispatch(getUser());
    }
  }, [publishData]);
  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    if (removeSoftData) {
      dispatch(setShowRemoveModal(false));
      dispatch(setShowRemoveSuccessModal(true));
      dispatch(resetRemoveSoft());
      dispatch(getUser());
      dispatch(setActiveTab({ ...activeTab }));
    }
  }, [removeSoftData]);

  const dispatch = useDispatch();
  return (
    <>
      <S.Wrapper>
        {(!isMobile || onlyProfile) && <TopBackground />}

        <S.Container>
          {(!isMobile || onlyProfile) && <ProfileMenu />}

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
          open={showResaleModal}
          onClose={() => {
            dispatch(setShowResaleModal(false));
          }}
          title={'Вы хотите выставить товар на продажу ?'}
          desc={'Товар появится на модерации.'}
          textFirstBtn={'Опубликовать'}
          onClickSecondBtn={() => {
            dispatch(setShowResaleModal(false));
          }}
          onClickFirstBtn={() => {
            dispatch(resale());
          }}
          textSecondBtn={'Закрыть'}
        />

        <MessageModal
          open={showResaleSuccessModal}
          onClose={() => {
            dispatch(setShowResaleSuccessModal(false));
          }}
          title={'Товар успешно отправлен на проверку'}
          textFirstBtn={'Отлично'}
          onClickFirstBtn={() => {
            dispatch(setShowResaleSuccessModal(false));
          }}
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
          open={showPublishModal}
          onClose={() => {
            dispatch(setShowPublishModal(false));
          }}
          title={'Вы уверены что хотите опубликовать товар ?'}
          textFirstBtn={'Опубликовать'}
          onClickSecondBtn={() => {
            dispatch(setShowPublishModal(false));
          }}
          onClickFirstBtn={() => {
            dispatch(publish());
          }}
          textSecondBtn={'Закрыть'}
        />

        <MessageModal
          open={showPublishSuccessModal}
          onClose={() => {
            dispatch(setShowPublishSuccessModal(false));
          }}
          title={'Товар отправлен на модерацию'}
          textFirstBtn={'Отлично'}
          onClickFirstBtn={() => {
            dispatch(setShowPublishSuccessModal(false));
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

        {(removeFromSaleLoading || removeSoftLoading || publishLoading || resaleLoading) && <Loading />}
      </S.Wrapper>
    </>
  );
};

export default ProfileLayout;
