import axios from 'axios';
import { API_URL, URL } from 'config.js';
import _ from 'lodash';
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
  getPurchasedProductsError,
  getPurchasedProductsLoading,
  getPurchasedProductsSuccess,
  getSellProductsError,
  getSellProductsLoading,
  getSellProductsSuccess,
  publishError,
  publishLoading,
  publishSuccess,
  relevantCartError,
  relevantCartLoading,
  relevantCartSuccess,
  removeFavoriteError,
  removeFavoriteLoading,
  removeFavoriteSuccess,
  removeFromSaleError,
  removeFromSaleLoading,
  removeFromSaleSuccess,
  removeSoftError,
  removeSoftLoading,
  removeSoftSuccess,
  resaleError,
  resaleLoading,
  resaleSuccess,
  setCurrentPage,
  setNewProducts,
  setOpenedProduct,
  setOpenedProductError,
  setOpenedProductLoading,
  setProducts,
  setProductsLoading,
  setSizes,
  setTrends,
  updateCountCart,
  uploadDetailsError,
  uploadDetailsLoading,
  uploadDetailsSuccess,
  uploadImagesError,
  uploadImagesLoading,
  uploadImagesSuccess,
  uploadVariationsError,
  uploadVariationsLoading,
  uploadVariationsSuccess,
} from 'redux/reducers/productReducer';
import { authError } from 'utils/authError';
import { convertToMaskPhone } from 'utils/convertToMaskPhone';
import { currencyFormat } from 'utils/currencyFormat';
import { getKeyByValue } from 'utils/getKeyByValue';
import { findCategoryLocal } from './categories';
import { auth, getFavorites } from './user';
const config = {
  headers: { 'content-type': 'multipart/form-data', Authorization: `Token ${localStorage.getItem('token')}` },
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
        const response = axios.post(
          `${API_URL}/products/details/`,
          { title: detail },
          {
            headers: {
              Authorization: `Token ${localStorage.getItem('token')}`,
            },
          },
        );
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

export const uploadVariations = (sizes) => {
  return async (dispatch) => {
    try {
      dispatch(uploadVariationsLoading(true));
      let variationsRequests = [];
      for (let size of sizes) {
        let formData = new FormData();
        formData.append('size', size);
        const response = axios.post(`${API_URL}/products/variations/`, formData, {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
          },
        });
        variationsRequests.push(response);
      }
      Promise.all(variationsRequests)
        .then((response) => {
          const variationsIds = response.map(({ data: { id } }) => id);
          dispatch(uploadVariationsSuccess(variationsIds));
        })
        .catch((error) => dispatch(uploadVariationsError({ message: 'Произошла непредвиденная ошибка' })));
    } catch (e) {
      dispatch(uploadVariationsError({ message: 'Произошла непредвиденная ошибка' }));
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
function compare(a, b) {
  if (a.order < b.order) {
    return -1;
  }
  if (a.order > b.order) {
    return 1;
  }
  return 0;
}
const convertDataForEditPage = (data) => {
  console.log(data.details_list);
  return {
    ...data,
    phone_number: convertToMaskPhone(data?.phone_number),
    price: currencyFormat(data.price),
    old_price: currencyFormat(data?.old_price),
    details_list: data.details_list.sort(compare).map((item) => item.title),
    size: data.size_variations.map((size) => size.size),
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
      const response = await axios.get(`${API_URL}/products/${id}/?format=json`, {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` },
      });
      console.log(response.data);
      if (response.data) {
      }
      const cat = findCategoryLocal(response.data.category, categories, true);
      console.log(response.data);
      const data = convertDataForEditPage(response.data);
      dispatch(getEditProductSuccess({ ...data, category: cat }));
    } catch (e) {
      authError(e);
      dispatch(getEditProductError(true));
      console.log(e);
    }
  };
};

export const getSellProducts = (status, page) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setCurrentPage(page));
      dispatch(getSellProductsLoading(true));
      const response = await axios.get(`${API_URL}/users/sell-products/`, {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` },
        params: {
          status,
          page,
          page_size: 4,
        },
      });
      dispatch(getSellProductsSuccess(response.data));
    } catch (e) {
      authError(e);
      dispatch(getSellProductsError('Товар не найден'));
      console.log(e);
    }
  };
};

const converFromVariation = (data) => {
  return data.map((item) => ({ ...item.product_variations.product, size_variations: [{ id: item.product_variations.id, size: { ...item.product_variations.size } }] }));
};

export const getPurchasedProducts = (status, page) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setCurrentPage(page));
      dispatch(getPurchasedProductsLoading(true));
      const response = await axios.get(`${API_URL}/users/purchased-products/`, {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` },
        params: {
          purchased_status: status,
          page,
          page_size: 4,
        },
      });
      const data = { ...response.data, results: converFromVariation(response.data.results) };
      // const data = covertFromVariation(response.data);
      dispatch(getPurchasedProductsSuccess(data));
    } catch (e) {
      authError(e);
      dispatch(getPurchasedProductsError('Товар не найден'));
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
export const getProductsByCategory = ({ page }) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setCurrentPage(page));
      const {
        filterOptions: { categoryOptions, brandOptions, colorOptions, sizeOptions, materialOptions, conditionOptions, typeSort, priceRange },
        categories: { pageCategory },
      } = getState();
      let categories = convertToUrlParams(categoryOptions, 'slug');
      let conditions = convertToUrlParams(conditionOptions, 'value');
      // let brands = convertToUrlParams(brandOptions);
      // let brands =
      const brands = new URLSearchParams(window.location.search)?.get('brand');
      let colors = convertToUrlParams(colorOptions);
      let sizes = convertToUrlParams(sizeOptions);
      let materials = convertToUrlParams(materialOptions);
      let categoriesParam = `&category__slug__in=${categories ? categories : pageCategory.slug}`;
      let brandsParam;
      if (brands && brands?.length !== 0) {
        brandsParam = `&brand__title__in=${brands}`;
      }
      // let brandsParam = brands && `&brand__title__in=${brands}`;
      let conditionsParam = conditions && `&condition__in=${conditions}`;
      let colorsParam = colors && `&color__title__in=${colors}`;
      let sizesParam = sizes && `&size__title__in=${sizes}`;
      let materialsParam = materials && `&material__title__in=${materials}`;
      let pageParam = `&page=${page}`;
      let pageSizeParam = `&page_size=4`;
      let sortParam = typeSort && `&ordering=${typeSort.slug}`;
      let priceParam = `&price=${priceRange?.min ?? 0},${priceRange?.max ?? 10000000}`;
      const url = [API_URL, '/products?format=json', categoriesParam, brandsParam, colorsParam, sizesParam, materialsParam, conditionsParam, sortParam, pageParam, pageSizeParam, priceParam].join('');
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
      dispatch(removeFromSaleSuccess(response.data));
    } catch (e) {
      authError(e);
      dispatch(removeFromSaleError('Произошла непредвиденная ошибка'));
      console.log(e);
    }
  };
};
export const publish = () => {
  return async (dispatch, getState) => {
    try {
      const {
        product: { selectedProductProfile },
      } = getState();
      dispatch(publishLoading(true));
      const response = await axios.patch(
        `${API_URL}/products/${selectedProductProfile.toString()}/add_to_moderation/`,
        {},
        {
          headers: { Authorization: `Token ${localStorage.getItem('token')}` },
        },
      );
      dispatch(publishSuccess(response.data));
    } catch (e) {
      authError(e);
      dispatch(publishError('Произошла непредвиденная ошибка'));
      console.log(e);
    }
  };
};
export const resale = () => {
  return async (dispatch, getState) => {
    try {
      const {
        product: { selectedProductProfile },
      } = getState();
      dispatch(resaleLoading(true));
      const response = await axios.delete(`${API_URL}/products/${selectedProductProfile.toString()}/`, {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` },
      });
      dispatch(resaleSuccess(response.data));
    } catch (e) {
      authError(e);
      dispatch(resaleError('Произошла непредвиденная ошибка'));
      console.log(e);
    }
  };
};

