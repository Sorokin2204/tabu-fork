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
  GET_SELL_PRODUCTS_SUCCESS,
  GET_SELL_PRODUCTS_ERROR,
  GET_SELL_PRODUCTS_LOADING,
  UPLOAD_VARIATIONS_SUCCESS,
  UPLOAD_VARIATIONS_ERROR,
  UPLOAD_VARIATIONS_LOADING,
  REMOVE_SOFT_LOADING,
  REMOVE_SOFT_ERROR,
  REMOVE_SOFT_SUCCESS,
  SET_CURRENT_PAGE,
  RESET_REMOVE_FROM_SALE,
  RESET_REMOVE_SOFT,
  GET_PURCHASED_PRODUCTS_ERROR,
  GET_PURCHASED_PRODUCTS_SUCCESS,
  GET_PURCHASED_PRODUCTS_LOADING,
  RESALE_LOADING,
  RESALE_ERROR,
  RESALE_SUCCESS,
  RESET_RESALE,
  PUBLISH_LOADING,
  PUBLISH_ERROR,
  PUBLISH_SUCCESS,
  RESET_PUBLISH,
  RELEVANT_CART_SUCCESS,
  RELEVANT_CART_LOADING,
  RELEVANT_CART_ERROR,
} from 'redux/types/productTypes';
const uploadImagesState = {
  uploadImagesData: null,
  uploadImagesLoading: false,
  uploadImagesError: null,
};

