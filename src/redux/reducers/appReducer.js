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
  SET_SHOW_SELLER_THANKS_MODAL,
  SET_SHOW_SUBSCRIBE_THANKS_MODAL,
  SET_SHOW_SUBSCRIBE_ERROR_MODAL,
  SET_SHOW_REQUEST_THANKS_MODAL,
  SET_SHOW_REQUEST_ERROR_MODAL,
  SET_BREADCRUMBS,
  SET_SHOW_EDIT_USER_SUCCESS_MODAL,
  SET_SHOW_EDIT_USER_MODAL,
  SET_REMOVE_FROM_SALE_MODAL,
  SET_REMOVE_FROM_SALE_SUCCESS_MODAL,
  SET_REMOVE_SUCCESS_MODAL,
  SET_REMOVE_MODAL,
  SET_PHOTO_RECOMEND_MODAL,
  SET_CHANGE_PASS_MODAL,
  SET_CHANGE_PASS_SUCCESS_MODAL,
  SET_RESET_PASS_MODAL,
  SET_RESET_PASS_SUCCESS_MODAL,
  SET_RESALE_SUCCESS_MODAL,
  SET_RESALE_MODAL,
  SET_PUBLISH_MODAL,
  SET_PUBLISH_SUCCESS_MODAL,
  SET_ORDERING_ERROR,
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
  showSellerThanksModal: false,
  showSubscribeThanksModal: false,
  showSubscribeErrorModal: false,
  showRequestThanksModal: false,
  showRequestErrorModal: false,
  showEditUserSuccessModal: false,
  showEditUserModal: false,
  showRemoveFromSaleModal: false,
  showRemoveFromSaleSuccessModal: false,
  showRemoveModal: false,
  showRemoveSuccessModal: false,
  showPhotoRecomendModal: false,
  showChangePassModal: false,
  showChangePassSuccessModal: false,
  showResetPassModal: false,
  showResetPassSuccessModal: false,
  showResaleModal: false,
  showResaleSuccessModal: false,
  showPublishModal: false,
  showPublishSuccessModal: false,
  showOrderingError: false,
  breadcrumbs: [],
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
      return { ...state, showAuthModal: action.payload };
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
    case SET_SHOW_SELLER_THANKS_MODAL:
      return { ...state, showSellerThanksModal: action.payload, isDisableScroll: action.payload };
    case SET_SHOW_SUBSCRIBE_THANKS_MODAL:
      return { ...state, showSubscribeThanksModal: action.payload, isDisableScroll: action.payload };
    case SET_SHOW_SUBSCRIBE_ERROR_MODAL:
      return { ...state, showSubscribeErrorModal: action.payload, isDisableScroll: action.payload };

    case SET_SHOW_REQUEST_THANKS_MODAL:
      return { ...state, showRequestThanksModal: action.payload, isDisableScroll: action.payload };
    case SET_SHOW_REQUEST_ERROR_MODAL:
      return { ...state, showRequestErrorModal: action.payload, isDisableScroll: action.payload };
    case SET_SHOW_EDIT_USER_SUCCESS_MODAL:
      return { ...state, showEditUserSuccessModal: action.payload, isDisableScroll: action.payload, ...(action.payload === true && { showEditUserModal: false }) };
    case SET_SHOW_EDIT_USER_MODAL:
      return { ...state, showEditUserModal: action.payload, isDisableScroll: action.payload };
    case SET_BREADCRUMBS:
      return { ...state, breadcrumbs: action.payload };
    case SET_REMOVE_FROM_SALE_MODAL:
      return { ...state, showRemoveFromSaleModal: action.payload };
    case SET_REMOVE_FROM_SALE_SUCCESS_MODAL:
      return { ...state, showRemoveFromSaleSuccessModal: action.payload };
    case SET_REMOVE_MODAL:
      return { ...state, showRemoveModal: action.payload };
    case SET_REMOVE_SUCCESS_MODAL:
      return { ...state, showRemoveSuccessModal: action.payload };
    case SET_PHOTO_RECOMEND_MODAL:
      return { ...state, showPhotoRecomendModal: action.payload };
    case SET_CHANGE_PASS_MODAL:
      return { ...state, showChangePassModal: action.payload };
    case SET_CHANGE_PASS_SUCCESS_MODAL:
      return { ...state, showChangePassSuccessModal: action.payload };
    case SET_RESET_PASS_MODAL:
      return { ...state, showResetPassModal: action.payload };
    case SET_RESET_PASS_SUCCESS_MODAL:
      return { ...state, showResetPassSuccessModal: action.payload };
    case SET_RESALE_MODAL:
      return { ...state, showResaleModal: action.payload };
    case SET_RESALE_SUCCESS_MODAL:
      return { ...state, showResaleSuccessModal: action.payload };
    case SET_PUBLISH_MODAL:
      return { ...state, showPublishModal: action.payload };
    case SET_PUBLISH_SUCCESS_MODAL:
      return { ...state, showPublishSuccessModal: action.payload };
    case SET_ORDERING_ERROR:
      return { ...state, showOrderingError: action.payload };
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

