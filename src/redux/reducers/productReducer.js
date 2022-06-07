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
  GET_FAVORITES_LOADING,
  GET_FAVORITES_SUCCESS,
  GET_FAVORITES_ERROR,
  REMOVE_FAVORITE_SUCCESS,
  REMOVE_FAVORITE_ERROR,
  REMOVE_FAVORITE_LOADING,
  UPDATE_COUNT_CART,
  UPDATE_COUNT_FAVORITE,
  GET_FAVORITE_PRODUCTS_SUCCESS,
  GET_FAVORITE_PRODUCTS_ERROR,
  GET_FAVORITE_PRODUCTS_LOADING,
  GET_EDIT_PRODUCT_LOADING,
  GET_EDIT_PRODUCT_ERROR,
  GET_EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
  EDIT_PRODUCT_LOADING,
  RESET_SELL_PRODUCT_PAGE,
  REMOVE_FROM_SALE_LOADING,
  REMOVE_FROM_SALE_ERROR,
  REMOVE_FROM_SALE_SUCCESS,
  SET_SELECTED_PRODUCT_PROFILE,
  SET_OPENED_PRODUCT_ERROR,
  SET_OPENED_PRODUCT_LOADING,
} from 'redux/types/productTypes';
const uploadImagesState = {
  uploadImagesData: null,
  uploadImagesLoading: false,
  uploadImagesError: null,
};

const uploadDetailsState = {
  uploadDetailsData: null,
  uploadDetailsLoading: false,
  uploadDetailsError: null,
};
const addProductState = {
  addProductData: null,
  addProductLoading: false,
  addProductError: null,
};
const editProductState = {
  editProductData: null,
  editProductLoading: false,
  editProductError: null,
};
const addFavoriteState = {
  addFavoriteData: null,
  addFavoriteLoading: false,
  addFavoriteError: null,
};
const removeFavoriteState = {
  removeFavoriteData: null,
  removeFavoriteLoading: false,
  removeFavoriteError: null,
};
const getFavoritesState = {
  getFavoritesError: null,
  getFavoritesLoading: false,
  getFavoritesData: null,
};
const getFavoriteProductsState = {
  getFavoriteProductsError: null,
  getFavoriteProductsLoading: false,
  getFavoriteProductsData: null,
};
const getEditProductState = {
  getEditProductError: null,
  getEditProductLoading: false,
  getEditProductData: null,
};

