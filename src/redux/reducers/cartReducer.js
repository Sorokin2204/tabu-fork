import { SET_CART_LOCAL, SET_CART_PRODUCTS, SET_CART_PRODUCTS_ERROR, SET_CART_PRODUCTS_LOADING, SET_CART_TOTAL } from '../types/cartTypes';

const defaultState = {
  cartProducts: [],
  cartProductsLoading: false,
  cartProductsError: null,
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
