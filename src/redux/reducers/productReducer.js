import {
  SHOW_MODAL,
  HIDE_MODAL,
  SET_PRODUCTS,
  SET_OPENED_PRODUCT,
  SET_SHARE_PRODUCT,
  SET_SIZES,
  SET_NEW_PRODUCTS,
  SET_TRENDS,
  SET_PRODUCTS_ERROR,
  SET_PRODUCTS_LOADING,
  UPLOAD_IMAGES_LOADING,
  UPLOAD_IMAGES_ERROR,
  UPLOAD_IMAGES_SUCCESS,
  UPLOAD_DETAILS_LOADING,
  UPLOAD_DETAILS_ERROR,
  UPLOAD_DETAILS_SUCCESS,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_SUCCESS,
  ADD_FAVORITE_SUCCESS,
  ADD_FAVORITE_ERROR,
  ADD_FAVORITE_LOADING,
  RESET_ADD_PRODUCTS,
} from 'redux/types/productTypes';

const defaultState = {
  showModal: false,
  openedProduct: {},
  products: [],
  productsLoading: false,
  productsError: false,
  shareProduct: {
    link: '',
    showShare: false,
  },
  newProducts: [],
  trends: [],
  sizes: [],
  uploadImagesData: null,
  uploadImagesLoading: false,
  uploadImagesError: null,
  uploadDetailsData: null,
  uploadDetailsLoading: false,
  uploadDetailsError: null,
  addProductData: null,
  addProductLoading: false,
  addProductError: null,
  addFavoriteData: null,
  addFavoriteLoading: false,
  addFavoriteError: null,
};

export default function productReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, showModal: true };

    case HIDE_MODAL:
      return { ...state, showModal: false };

    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_PRODUCTS_LOADING:
      return { ...state, productsLoading: action.payload };
    case SET_PRODUCTS_ERROR:
      return { ...state, productsError: action.payload };

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
    case UPLOAD_IMAGES_LOADING:
      return { ...state, uploadImagesLoading: true };
    case UPLOAD_IMAGES_ERROR:
      return { ...state, uploadImagesData: null, uploadImagesError: action.payload, uploadImagesLoading: false };
    case UPLOAD_IMAGES_SUCCESS:
      return { ...state, uploadImagesData: action.payload, uploadImagesError: null, uploadImagesLoading: false };
    case UPLOAD_DETAILS_LOADING:
      return { ...state, uploadDetailsLoading: true };
    case UPLOAD_DETAILS_ERROR:
      return { ...state, uploadDetailsData: null, uploadDetailsError: action.payload, uploadDetailsLoading: false };
    case UPLOAD_DETAILS_SUCCESS:
      return { ...state, uploadDetailsData: action.payload, uploadDetailsError: null, uploadDetailsLoading: false };
    case ADD_PRODUCT_LOADING:
      return { ...state, addProductLoading: true };
    case ADD_PRODUCT_ERROR:
      return { ...state, addProductError: action.payload, addProductLoading: false };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, addProductData: action.payload, addProductError: null, addProductLoading: false };
    case ADD_FAVORITE_LOADING:
      return { ...state, addFavoriteLoading: true };
    case ADD_FAVORITE_ERROR:
      return { ...state, addFavoriteError: action.payload, addFavoriteLoading: false };
    case ADD_FAVORITE_SUCCESS:
      return { ...state, addFavoriteData: action.payload, addFavoriteError: null, addFavoriteLoading: false };
    case RESET_ADD_PRODUCTS:
      return {
        ...state,
        uploadImagesData: null,
        uploadImagesLoading: false,
        uploadImagesError: null,
        uploadDetailsData: null,
        uploadDetailsLoading: false,
        uploadDetailsError: null,
        addProductData: null,
        addProductLoading: false,
        addProductError: null,
        addFavoriteData: null,
        addFavoriteLoading: false,
        addFavoriteError: null,
      };
    default:
      return state;
  }
}

export const showModal = () => ({ type: SHOW_MODAL });
export const hideModal = () => ({ type: HIDE_MODAL });

export const setProductsLoading = (payload) => ({
  type: SET_PRODUCTS_LOADING,
  payload,
});
export const setProductsError = () => ({
  type: SET_PRODUCTS_ERROR,
});

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
export const uploadImagesLoading = (data) => ({ type: UPLOAD_IMAGES_LOADING, payload: data });
export const uploadImagesError = (data) => ({ type: UPLOAD_IMAGES_ERROR, payload: data });
export const uploadImagesSuccess = (data) => ({ type: UPLOAD_IMAGES_SUCCESS, payload: data });
export const uploadDetailsLoading = (data) => ({ type: UPLOAD_DETAILS_LOADING, payload: data });
export const uploadDetailsError = (data) => ({ type: UPLOAD_DETAILS_ERROR, payload: data });
export const uploadDetailsSuccess = (data) => ({ type: UPLOAD_DETAILS_SUCCESS, payload: data });
export const addProductLoading = (data) => ({ type: ADD_PRODUCT_LOADING, payload: data });
export const addProductError = (data) => ({ type: ADD_PRODUCT_ERROR, payload: data });
export const addProductSuccess = (data) => ({ type: ADD_PRODUCT_SUCCESS, payload: data });
export const resetAddProducts = (data) => ({ type: RESET_ADD_PRODUCTS, payload: data });
export const addFavoriteLoading = (data) => ({ type: ADD_FAVORITE_LOADING, payload: data });
export const addFavoriteError = (data) => ({ type: ADD_FAVORITE_ERROR, payload: data });
export const addFavoriteSuccess = (data) => ({ type: ADD_FAVORITE_SUCCESS, payload: data });
