import { SET_CATEGORIES, SET_CATEGORY, SET_MAIN_CATEGORY, SET_PAGE_CATEGORY, SET_PAGE_CATEGORY_ERROR, SET_PAGE_CATEGORY_LOADING } from 'redux/types/categoriesTypes';

const defaultState = {
  categories: [],
  category: [],
  main_category: [null],
  pageCategoryLoading: false,
  pageCategoryError: null,
  pageCategory: null,
};

export default function categoriesReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case SET_CATEGORY:
      return { ...state, category: action.payload };
    case SET_MAIN_CATEGORY:
      return { ...state, main_category: action.payload };
    case SET_PAGE_CATEGORY:
      return { ...state, pageCategory: action.payload, pageCategoryLoading: false, pageCategoryError: null };
    case SET_PAGE_CATEGORY_LOADING:
      return { ...state, pageCategoryLoading: action.payload ? true : false, pageCategoryError: null };
    case SET_PAGE_CATEGORY_ERROR:
      return { ...state, pageCategoryError: action.payload, pageCategoryLoading: false };
    default:
      return state;
  }
}

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: category,
});

export const setMainCategory = (main_category) => ({
  type: SET_MAIN_CATEGORY,
  payload: main_category,
});

export const setPageCategory = (data) => ({
  type: SET_PAGE_CATEGORY,
  payload: data,
});
export const setPageCategoryLoading = (data) => ({
  type: SET_PAGE_CATEGORY_LOADING,
  payload: data,
});
export const setPageCategoryError = (data) => ({
  type: SET_PAGE_CATEGORY_ERROR,
  payload: data,
});
