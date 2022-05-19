import axios from "axios";
import { API_URL } from "config";
import { setCategories, setSearchProducts } from "redux/reducers/searchReducer";

export const getSearchProducts = (title) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/products?search=${title}`);
      dispatch(setSearchProducts(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getCategories = (title) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_URL}/products?category__title__in=${title}`
      );
      dispatch(setCategories(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
