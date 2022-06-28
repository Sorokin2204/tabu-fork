import React from 'react';
import MessageModal from 'components/Molecules/ProductPage/ThanksModal/ThanksModal';
import { setShowChangePassSuccessModal, setShowResetPassSuccessModal } from 'redux/reducers/appReducer';
import { useDispatch, useSelector } from 'react-redux';
const ResetPassSuccessModal = () => {
  const { showResetPassSuccessModal } = useSelector((state) => state.app);
  const dispath = useDispatch();
  return (
    <>
      <MessageModal open={showResetPassSuccessModal} onClose={() => dispath(setShowResetPassSuccessModal(false))} title={'Пароль успешно сброшен'} desc={'На вашу почту отправлен новый пароль'} textFirstBtn={'Отлично'} onClickFirstBtn={() => dispath(setShowResetPassSuccessModal(false))} />
    </>
  );
};

export default ResetPassSuccessModal;
