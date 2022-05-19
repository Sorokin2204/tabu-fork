import {
  SET_CATEGORIES,
  SET_SEARCH_PRODUCTS,
  SET_SHOW_SEARCH,
} from "redux/types/searchTypes";

const defaultState = {
  products: [],
  categories: [],
  show: false,
};

export default function searchReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_SEARCH_PRODUCTS:
      return { ...state, products: action.payload };

    case SET_CATEGORIES:
      return { ...state, categories: action.payload };

    case SET_SHOW_SEARCH:
      return { ...state, show: action.payload };

    default:
      return state;
  }
}

export const setSearchProducts = (products) => ({
  type: SET_SEARCH_PRODUCTS,
  payload: products,
});

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setShowSearch = (show) => ({
  type: SET_SHOW_SEARCH,
  payload: show,
});
