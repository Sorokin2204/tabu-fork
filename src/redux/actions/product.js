import axios from 'axios';
import { API_URL } from 'config.js';
import { useSelector } from 'react-redux';
import { store } from 'redux/reducers';
import { setQuery } from 'redux/reducers/filterOptionsReducer';
import { setNewProducts, setOpenedProduct, setProducts, setProductsLoading, setSizes, setTrends } from 'redux/reducers/productReducer';

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
