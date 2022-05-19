import {
  SHOW_MODAL,
  HIDE_MODAL,
  SET_PRODUCTS,
  SET_OPENED_PRODUCT,
  SET_SHARE_PRODUCT,
  SET_SIZES, SET_NEW_PRODUCTS, SET_TRENDS,
} from "redux/types/productTypes";

const defaultState = {
  showModal: false,
  openedProduct: {},
  products: [],
  shareProduct: {
    link: "",
    showShare: false,
  },
  newProducts: [],
  trends: [],
  sizes: [],
};

export default function productReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, showModal: true };

    case HIDE_MODAL:
      return { ...state, showModal: false };

    case SET_PRODUCTS:
      return { ...state, products: action.payload };

    case SET_OPENED_PRODUCT:
      return { ...state, openedProduct: action.payload };

    case SET_SHARE_PRODUCT:
      return { ...state, shareProduct: action.payload };

    case SET_SIZES:
      return { ...state, sizes: action.payload };

    case SET_NEW_PRODUCTS:
      return { ...state, newProducts: action.payload };

    case SET_TRENDS:
      return { ...state, trends: action.payload };

    default:
      return state;
  }
}

export const showModal = () => ({ type: SHOW_MODAL });
export const hideModal = () => ({ type: HIDE_MODAL });

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setOpenedProduct = (product) => ({
  type: SET_OPENED_PRODUCT,
  payload: product,
});

export const setShareProduct = (product) => ({
  type: SET_SHARE_PRODUCT,
  payload: product,
});

export const setSizes = (sizes) => ({
  type: SET_SIZES,
  payload: sizes,
});

export const setNewProducts = (products) => ({
  type: SET_NEW_PRODUCTS,
  payload: products,
});

export const setTrends = (trends) => ({
  type: SET_TRENDS,
  payload: trends,
});
