import { SET_CATEGORIES, SET_SEARCH_PRODUCTS, SET_SHOW_SEARCH } from 'redux/types/searchTypes';
import { FEEDBACK_ERROR, FEEDBACK_LOADING, FEEDBACK_SUCCESS } from 'redux/types/feedbackTypes';

const defaultState = {
  data: null,
  loading: false,
  error: null,
};

export default function feedbackReducer(state = defaultState, action) {
  switch (action.type) {
    case FEEDBACK_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case FEEDBACK_LOADING:
      return { error: null, data: null, loading: true };
    case FEEDBACK_ERROR:
      return { data: null, loading: false, error: action.payload };
    default:
      return state;
  }
}

export const feedbackLoading = () => ({
  type: FEEDBACK_LOADING,
});

export const feedbackError = (data) => ({
  type: FEEDBACK_ERROR,
  payload: data,
});
export const feedbackSuccess = (data) => ({
  type: FEEDBACK_SUCCESS,
  payload: data,
});
