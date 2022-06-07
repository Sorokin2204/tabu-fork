import axios from 'axios';
import { API_URL, URL } from 'config.js';
import { imageTypes } from 'pages/SellProduct/PhotoBlock/PhotoBlock';
import { useSelector } from 'react-redux';
import { store } from 'redux/reducers';
import { setQuery } from 'redux/reducers/filterOptionsReducer';
import {
  addFavoriteError,
  addFavoriteLoading,
  addFavoriteSuccess,
  addProductError,
  addProductLoading,
  addProductSuccess,
  editProductError,
  editProductLoading,
  editProductSuccess,
  getEditProductError,
  getEditProductLoading,
  getEditProductSuccess,
  getFavoriteProductsError,
  getFavoriteProductsLoading,
  getFavoriteProductsSuccess,
  removeFavoriteError,
  removeFavoriteLoading,
  removeFavoriteSuccess,
  removeFromSaleError,
  removeFromSaleLoading,
  removeFromSaleSuccess,
  setNewProducts,
  setOpenedProduct,
  setOpenedProductError,
  setOpenedProductLoading,
  setProducts,
  setProductsLoading,
  setSizes,
  setTrends,
  uploadDetailsError,
  uploadDetailsLoading,
  uploadDetailsSuccess,
  uploadImagesError,
  uploadImagesLoading,
  uploadImagesSuccess,
} from 'redux/reducers/productReducer';
import { convertToMaskPhone } from 'utils/convertToMaskPhone';
import { currencyFormat } from 'utils/currencyFormat';
import { getKeyByValue } from 'utils/getKeyByValue';
import { findCategoryLocal } from './categories';
import { auth, getFavorites } from './user';
const config = {
  headers: { 'content-type': 'multipart/form-data' },
};
const getNewImages = (images) => {
  return images.map();
};
export const getOldImageIds = (images) => {
  return images?.filter((img) => !img?.file && img?.oldImage && img?.id).map((img) => img.id);
};

export const uploadImages = (images) => {
  return async (dispatch) => {
    try {
      dispatch(uploadImagesLoading(true));
      let imageRequests = [];
      for (let image of images) {
        if (image && image?.file) {
          let formData = new FormData();
          const imageType = imageTypes[image?.type];
          formData.append('image', image?.file);
          formData.append('main_image', imageType === 0 ? true : false);
          formData.append('image_type', imageTypes[image?.type]);
          console.log(formData);
          const response = axios.post(`${API_URL}/products/images/`, formData, config);
          imageRequests.push(response);
        }
      }
      if (imageRequests.length !== 0) {
        Promise.all(imageRequests)
          .then((response) => {
            const imageIds = response.map(({ data: { id } }) => id);
            dispatch(uploadImagesSuccess(imageIds));
          })
          .catch((error) => dispatch(uploadImagesError({ message: 'Произошла непредвиденная ошибка' })));
      } else {
        dispatch(uploadImagesSuccess([]));
      }
    } catch (e) {
      dispatch(uploadImagesError({ message: 'Произошла непредвиденная ошибка' }));
    }
  };
};

