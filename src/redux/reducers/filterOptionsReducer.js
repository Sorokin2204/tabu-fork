import { API_URL } from 'config';
import { SET_BRAND_OPTIONS, SET_COLOR_OPTIONS, SET_SIZE_OPTIONS, SET_QUERY, SET_CONDITION_OPTIONS, SET_MATERIAL_OPTIONS, SET_CATEGORY_OPTIONS, SET_TYPE_SORT, RESET_FILTERS, SET_TYPE_SIZE, SET_PRICE_RANGE, SET_BRAND_LOADING, SET_BRAND_PARAMS } from '../types/filterOptionsTypes';

const defaultState = {
  categoryOptions: [],
  brandOptions: [],
  colorOptions: [],
  sizeOptions: [],
  materialOptions: [],
  brandOptionsLoading: false,
  brandParams: [],
  conditionOptions: [
    { label: 'Новое, с биркой', value: 0 },
    { label: 'Отличное состояние', value: 1 },
    { label: 'Хорошее состояние', value: 2 },
  ],
  typeSize: -1,
  priceRange: {},
  query: `${API_URL}/products`,
  typeSort: { name: 'Сначала новые', slug: '-created_at' },
};

export default function filterOptionsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_BRAND_OPTIONS:
      return { ...state, brandOptions: action.payload, brandOptionsLoading: false };

    case SET_COLOR_OPTIONS:
      return { ...state, colorOptions: action.payload };

    case SET_BRAND_LOADING:
      return { ...state, brandOptionsLoading: true };
    case SET_SIZE_OPTIONS:
      return { ...state, sizeOptions: action.payload };

    case SET_CONDITION_OPTIONS:
      return { ...state, conditionOptions: action.payload };

    case SET_MATERIAL_OPTIONS:
      return { ...state, materialOptions: action.payload };

    case SET_CATEGORY_OPTIONS:
      return { ...state, categoryOptions: action.payload };
    case SET_PRICE_RANGE:
      return { ...state, priceRange: action.payload };
    case SET_QUERY:
      return { ...state, query: action.payload };
    case SET_TYPE_SIZE:
      return { ...state, typeSize: action.payload };
    case SET_TYPE_SORT:
      return { ...state, typeSort: action.payload };
    case SET_BRAND_PARAMS:
      return { ...state, brandParams: action.payload };
    case RESET_FILTERS:
      return {
        ...state,
        categoryOptions: state.categoryOptions.map((cat) => ({ ...cat, selected: false })),
        colorOptions: state.colorOptions.map((color) => ({ ...color, selected: false })),
        brandOptions: state.brandOptions.map((brand) => ({ ...brand, selected: false })),
        sizeOptions: state.sizeOptions.map((size) => ({ ...size, selected: false })),
        materialOptions: state.materialOptions.map((material) => ({ ...material, selected: false })),
        typeSort: { name: 'Сначала новые', slug: '-created_at' },
      };
    default:
      return state;
  }
}

export const setBrandOptionsLoading = (brand) => ({
  type: SET_BRAND_LOADING,
  payload: brand,
});
export const setBrandOptions = (brand) => ({
  type: SET_BRAND_OPTIONS,
  payload: brand,
});

export const setColorOptions = (color) => ({
  type: SET_COLOR_OPTIONS,
  payload: color,
});

export const setSizeOptions = (sizes) => ({
  type: SET_SIZE_OPTIONS,
  payload: sizes,
});

export const setConditionOptions = (condition) => ({
  type: SET_CONDITION_OPTIONS,
  payload: condition,
});

export const setMaterialOptions = (material) => ({
  type: SET_MATERIAL_OPTIONS,
  payload: material,
});

export const setCategoryOptions = (categories) => ({
  type: SET_CATEGORY_OPTIONS,
  payload: categories,
});
export const setTypeSort = (sort) => ({
  type: SET_TYPE_SORT,
  payload: sort,
});
export const setTypeSize = (size) => ({
  type: SET_TYPE_SIZE,
  payload: size,
});
export const setQuery = (newQuery) => ({
  type: SET_QUERY,
  payload: newQuery,
});
export const resetFilters = () => ({
  type: RESET_FILTERS,
});
export const setPriceRange = (newQuery) => ({
  type: SET_PRICE_RANGE,
  payload: newQuery,
});
export const setBrandParams = (newQuery) => ({
  type: SET_BRAND_PARAMS,
  payload: newQuery,
});
