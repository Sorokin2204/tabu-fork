import { SET_CART_PRODUCTS } from "../types/cartTypes";

const defaultState = {
  cartProducts: [],
};

export default function cartReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CART_PRODUCTS:
      return { ...state, cartProducts: action.payload };

    default:
      return state;
  }
}

export const setCartProducts = (products) => ({
  type: SET_CART_PRODUCTS,
  payload: products,
});