export const uploadDetails = (details) => {
  return async (dispatch) => {
    try {
      dispatch(uploadDetailsLoading(true));
      let detailRequests = [];
      for (let detail of details) {
        const response = axios.post(`${API_URL}/products/details/`, { title: detail });
        detailRequests.push(response);
      }
      Promise.all(detailRequests)
        .then((response) => {
          const detailIds = response.map(({ data: { id } }) => id);
          dispatch(uploadDetailsSuccess(detailIds));
        })
        .catch((error) => dispatch(uploadDetailsError({ message: 'Произошла непредвиденная ошибка' })));
    } catch (e) {
      dispatch(uploadDetailsError({ message: 'Произошла непредвиденная ошибка' }));
    }
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/products/?format=json`);
      dispatch(setProducts(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
export const setOpenedProductCategory = (productId, categories) => {
  return async (dispatch, getState) => {
    try {
      const {
        product: { openedProduct },
      } = getState();

      const cat = findCategoryLocal(productId, categories);
      dispatch(setOpenedProduct({ ...openedProduct, category: cat }));
    } catch (e) {
      console.log(e);
    }
  };
};

const convertDataForEditPage = (data) => {
  return {
    ...data,
    phone_number: convertToMaskPhone(data.phone_number),
    price: currencyFormat(data.price),
    old_price: currencyFormat(data.old_price),
    details_list: data.details_list.map((detail) => detail.title),
    images: Object.keys(imageTypes).map((type) => {
      const findImg = data.images.find((img) => img.image_type === imageTypes[type]);
      if (findImg) {
        return { id: findImg.id, type, oldImage: URL + findImg.image, url: null, file: null };
      }
    }),
  };
};
export const getEditProduct = (id) => {
  return async (dispatch, getState) => {
    try {
      const {
        categories: { categories },
      } = getState();
      dispatch(getEditProductLoading(true));
      const response = await axios.get(`${API_URL}/products/${id}/?format=json`);
      const cat = findCategoryLocal(response.data.category, categories, true);
      const data = convertDataForEditPage(response.data);
      dispatch(getEditProductSuccess({ ...data, category: cat }));
    } catch (e) {
      dispatch(getEditProductError(true));
      console.log(e);
    }
  };
};

export const getProductById = (id) => {
  return async (dispatch, getState) => {
    try {
      const {
        categories: { categories },
      } = getState();
      dispatch(setOpenedProductLoading(true));
      const response = await axios.get(`${API_URL}/products/${id}/?format=json`);
      const cat = findCategoryLocal(response.data.category, categories);
      dispatch(setOpenedProduct({ ...response.data, category: cat }));
    } catch (e) {
      dispatch(setOpenedProductError('Товар не найден'));
      console.log(e);
    }
  };
};
const convertToUrlParams = (list, prop) => {
  if (list && list?.length !== 0) {
    return list
      .filter((x) => x.selected === true)
      .map((item) => item[prop ?? 'title'])
      .join(',');
  }
  return '';
};
export const getProductsByCategory = () => {
  return async (dispatch, getState) => {
    try {
      const {
        filterOptions: { categoryOptions, brandOptions, colorOptions, sizeOptions, materialOptions, typeSort },
        categories: { pageCategory },
      } = getState();
      let categories = convertToUrlParams(categoryOptions, 'slug');
      let brands = convertToUrlParams(brandOptions);
      let colors = convertToUrlParams(colorOptions);
      let sizes = convertToUrlParams(sizeOptions);
      let materials = convertToUrlParams(materialOptions);
      let categoriesParam = `&category__slug__in=${categories ? categories : pageCategory.slug}`;
      let brandsParam = brands && `&brand__title__in=${brands}`;
      let colorsParam = colors && `&color__title__in=${colors}`;
      let sizesParam = sizes && `&size__title__in=${sizes}`;
      let materialsParam = materials && `&material__title__in=${materials}`;
      let sortParam = typeSort && `&ordering=${typeSort.slug}`;
      const url = [API_URL, '/products?format=json', categoriesParam, brandsParam, colorsParam, sizesParam, materialsParam, sortParam].join('');
      dispatch(setProductsLoading(true));
      setTimeout(() => {
        axios.get(url).then((response) => {
          dispatch(setProducts(response.data));
          dispatch(setProductsLoading(false));
        });
      }, 1000);
    } catch (e) {
      dispatch(setProductsLoading(false));
      console.log(e);
    }
  };
};
export const removeFromSale = () => {
  return async (dispatch, getState) => {
    try {
      const {
        product: { selectedProductProfile },
      } = getState();
      dispatch(removeFromSaleLoading(true));
      const response = await axios.patch(
        `${API_URL}/products/${selectedProductProfile.toString()}/remove_from_sale/`,
        {},
        {
          headers: { Authorization: `Token ${localStorage.getItem('token')}` },
        },
      );
      dispatch(auth());
      dispatch(removeFromSaleSuccess(response.data));
    } catch (e) {
      console.log(e.response);
      dispatch(removeFromSaleError('Произошла непредвиденная ошибка'));
      console.log(e);
    }
  };
};
export const removeFavorite = (productId) => {
  return async (dispatch) => {
    try {
      dispatch(removeFavoriteLoading(true));
      const response = await axios.post(
        `${API_URL}/products/${productId.toString()}/remove_favorite/`,
        {},
        {
          headers: { Authorization: `Token ${localStorage.getItem('token')}` },
        },
      );
      dispatch(getFavorites());
      dispatch(auth());
      dispatch(removeFavoriteSuccess(response.data));
    } catch (e) {
      console.log(e.response);
      dispatch(removeFavoriteError('Произошла непредвиденная ошибка'));
      console.log(e);
    }
  };
};

export const addFavorite = (productId) => {
  return async (dispatch) => {
    try {
      dispatch(addFavoriteLoading(true));
      const response = await axios.post(
        `${API_URL}/products/${productId.toString()}/add_favorite/`,
        {},
        {
          headers: { Authorization: `Token ${localStorage.getItem('token')}` },
        },
      );
      dispatch(getFavorites());
      dispatch(auth());
      dispatch(addFavoriteSuccess(response.data));
    } catch (e) {
      console.log(e.response);
      dispatch(addFavoriteError('Произошла непредвиденная ошибка'));
      console.log(e);
    }
  };
};
export const editProduct = (data) => {
  return async (dispatch) => {
    try {
      dispatch(editProductLoading(true));
      const response = await axios.patch(`${API_URL}/products/${data.id}/`, data, {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` },
      });
      dispatch(editProductSuccess(response.data));
    } catch (e) {
      dispatch(editProductError('Произошла непредвиденная ошибка'));
      console.log(e);
    }
  };
};
export const addProduct = (data) => {
  return async (dispatch) => {
    try {
      dispatch(addProductLoading(true));
      const response = await axios.post(`${API_URL}/products/`, data, {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` },
      });
      dispatch(addProductSuccess(response.data));
    } catch (e) {
      dispatch(addProductError('Произошла непредвиденная ошибка'));
      console.log(e);
    }
  };
};

export const getFavoriteProducts = () => {
  return async (dispatch, getState) => {
    try {
      const {
        product: { getFavoritesData },
      } = getState();
      dispatch(getFavoriteProductsLoading(true));
      const response = await axios.get(`${API_URL}/products/?id__in=${getFavoritesData.join(',')}`);
      dispatch(getFavoriteProductsSuccess(response.data.results));
    } catch (e) {
      dispatch(getFavoriteProductsError('Произошла непредвиденная ошибка'));
    }
  };
};

export const getSizes = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/products/size/?format=json`);
      dispatch(setSizes(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getNewProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/products?category__title__in=Новинки/?format=json`);
      dispatch(setNewProducts(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getTrends = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/products?tags__title__in=Trend/?format=json`);
      dispatch(setTrends(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
