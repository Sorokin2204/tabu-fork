import { SEARCH_RESET, SET_ACTIVE_CATEGORY, SET_CATEGORIES, SET_SEARCH_CATEGORIES, SET_SEARCH_PRODUCTS, SET_SEARCH_TEXT, SET_SHOW_SEARCH } from 'redux/types/searchTypes';

const defaultState = {
  products: [],
  categories: [],
  searchCategories: [],
  show: false,
  activeCategory: null,
  searchText: '',
};

export default function searchReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_SEARCH_PRODUCTS:
      return { ...state, products: action.payload };

    case SET_CATEGORIES:
      return { ...state, categories: action.payload };

    case SET_SHOW_SEARCH:
      return { ...state, show: action.payload };
    case SET_ACTIVE_CATEGORY:
      return { ...state, activeCategory: action.payload };
    case SET_SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    case SEARCH_RESET:
      return { ...state, searchCategories: [], show: false, activeCategory: null, searchText: '' };
    case SET_SEARCH_CATEGORIES: {
      const { searchText, subCategories } = action.payload;
      const allCategories = subCategories.map((subCat) => {
        const { children, ...subCategory } = subCat;
        return [...children, { ...subCategory }];
      });
      const concatCategories = [].concat(...allCategories);
      const filterCategoires = concatCategories.filter((cat) => cat?.title.toLowerCase().includes(searchText.toLowerCase()));
      return { ...state, searchCategories: filterCategoires };
    }
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

export const searchCategories = (data) => ({
  type: SET_SEARCH_CATEGORIES,
  payload: data,
});

export const setShowSearch = (show) => ({
  type: SET_SHOW_SEARCH,
  payload: show,
});
export const setActiveCategory = (category) => ({
  type: SET_ACTIVE_CATEGORY,
  payload: category,
});
export const setSearchText = (searchText) => ({
  type: SET_SEARCH_TEXT,
  payload: searchText,
});
export const searchReset = () => ({
  type: SEARCH_RESET,
});