const uploadVariationsState = {
  uploadVariationsData: null,
  uploadVariationsLoading: false,
  uploadVariationsError: null,
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
const removeSoftState = {
  removeSoftError: null,
  removeSoftLoading: false,
  removeSoftData: null,
};
const getSellProductsState = {
  getSellProductsError: null,
  getSellProductsLoading: false,
  getSellProductsData: null,
};
const resaleState = {
  resaleError: null,
  resaleLoading: false,
  resaleData: null,
};
const publishState = {
  publishError: null,
  publishLoading: false,
  publishData: null,
};
const relevantCartState = {
  relevantCartError: null,
  relevantCartLoading: false,
  relevantCartData: null,
};

const getPurchasedProductsState = {
  getPurchasedProductsError: null,
  getPurchasedProductsLoading: false,
  getPurchasedProductsData: null,
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
  ...getSellProductsState,
  ...uploadVariationsState,
  ...removeSoftState,
  ...getPurchasedProductsState,
  ...resaleState,
  ...publishState,
  ...relevantCartState,
  shareProduct: {
    link: '',
    showShare: false,
  },
  newProducts: [],
  trends: [],
  sizes: [],
  countCart: 0,
  countFavorite: 0,
  currentPage: 1,
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

    case UPLOAD_VARIATIONS_LOADING:
      return { ...state, uploadVariationsLoading: true };
    case UPLOAD_VARIATIONS_ERROR:
      return { ...state, uploadVariationsData: null, uploadVariationsError: action.payload, uploadVariationsLoading: false };
    case UPLOAD_VARIATIONS_SUCCESS:
      return { ...state, uploadVariationsData: action.payload, uploadVariationsError: null, uploadVariationsLoading: false };

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

    case GET_SELL_PRODUCTS_ERROR:
      return { ...state, getSellProductsError: action.payload, getSellProductsLoading: false, getSellProductsData: null };
    case GET_SELL_PRODUCTS_SUCCESS:
      return { ...state, getSellProductsError: null, getSellProductsLoading: false, getSellProductsData: action.payload };
    case GET_SELL_PRODUCTS_LOADING:
      return { ...state, getSellProductsLoading: true };

    case GET_PURCHASED_PRODUCTS_ERROR:
      return { ...state, getPurchasedProductsError: action.payload, getPurchasedProductsLoading: false, getPurchasedProductsData: null };
    case GET_PURCHASED_PRODUCTS_SUCCESS:
      return { ...state, getPurchasedProductsError: null, getPurchasedProductsLoading: false, getPurchasedProductsData: action.payload };
    case GET_PURCHASED_PRODUCTS_LOADING:
      return { ...state, getPurchasedProductsLoading: true };

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
    case RESET_REMOVE_FROM_SALE:
      return { ...state, ...removeFromSaleState };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case REMOVE_SOFT_LOADING:
      return { ...state, removeSoftLoading: true };
    case REMOVE_SOFT_ERROR:
      return { ...state, removeSoftError: action.payload, removeSoftLoading: false, removeSoftData: null };
    case REMOVE_SOFT_SUCCESS:
      return { ...state, removeSoftError: null, removeSoftLoading: false, removeSoftData: action.payload };

    case RESALE_LOADING:
      return { ...state, resaleLoading: true };
    case RESALE_ERROR:
      return { ...state, resaleError: action.payload, resaleLoading: false, resaleData: null };
    case RESALE_SUCCESS:
      return { ...state, resaleError: null, resaleLoading: false, resaleData: action.payload };
    case RESET_RESALE:
      return { ...state, ...resaleState };

    case RELEVANT_CART_LOADING:
      return { ...state, relevantLoading: true };
    case RELEVANT_CART_ERROR:
      return { ...state, relevantCartError: action.payload, relevantCartLoading: false, relevantCartData: null };
    case RELEVANT_CART_SUCCESS:
      return { ...state, relevantCartError: null, relevantCartLoading: false, relevantCartData: action.payload };

    case PUBLISH_LOADING:
      return { ...state, publishLoading: true };
    case PUBLISH_ERROR:
      return { ...state, publishError: action.payload, publishLoading: false, publishData: null };
    case PUBLISH_SUCCESS:
      return { ...state, publishError: null, publishLoading: false, publishData: action.payload };
    case RESET_PUBLISH:
      return { ...state, ...publishState };
    case RESET_REMOVE_SOFT:
      return { ...state, ...removeSoftState };
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

export const uploadVariationsLoading = (data) => ({ type: UPLOAD_VARIATIONS_LOADING, payload: data });
export const uploadVariationsError = (data) => ({ type: UPLOAD_VARIATIONS_ERROR, payload: data });
export const uploadVariationsSuccess = (data) => ({ type: UPLOAD_VARIATIONS_SUCCESS, payload: data });

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

// export const getFavoritesIdsLoading = (data) => ({ type: GET_FAVORITES_LOADING, payload: data });
// export const getFavoritesIdsError = (data) => ({ type: GET_FAVORITES_ERROR, payload: data });
// export const getFavoritesIdsSuccess = (data) => ({ type: GET_FAVORITES_SUCCESS, payload: data });

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

export const removeSoftLoading = (data) => ({ type: REMOVE_SOFT_LOADING, payload: data });
export const removeSoftError = (data) => ({ type: REMOVE_SOFT_ERROR, payload: data });
export const removeSoftSuccess = (data) => ({ type: REMOVE_SOFT_SUCCESS, payload: data });

export const setSelectedProductProfile = (data) => ({ type: SET_SELECTED_PRODUCT_PROFILE, payload: data });

export const getSellProductsLoading = (data) => ({ type: GET_SELL_PRODUCTS_LOADING, payload: data });
export const getSellProductsError = (data) => ({ type: GET_SELL_PRODUCTS_ERROR, payload: data });
export const getSellProductsSuccess = (data) => ({ type: GET_SELL_PRODUCTS_SUCCESS, payload: data });
export const setCurrentPage = (data) => ({ type: SET_CURRENT_PAGE, payload: data });
export const resetRemoveFromSale = (data) => ({ type: RESET_REMOVE_FROM_SALE, payload: data });
export const resetRemoveSoft = (data) => ({ type: RESET_REMOVE_SOFT, payload: data });
export const getPurchasedProductsLoading = (data) => ({ type: GET_PURCHASED_PRODUCTS_LOADING, payload: data });
export const getPurchasedProductsError = (data) => ({ type: GET_PURCHASED_PRODUCTS_ERROR, payload: data });
export const getPurchasedProductsSuccess = (data) => ({ type: GET_PURCHASED_PRODUCTS_SUCCESS, payload: data });

export const resaleLoading = (data) => ({ type: RESALE_LOADING, payload: data });
export const resaleError = (data) => ({ type: RESALE_ERROR, payload: data });
export const resaleSuccess = (data) => ({ type: RESALE_SUCCESS, payload: data });
export const resetResale = (data) => ({ type: RESET_RESALE, payload: data });

export const publishLoading = (data) => ({ type: PUBLISH_LOADING, payload: data });
export const publishError = (data) => ({ type: PUBLISH_ERROR, payload: data });
export const publishSuccess = (data) => ({ type: PUBLISH_SUCCESS, payload: data });
export const resetPublish = (data) => ({ type: RESET_PUBLISH, payload: data });
export const relevantCartSuccess = (data) => ({ type: RELEVANT_CART_SUCCESS, payload: data });
export const relevantCartLoading = (data) => ({ type: RELEVANT_CART_LOADING, payload: data });
export const relevantCartError = (data) => ({ type: RELEVANT_CART_ERROR, payload: data });
