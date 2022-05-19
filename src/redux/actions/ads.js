import axios from "axios";
import { API_URL } from "config";
import { setAds } from "redux/reducers/adsReducer";

export const getAds = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/main/ads/`);
      dispatch(setAds(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
