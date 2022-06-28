import {
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_LOADING,
  CHANGE_PASSWORD_SUCCESS,
  EDIT_USER_ERROR,
  EDIT_USER_LOADING,
  EDIT_USER_SUCCESS,
  LOGOUT,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_LOADING,
  RESET_PASSWORD_SUCCESS,
  SET_ACTIVE_TAB,
  SET_BUY_ITEMS,
  SET_IS_AUTH,
  SET_SELL_ITEMS,
  SET_USER,
  SET_WISH_LIST,
  USER_ERROR,
  USER_LOADING,
  USER_RESET,
  USER_SUCCESS,
} from '../types/userTypes';

const defaultState = {
  currentUser: {
    published_count: 1,
    moderate_count: 2,
    remove_from_sale_count: 3,
    canceled_count: 4,
    sales_count: 5,
  },
  isAuth: false,
  data: null,
  error: null,
  loading: false,
  buyItems: [],
  sellItems: [],
  wishList: [],
  activeTab: null,
  editUserError: null,
  editUserLoading: false,
  editUserData: null,
  changePasswordError: null,
  changePasswordLoading: false,
  changePasswordData: null,
  resetPasswordError: null,
  resetPasswordLoading: false,
  resetPasswordData: null,
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: { ...state.currentUser, ...action.payload },
        isAuth: true,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };
    case SET_IS_AUTH:
      return { ...state, isAuth: action.payload };
    case SET_BUY_ITEMS:
      return { ...state, buyItems: action.payload };

    case SET_SELL_ITEMS:
      return { ...state, sellItems: action.payload };

    case SET_WISH_LIST:
      return { ...state, wishList: action.payload };
    case USER_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };
    case USER_LOADING:
      return { ...state, error: null, data: null, loading: true };
    case USER_ERROR:
      return { ...state, data: null, loading: false, error: action.payload };
    case USER_RESET:
      return { ...state, data: null, loading: false, error: null };
    case EDIT_USER_ERROR:
      return { ...state, editUserError: action.payload, editUserLoading: false, editUserData: null };
    case EDIT_USER_SUCCESS:
      return { ...state, editUserError: null, editUserLoading: false, editUserData: action.payload };
    case EDIT_USER_LOADING:
      return { ...state, editUserLoading: true };
    case CHANGE_PASSWORD_ERROR:
      return { ...state, changePasswordError: action.payload, changePasswordLoading: false, changePasswordData: null };
    case CHANGE_PASSWORD_SUCCESS:
      return { ...state, changePasswordError: null, changePasswordLoading: false, changePasswordData: action.payload };
    case CHANGE_PASSWORD_LOADING:
      return { ...state, changePasswordLoading: true };
    case RESET_PASSWORD_ERROR:
      return { ...state, resetPasswordError: action.payload, resetPasswordLoading: false, resetPasswordData: null };
    case RESET_PASSWORD_SUCCESS:
      return { ...state, resetPasswordError: null, resetPasswordLoading: false, resetPasswordData: action.payload };
    case RESET_PASSWORD_LOADING:
      return { ...state, resetPasswordLoading: true };

    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.payload };
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
export const editUserSuccess = (data) => ({
  type: EDIT_USER_SUCCESS,
  payload: data,
});
export const editUserError = (data) => ({
  type: EDIT_USER_ERROR,
  payload: data,
});
export const editUserLoading = (data) => ({
  type: EDIT_USER_LOADING,
  payload: data,
});

export const changePasswordSuccess = (data) => ({
  type: CHANGE_PASSWORD_SUCCESS,
  payload: data,
});
export const changePasswordError = (data) => ({
  type: CHANGE_PASSWORD_ERROR,
  payload: data,
});
export const changePasswordLoading = (data) => ({
  type: CHANGE_PASSWORD_LOADING,
  payload: data,
});

export const setActiveTab = (data) => ({
  type: SET_ACTIVE_TAB,
  payload: data,
});
export const setIsAuth = (data) => ({
  type: SET_IS_AUTH,
  payload: data,
});

export const resetPasswordSuccess = (data) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: data,
});
export const resetPasswordError = (data) => ({
  type: RESET_PASSWORD_ERROR,
  payload: data,
});
export const resetPasswordLoading = (data) => ({
  type: RESET_PASSWORD_LOADING,
  payload: data,
});
