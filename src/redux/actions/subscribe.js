import axios from 'axios';
import { API_URL } from 'config';
import { setIsDisableScroll, setShowSubscribeErrorModal, setShowSubscribeThanksModal } from 'redux/reducers/appReducer';
import { setCategories, setSearchProducts } from 'redux/reducers/searchReducer';
import { subscribeError, subscribeLoading, subscribeSuccess } from 'redux/reducers/subscribeReducer';
import { fbqSubscripbe } from 'utils/fbPixel';

export const postSubscribe = (data) => {
  return async (dispatch) => {
    try {
      dispatch(subscribeLoading());
      dispatch(setIsDisableScroll(true));

      axios
        .post(`${API_URL}/main/subscribe/`, data)
        .then((response) => {
          dispatch(subscribeSuccess(response.data));
          dispatch(setShowSubscribeThanksModal(true));
          fbqSubscripbe();
        })
        .catch((error) => {
          const errorMessage = error?.response?.data?.email?.[0];
          dispatch(subscribeError(errorMessage ? { title: errorMessage, desc: 'Попробуйте ввести другую почту' } : { title: 'Извините, произошла неожиданная ошибка', desc: 'Повторите позже' }));
          dispatch(setShowSubscribeErrorModal(true));
        });
    } catch (e) {
      dispatch(subscribeError(e));
      dispatch(setShowSubscribeErrorModal(true));
    }
  };
};
