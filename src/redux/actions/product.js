import axios from "axios";
import { API_URL } from "config.js";
import { useSelector } from "react-redux";
import { store } from "redux/reducers";
import { setQuery } from "redux/reducers/filterOptionsReducer";
import {
  setNewProducts,
  setOpenedProduct,
  setProducts,
  setSizes,
  setTrends,
} from "redux/reducers/productReducer";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/products`);
      dispatch(setProducts(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getProductById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/products/${id}`);
      dispatch(setOpenedProduct(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getProductsByCategory = (
  category,
  brandOptions,
  colorOptions,
  sizeOptions,
  materialOptions
) => {
  return async (dispatch) => {
    try {
      if (brandOptions) {
        let brands = "";
        let colors = "";
        let sizes = "";
        let materials = "";
        for (let i = 0; i < brandOptions.length; i++) {
          if (i === 0) {
            brands += brandOptions[i].title;
          } else {
            brands += "," + brandOptions[i].title;
          }
        }

        console.log("materials >", materials);
        console.log("materialOptions >", materialOptions);
        for (let i = 0; i < materialOptions?.length; i++) {
          if (i === 0) {
            materials += materialOptions[i].title;
          } else {
            materials += "," + materialOptions[i].title;
          }
        }

        for (let i = 0; i < colorOptions.length; i++) {
          if (i === 0) {
            colors += colorOptions[i].title;
          } else {
            colors += "," + colorOptions[i].title;
          }
        }

        for (let i = 0; i < sizeOptions.length; i++) {
          if (i === 0) {
            sizes += sizeOptions[i].title;
          } else {
            sizes += "," + sizeOptions[i].title;
          }
        }

        const response = await axios.get(
          API_URL +
            `/products?category__title__in=${category}&brand__title__in=${brands}&color__title__in=${colors}&size__title__in=${sizes}&material__title__in=${materials}`
        );
        dispatch(setProducts(response.data));
      } else {
        const response = await axios.get(
          API_URL + `/products?category__title__in=${category}`
        );
        dispatch(setProducts(response.data));
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const getSizes = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/products/size`);
      dispatch(setSizes(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getNewProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_URL}/products?category__title__in=Новинки`
      );
      dispatch(setNewProducts(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getTrends = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_URL}/products?tags__title__in=Trend`
      );
      dispatch(setTrends(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