export const setShowSellerThanksModal = (show) => ({
  type: SET_SHOW_SELLER_THANKS_MODAL,
  payload: show,
});

export const setShowSubscribeThanksModal = (show) => ({
  type: SET_SHOW_SUBSCRIBE_THANKS_MODAL,
  payload: show,
});
export const setShowSubscribeErrorModal = (show) => ({
  type: SET_SHOW_SUBSCRIBE_ERROR_MODAL,
  payload: show,
});

export const setShowRequestThanksModal = (show) => ({
  type: SET_SHOW_REQUEST_THANKS_MODAL,
  payload: show,
});
export const setShowRequestErrorModal = (show) => ({
  type: SET_SHOW_REQUEST_ERROR_MODAL,
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
export const setShowEditUserSuccessModal = (show) => ({
  type: SET_SHOW_EDIT_USER_SUCCESS_MODAL,
  payload: show,
});
export const setShowEditUserModal = (show) => ({
  type: SET_SHOW_EDIT_USER_MODAL,
  payload: show,
});
export const setShowMobileCartModal = (show) => ({
  type: SET_MOBILE_CART_MODAL,
  payload: show,
});
export const setBreadcrumbs = (breadcrumbs) => ({
  type: SET_BREADCRUMBS,
  payload: breadcrumbs,
});
export const setShowRemoveFromSaleModal = (id) => ({
  type: SET_REMOVE_FROM_SALE_MODAL,
  payload: id,
});

export const setShowRemoveModal = (id) => ({
  type: SET_REMOVE_MODAL,
  payload: id,
});

export const setShowRemoveSuccessModal = (id) => ({
  type: SET_REMOVE_SUCCESS_MODAL,
  payload: id,
});

export const setShowRemoveFromSaleSuccessModal = (data) => ({
  type: SET_REMOVE_FROM_SALE_SUCCESS_MODAL,
  payload: data,
});

export const setShowPhotoRecomendModal = (data) => ({
  type: SET_PHOTO_RECOMEND_MODAL,
  payload: data,
});
export const setShowChangePassModal = (data) => ({
  type: SET_CHANGE_PASS_MODAL,
  payload: data,
});
export const setShowChangePassSuccessModal = (data) => ({
  type: SET_CHANGE_PASS_SUCCESS_MODAL,
  payload: data,
});
export const setShowResetPassModal = (data) => ({
  type: SET_RESET_PASS_MODAL,
  payload: data,
});
export const setShowResetPassSuccessModal = (data) => ({
  type: SET_RESET_PASS_SUCCESS_MODAL,
  payload: data,
});
export const setShowResaleModal = (data) => ({
  type: SET_RESALE_MODAL,
  payload: data,
});
export const setShowResaleSuccessModal = (data) => ({
  type: SET_RESALE_SUCCESS_MODAL,
  payload: data,
});
export const setShowPublishModal = (data) => ({
  type: SET_PUBLISH_MODAL,
  payload: data,
});
export const setShowPublishSuccessModal = (data) => ({
  type: SET_PUBLISH_SUCCESS_MODAL,
  payload: data,
});
export const setShowOrderingError = (data) => ({
  type: SET_ORDERING_ERROR,
  payload: data,
});
