import {
  LOGOUT,
  SET_BUY_ITEMS,
  SET_SELL_ITEMS,
  SET_USER,
  SET_WISH_LIST,
} from "../types/userTypes";

const defaultState = {
  currentUser: {},
  isAuth: localStorage.getItem("token") || false,
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
      localStorage.removeItem("token");
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
