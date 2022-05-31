import axios from 'axios';
import { API_URL } from 'config';
import { setBrandOptions, setColorOptions, setMaterialOptions, setSizeOptions } from 'redux/reducers/filterOptionsReducer';

export const getBrandsOptions = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/products/brand/?format=json`);
      dispatch(setBrandOptions(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getColorOptions = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/products/color/?format=json`);
      dispatch(setColorOptions(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getSizeOptions = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/products/size/?format=json`);
      dispatch(setSizeOptions(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getConditionOptions = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/products/material/?format=json`);
      dispatch(setSizeOptions(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getMaterialOptions = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/products/material/?format=json`);
      dispatch(setMaterialOptions(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
