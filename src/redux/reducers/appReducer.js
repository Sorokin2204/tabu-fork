import {
  SHOW_HOVER_MENU,
  HIDE_HOVER_MENU,
  SHOW_PROFILE,
  HIDE_PROFILE,
  SHOW_MOBILE_SIDEBAR,
  HIDE_MOBILE_SIDEBAR,
  SET_MENU_CATEGORY,
  SET_SHOW_SIZES_MODAL,
  SET_SHOW_REG_MODAL,
  SET_SHOW_AUTH_MODAL,
  SET_SHOW_REQUEST_MODAL,
  SET_IS_MOBILE,
  SET_IS_DISABLE_SCROLL,
  SET_MOBILE_FILTER_MODAL,
  SET_MOBILE_SORT_MODAL,
  SET_MOBILE_CART_MODAL,
  SET_SHOW_LOGOUT_MODAL,
} from '../types/appTypes';

const defaultState = {
  showHoverMenu: false,
  showProfile: false,
  isMobile: false,
  showMobileSidebar: false,
  menuCategory: {
    active: false,
  },
  showSizesModal: false,
  showRegModal: false,
  showAuthModal: false,
  showLogoutModal: false,
  showRequestModal: false,
  showMobileSortModal: false,
  showMobileFilterModal: false,
  isDisableScroll: false,
  showMobileCartModal: false,
};

export default function productReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_HOVER_MENU:
      return { ...state, showHoverMenu: true, isDisableScroll: true };
    case HIDE_HOVER_MENU:
      return { ...state, showHoverMenu: false, isDisableScroll: false };

    case SHOW_PROFILE:
      return { ...state, showProfile: true };
    case HIDE_PROFILE:
      return { ...state, showProfile: false };

    case SHOW_MOBILE_SIDEBAR:
      return { ...state, showMobileSidebar: true, isDisableScroll: true };
    case HIDE_MOBILE_SIDEBAR:
      return { ...state, showMobileSidebar: false, isDisableScroll: false };

    case SET_MENU_CATEGORY:
      return { ...state, menuCategory: action.payload };

    case SET_SHOW_SIZES_MODAL:
      return { ...state, showSizesModal: action.payload, isDisableScroll: action.payload };

    case SET_SHOW_REG_MODAL:
      return { ...state, showRegModal: action.payload, isDisableScroll: action.payload };

    case SET_SHOW_AUTH_MODAL:
      return { ...state, showAuthModal: action.payload, isDisableScroll: action.payload };
    case SET_SHOW_LOGOUT_MODAL:
      return { ...state, showLogoutModal: action.payload, isDisableScroll: action.payload };
    case SET_SHOW_REQUEST_MODAL:
      return { ...state, showRequestModal: action.payload, isDisableScroll: action.payload };

    case SET_IS_MOBILE:
      return { ...state, isMobile: action.payload };
    case SET_IS_DISABLE_SCROLL:
      return { ...state, isDisableScroll: action.payload };
    case SET_MOBILE_FILTER_MODAL:
      return { ...state, showMobileFilterModal: action.payload, isDisableScroll: action.payload };
    case SET_MOBILE_SORT_MODAL:
      return { ...state, showMobileSortModal: action.payload, isDisableScroll: action.payload };
    case SET_MOBILE_CART_MODAL:
      return { ...state, showMobileCartModal: action.payload, isDisableScroll: action.payload };
    default:
      return state;
  }
}

export const showHoverMenu = () => ({
  type: SHOW_HOVER_MENU,
});
export const hideHoverMenu = () => ({ type: HIDE_HOVER_MENU });

export const showProfile = () => ({ type: SHOW_PROFILE });
export const hideProfile = () => ({ type: HIDE_PROFILE });

export const showMobileSidebar = () => ({ type: SHOW_MOBILE_SIDEBAR });
export const hideMobileSidebar = () => ({ type: HIDE_MOBILE_SIDEBAR });

export const setMenuCategory = (menuCategory) => ({
  type: SET_MENU_CATEGORY,
  payload: menuCategory,
});

export const setIsMobile = (isMobile) => ({
  type: SET_IS_MOBILE,
  payload: isMobile,
});
export const setIsDisableScroll = (isDisableScroll) => ({
  type: SET_IS_DISABLE_SCROLL,
  payload: isDisableScroll,
});

export const setShowSizesModal = (active) => ({
  type: SET_SHOW_SIZES_MODAL,
  payload: active,
});

export const setShowAuthModal = (show) => ({
  type: SET_SHOW_AUTH_MODAL,
  payload: show,
});

export const setShowLogoutModal = (show) => ({
  type: SET_SHOW_LOGOUT_MODAL,
  payload: show,
});

export const setShowRegModal = (show) => ({
  type: SET_SHOW_REG_MODAL,
  payload: show,
});

export const setShowRequestModal = (show) => ({
  type: SET_SHOW_REQUEST_MODAL,
  payload: show,
});
export const setShowMobileFilterModal = (show) => ({
  type: SET_MOBILE_FILTER_MODAL,
  payload: show,
});
export const setShowMobileSortModal = (show) => ({
  type: SET_MOBILE_SORT_MODAL,
  payload: show,
});
export const setShowMobileCartModal = (show) => ({
  type: SET_MOBILE_CART_MODAL,
  payload: show,
});
