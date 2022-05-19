import { SET_ADS } from "redux/types/adsTypes";

const defaultState = {
  ads: [],
};

export default function adsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ADS:
      return { ...state, ads: action.payload };

    default:
      return state;
  }
}

export const setAds = (ads) => ({ type: SET_ADS, payload: ads });
