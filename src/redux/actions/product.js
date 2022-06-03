import axios from 'axios';
import { API_URL } from 'config.js';
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
  setNewProducts,
  setOpenedProduct,
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
const config = {
  headers: { 'content-type': 'multipart/form-data' },
};

export const uploadImages = (images) => {
  return async (dispatch) => {
    try {
      dispatch(uploadImagesLoading(true));
      let imageRequests = [];
      for (let image of images) {
        let formData = new FormData();
        const imageType = imageTypes[image?.type];
        formData.append('image', image?.file);
        formData.append('main_image', imageType === 0 ? true : false);
        formData.append('image_type', imageTypes[image?.type]);
        console.log(formData);
        const response = axios.post(`${API_URL}/products/images/`, formData, config);
        imageRequests.push(response);
      }
      Promise.all(imageRequests)
        .then((response) => {
          const imageIds = response.map(({ data: { id } }) => id);
          dispatch(uploadImagesSuccess(imageIds));
        })
        .catch((error) => dispatch(uploadImagesError({ message: 'Произошла непредвиденная ошибка' })));
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

export const getProductById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/products/${id}/?format=json`);
      dispatch(setOpenedProduct(response.data));
    } catch (e) {
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
      dispatch(addFavoriteSuccess(response.data));
    } catch (e) {
      console.log(e.response);
      dispatch(addFavoriteError('Произошла непредвиденная ошибка'));
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
