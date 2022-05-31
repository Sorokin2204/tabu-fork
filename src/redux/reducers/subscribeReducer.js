import { SET_CATEGORIES, SET_SEARCH_PRODUCTS, SET_SHOW_SEARCH } from 'redux/types/searchTypes';
import { SUBSCRIBE_ERROR, SUBSCRIBE_LOADING, SUBSCRIBE_SUCCESS } from 'redux/types/subscribeTypes';

const defaultState = {
  data: null,
  loading: false,
  error: null,
};

export default function subscribeReducer(state = defaultState, action) {
  switch (action.type) {
    case SUBSCRIBE_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case SUBSCRIBE_LOADING:
      return { error: null, data: null, loading: true };
    case SUBSCRIBE_ERROR:
      return { data: null, loading: false, error: action.payload };
    default:
      return state;
  }
}

export const subscribeLoading = () => ({
  type: SUBSCRIBE_LOADING,
});

export const subscribeError = (data) => ({
  type: SUBSCRIBE_ERROR,
  payload: data,
});
export const subscribeSuccess = (data) => ({
  type: SUBSCRIBE_SUCCESS,
  payload: data,
});
