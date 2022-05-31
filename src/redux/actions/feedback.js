import axios from 'axios';
import { API_URL } from 'config';
import { setIsDisableScroll, setShowFeedbackErrorModal, setShowRequestErrorModal, setShowRequestModal, setShowRequestThanksModal } from 'redux/reducers/appReducer';

import { feedbackError, feedbackLoading, feedbackSuccess } from 'redux/reducers/feedbackReducer';

export const postFeedback = (data) => {
  return async (dispatch) => {
    try {
      dispatch(feedbackLoading());
      dispatch(setIsDisableScroll(true));

      axios
        .post(`${API_URL}/main/vip_request/`, data)
        .then((response) => {
          dispatch(feedbackSuccess(response.data));
          dispatch(setShowRequestModal(false));
          dispatch(setShowRequestThanksModal(true));
        })
        .catch((error) => {
          const errorMessage = error?.response?.data?.email?.[0];
          dispatch(feedbackError(errorMessage ? { title: errorMessage, desc: 'Попробуйте ввести другую почту' } : { title: 'Извините, произошла неожидонная ошибка', desc: 'Повторите позже' }));
          dispatch(setShowRequestErrorModal(true));
        });
    } catch (e) {
      dispatch(feedbackError(e));
      dispatch(setShowRequestErrorModal(true));
    }
  };
};