export const removeSoft = () => {
  return async (dispatch, getState) => {
    try {
      const {
        product: { selectedProductProfile },
      } = getState();
      dispatch(removeSoftLoading(true));
      const response = await axios.delete(`${API_URL}/products/${selectedProductProfile.toString()}/`, {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` },
      });
      console.log('DELETE ', response.data);
      dispatch(removeSoftSuccess(response.data));
    } catch (e) {
      authError(e);
      dispatch(removeSoftError('Произошла непредвиденная ошибка'));
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
      dispatch(removeFavoriteSuccess(response.data));
    } catch (e) {
      authError(e);
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
      dispatch(addFavoriteSuccess(response.data));
    } catch (e) {
      console.log(e.response.data);
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
      authError(e);
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
      authError(e);
      dispatch(addProductError(e.response.data));
    }
  };
};

export const getRelevantCart = (page) => {
  return async (dispatch, getState) => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart'));
      console.log(cart);
      if (cart) {
        dispatch(relevantCartLoading(true));
        const response = await axios.post(`${API_URL}/products/relevant-cart/`, { ids: cart.map((item) => item.id) });
        dispatch(relevantCartSuccess(response.data));
        const relativeCart = cart.filter((item) => response.data.ids.find((id) => id === item.id));
        if (relativeCart?.length !== 0) {
          localStorage.setItem('cart', JSON.stringify(relativeCart));
        } else {
          localStorage.removeItem('cart');
        }

        dispatch(updateCountCart());
      }
    } catch (e) {
      console.log(e);
      dispatch(relevantCartError('Произошла непредвиденная ошибка'));
    }
  };
};

export const getFavoriteProducts = (page) => {
  return async (dispatch, getState) => {
    try {
      dispatch(getFavoriteProductsLoading(true));
      const response = await axios.get(`${API_URL}/users/get_favorites/`, {
        params: {
          page,
          page_size: 4,
        },
        headers: { Authorization: `Token ${localStorage.getItem('token')}` },
      });
      console.log(response.data.results);
      dispatch(getFavoriteProductsSuccess(response.data));
    } catch (e) {
      authError(e);
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
