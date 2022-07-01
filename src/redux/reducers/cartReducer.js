import { ORDERING_ERROR, ORDERING_LOADING, ORDERING_SUCCESS, SET_CART_LOCAL, SET_CART_PRODUCTS, SET_CART_PRODUCTS_ERROR, SET_CART_PRODUCTS_LOADING, SET_CART_TOTAL } from '../types/cartTypes';

const defaultState = {
  cartProducts: [],
  cartProductsLoading: false,
  cartProductsError: null,
  orderingSuccess: null,
  orderingLoading: false,
  orderingError: null,
  cartLocal: [],
  cartTotal: 0,
};

export default function cartReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CART_LOCAL:
      return { ...state, cartLocal: action.payload };
    case SET_CART_PRODUCTS:
      return { ...state, cartProducts: action.payload, cartProductsLoading: false, cartProductsError: null };
    case SET_CART_PRODUCTS_LOADING:
      return { ...state, cartProductsLoading: true };
    case SET_CART_PRODUCTS_ERROR:
      return { ...state, cartProductsLoading: false, cartProductsError: action.payload };
    case SET_CART_TOTAL:
      return { ...state, cartTotal: action.payload };
    case ORDERING_SUCCESS:
      return { ...state, orderingSuccess: action.payload, orderingLoading: false };
    case ORDERING_LOADING:
      return { ...state, orderingLoading: true };
    case ORDERING_ERROR:
      return { ...state, orderingError: action.payload, orderingLoading: false };
    default:
      return state;
  }
}

export const setCartProducts = (products) => ({
  type: SET_CART_PRODUCTS,
  payload: products,
});
export const setCartProductsLoading = (products) => ({
  type: SET_CART_PRODUCTS_LOADING,
  payload: products,
});
export const setCartProductsError = (products) => ({
  type: SET_CART_PRODUCTS_ERROR,
  payload: products,
});
export const setCartTotal = (data) => ({
  type: SET_CART_TOTAL,
  payload: data,
});
export const orderingSuccess = (data) => ({
  type: ORDERING_SUCCESS,
  payload: data,
});
export const orderingLoading = (data) => ({
  type: ORDERING_LOADING,
  payload: data,
});
export const orderingError = (data) => ({
  type: ORDERING_ERROR,
  payload: data,
});