const removeFromSaleState = {
  removeFromSaleError: null,
  removeFromSaleLoading: false,
  removeFromSaleData: null,
};
const productsState = {
  products: [],
  productsLoading: false,
  productsError: false,
};
const defaultState = {
  showModal: false,
  openedProduct: {},
  openedProductError: null,
  openedProductLoading: false,
  ...productsState,
  ...getFavoriteProductsState,
  ...getFavoritesState,
  ...removeFavoriteState,
  ...addFavoriteState,
  ...editProductState,
  ...addProductState,
  ...uploadDetailsState,
  ...uploadImagesState,
  ...getEditProductState,
  ...removeFromSaleState,
  shareProduct: {
    link: '',
    showShare: false,
  },
  newProducts: [],
  trends: [],
  sizes: [],
  countCart: 0,
  countFavorite: 0,
  selectedProductProfile: null,
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
      return { ...state, openedProduct: action.payload, openedProductLoading: false, openedProductError: null };

    case SET_OPENED_PRODUCT_LOADING:
      return { ...state, openedProductLoading: true };

    case SET_OPENED_PRODUCT_ERROR:
      return { ...state, openedProductLoading: false, openedProduct: {}, openedProductError: action.payload };

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
    case EDIT_PRODUCT_LOADING:
      return { ...state, editProductLoading: true };
    case EDIT_PRODUCT_ERROR:
      return { ...state, editProductError: action.payload, editProductLoading: false };
    case EDIT_PRODUCT_SUCCESS:
      return { ...state, editProductData: action.payload, editProductError: null, editProductLoading: false };
    case ADD_FAVORITE_LOADING:
      return { ...state, addFavoriteLoading: true };
    case ADD_FAVORITE_ERROR:
      return { ...state, addFavoriteError: action.payload, addFavoriteLoading: false };
    case ADD_FAVORITE_SUCCESS:
      return { ...state, addFavoriteData: action.payload, addFavoriteError: null, addFavoriteLoading: false };
    case REMOVE_FAVORITE_LOADING:
      return { ...state, removeFavoriteLoading: true };
    case REMOVE_FAVORITE_ERROR:
      return { ...state, removeFavoriteError: action.payload, removeFavoriteLoading: false };
    case REMOVE_FAVORITE_SUCCESS:
      return { ...state, removeFavoriteData: action.payload, removeFavoriteError: null, removeFavoriteLoading: false };
    case GET_FAVORITES_ERROR:
      return { ...state, getFavoritesError: action.payload, getFavoritesLoading: false, getFavoritesData: null };
    case GET_FAVORITES_SUCCESS:
      return { ...state, getFavoritesError: null, getFavoritesLoading: false, getFavoritesData: action.payload };
    case GET_FAVORITES_LOADING:
      return { ...state, getFavoritesLoading: true };

    case GET_FAVORITE_PRODUCTS_ERROR:
      return { ...state, getFavoriteProductsError: action.payload, getFavoriteProductsLoading: false, getFavoriteProductsData: null };
    case GET_FAVORITE_PRODUCTS_SUCCESS:
      return { ...state, getFavoriteProductsError: null, getFavoriteProductsLoading: false, getFavoriteProductsData: action.payload };
    case GET_FAVORITE_PRODUCTS_LOADING:
      return { ...state, getFavoriteProductsLoading: true };
    case GET_EDIT_PRODUCT_ERROR:
      return { ...state, getEditProductError: action.payload, getEditProductLoading: false, getEditProductData: null };
    case GET_EDIT_PRODUCT_SUCCESS:
      return { ...state, getEditProductError: null, getEditProductLoading: false, getEditProductData: action.payload };
    case GET_EDIT_PRODUCT_LOADING:
      return { ...state, getEditProductLoading: true };

    case UPDATE_COUNT_CART: {
      let countCart = JSON.parse(localStorage.getItem('cart'));
      countCart = countCart ? countCart?.length : 0;
      return { ...state, countCart };
    }
    case UPDATE_COUNT_FAVORITE: {
      return { ...state, countFavorite: action.payload };
    }
    case REMOVE_FROM_SALE_LOADING:
      return { ...state, removeFromSaleLoading: true };
    case REMOVE_FROM_SALE_ERROR:
      return { ...state, removeFromSaleError: action.payload, removeFromSaleLoading: false, removeFromSaleData: null };
    case REMOVE_FROM_SALE_SUCCESS:
      return { ...state, removeFromSaleError: null, removeFromSaleLoading: false, removeFromSaleData: action.payload };
    case SET_SELECTED_PRODUCT_PROFILE:
      return { ...state, selectedProductProfile: action.payload };
    case RESET_SELL_PRODUCT_PAGE:
      return {
        ...state,
        ...editProductState,
        ...addProductState,
        ...uploadDetailsState,
        ...uploadImagesState,
        ...getEditProductState,
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

export const setOpenedProductError = (product) => ({
  type: SET_OPENED_PRODUCT_ERROR,
  payload: product,
});

export const setOpenedProductLoading = (product) => ({
  type: SET_OPENED_PRODUCT_LOADING,
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

export const editProductLoading = (data) => ({ type: EDIT_PRODUCT_LOADING, payload: data });
export const editProductError = (data) => ({ type: EDIT_PRODUCT_ERROR, payload: data });
export const editProductSuccess = (data) => ({ type: EDIT_PRODUCT_SUCCESS, payload: data });

export const addFavoriteLoading = (data) => ({ type: ADD_FAVORITE_LOADING, payload: data });
export const addFavoriteError = (data) => ({ type: ADD_FAVORITE_ERROR, payload: data });
export const addFavoriteSuccess = (data) => ({ type: ADD_FAVORITE_SUCCESS, payload: data });
export const removeFavoriteLoading = (data) => ({ type: REMOVE_FAVORITE_LOADING, payload: data });
export const removeFavoriteError = (data) => ({ type: REMOVE_FAVORITE_ERROR, payload: data });
export const removeFavoriteSuccess = (data) => ({ type: REMOVE_FAVORITE_SUCCESS, payload: data });
export const getFavoritesLoading = (data) => ({ type: GET_FAVORITES_LOADING, payload: data });
export const getFavoritesError = (data) => ({ type: GET_FAVORITES_ERROR, payload: data });
export const getFavoritesSuccess = (data) => ({ type: GET_FAVORITES_SUCCESS, payload: data });
export const updateCountCart = (data) => ({ type: UPDATE_COUNT_CART, payload: data });
export const updateCountFavorite = (data) => ({ type: UPDATE_COUNT_FAVORITE, payload: data });
export const getFavoriteProductsLoading = (data) => ({ type: GET_FAVORITE_PRODUCTS_LOADING, payload: data });
export const getFavoriteProductsError = (data) => ({ type: GET_FAVORITE_PRODUCTS_ERROR, payload: data });
export const getFavoriteProductsSuccess = (data) => ({ type: GET_FAVORITE_PRODUCTS_SUCCESS, payload: data });
export const getEditProductLoading = (data) => ({ type: GET_EDIT_PRODUCT_LOADING, payload: data });
export const getEditProductError = (data) => ({ type: GET_EDIT_PRODUCT_ERROR, payload: data });
export const getEditProductSuccess = (data) => ({ type: GET_EDIT_PRODUCT_SUCCESS, payload: data });
export const resetSellProductPage = (data) => ({ type: RESET_SELL_PRODUCT_PAGE, payload: data });
export const removeFromSaleLoading = (data) => ({ type: REMOVE_FROM_SALE_LOADING, payload: data });
export const removeFromSaleError = (data) => ({ type: REMOVE_FROM_SALE_ERROR, payload: data });
export const removeFromSaleSuccess = (data) => ({ type: REMOVE_FROM_SALE_SUCCESS, payload: data });
export const setSelectedProductProfile = (data) => ({ type: SET_SELECTED_PRODUCT_PROFILE, payload: data });
