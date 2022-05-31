import { LOGOUT, SET_BUY_ITEMS, SET_SELL_ITEMS, SET_USER, SET_WISH_LIST, USER_ERROR, USER_LOADING, USER_RESET, USER_SUCCESS } from '../types/userTypes';

const defaultState = {
  currentUser: {},
  isAuth: localStorage.getItem('token') || false,
  data: null,
  error: null,
  loading: false,
  buyItems: [],
  sellItems: [],
  wishList: [],
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };

    case SET_BUY_ITEMS:
      return { ...state, buyItems: action.payload };

    case SET_SELL_ITEMS:
      return { ...state, sellItems: action.payload };

    case SET_WISH_LIST:
      return { ...state, wishList: action.payload };
    case USER_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case USER_LOADING:
      return { error: null, data: null, loading: true };
    case USER_ERROR:
      return { data: null, loading: false, error: action.payload };
    case USER_RESET:
      return { data: null, loading: false, error: null };
    default:
      return state;
  }
}

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const logout = () => ({ type: LOGOUT });

export const setBuyItems = (items) => ({ type: SET_BUY_ITEMS, payload: items });
export const setSellItems = (items) => ({
  type: SET_SELL_ITEMS,
  payload: items,
});
export const setWishList = (items) => ({ type: SET_WISH_LIST, payload: items });
export const userReset = () => ({
  type: USER_RESET,
});

export const userLoading = () => ({
  type: USER_LOADING,
});

export const userError = (data) => ({
  type: USER_ERROR,
  payload: data,
});
export const userSuccess = (data) => ({
  type: USER_SUCCESS,
  payload: data,
});
