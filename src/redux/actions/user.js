import axios from 'axios';
import { API_URL } from 'config';
import { setShowAuthModal, setShowEditUserSuccessModal } from 'redux/reducers/appReducer';
import { changePasswordError, changePasswordLoading, changePasswordSuccess, editUserError, editUserLoading, editUserSuccess, logout, resetPasswordError, resetPasswordLoading, resetPasswordSuccess, setIsAuth, setUser, userError, userLoading, userSuccess } from 'redux/reducers/userReducer';
import _ from 'lodash';
import { getFavoritesError, getFavoritesLoading, getFavoritesSuccess, updateCountFavorite } from 'redux/reducers/productReducer';
const config = {
  headers: { 'content-type': 'multipart/form-data' },
};
export const registration = (data) => {
  return async (dispatch) => {
    try {
      dispatch(userLoading());
      const dataUser = {
        user_type: data.user_type,
        fio: data.fullName,
        company_name: data.companyName,
        password: data.password,
        email: data.email,
        phone: data.phone,
      };

      const response = await axios.post(`${API_URL}/users/register/`, dataUser);
      dispatch(userSuccess(response.data));
      dispatch(setShowAuthModal(false));
      localStorage.setItem('token', response.data.token);
      document.location.href = '/profile';
    } catch (error) {
      const { code } = error?.response;
      if (code == 401) {
        logout();
        return;
      }
      console.log(error.response);
      const errorMessage = error?.response?.data?.detail ?? 'Произошла непредвиденная ошибка. Повторите позже.';
      dispatch(userError(errorMessage));
    }
  };
};
export const editUser = ({ data, token }) => {
  return async (dispatch) => {
    try {
      dispatch(editUserLoading());
      const response = await axios.patch(`${API_URL}/users/edit/`, data, {
        headers: { Authorization: `Token ${localStorage.getItem('token')}`, 'content-type': 'multipart/form-data' },
      });
      dispatch(editUserSuccess(response.data));
      dispatch(setShowEditUserSuccessModal(true));
      dispatch(getUser());
    } catch (error) {
      const { code } = error?.response;
      if (code == 401) {
        logout();
        return;
      }
      const errorMessage = error?.response?.data?.detail ?? 'Произошла непредвиденная ошибка. Повторите позже.';
      dispatch(editUserError(errorMessage));
    }
  };
};

export const getFavorites = (onlyIds) => {
  return async (dispatch) => {
    try {
      dispatch(getFavoritesLoading(true));
      const response = await axios.get(`${API_URL}/users/get_favorites/${onlyIds ? '?ids=true/' : ''}`, {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` },
      });
      // const favoriteIds = response.data.results.map((item) => item.id);
      // console.log(response.data);

      dispatch(getFavoritesSuccess(response.data.results));
    } catch (error) {
      const { code } = error?.response;
      if (code == 401) {
        logout();
        return;
      }
      dispatch(getFavoritesError('Произошла непредвиденная ошибка. Повторите позже.'));
    }
  };
};

export const login = (data) => {
  return async (dispatch) => {
    try {
      dispatch(userLoading());
      const response = await axios.post(`${API_URL}/users/login/`, data);
      dispatch(userSuccess(response.data));
      localStorage.setItem('token', response.data.token);

      document.location.href = '/profile';
    } catch (error) {
      const { code } = error?.response;
      if (code == 401) {
        logout();
        return;
      }
      const errorMessage = error?.response?.data?.detail ?? 'Произошла непредвиденная ошибка. Повторите позже.';
      dispatch(userError(errorMessage));
    }
  };
};
const groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
const groupByStatus = (products) => {
  return groupBy(products, 'status');
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/users/auth/`, {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` },
      });
      dispatch(setIsAuth(true));
      // dispatch(updateCountFavorite(response.data.favorites_count));
      // const groupProducts = groupByStatus(response.data.product_set);
      // dispatch(setUser({ ...response.data, product_set: groupProducts, token: localStorage.getItem('token') }));
    } catch (e) {
      dispatch(logout());
    }
  };
};

export const getUser = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/users/me/?format=json`, {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` },
      });
      // dispatch(updateCountFavorite(response.data.favorites_count));
      dispatch(setUser({ ...response.data }));
    } catch (e) {
      dispatch(logout());
    }
  };
};
export const changePassword = (data) => {
  return async (dispatch) => {
    try {
      dispatch(changePasswordLoading(true));
      const response = await axios.post(
        `${API_URL}/users/edit/setPassword/`,
        {
          current_password: data.oldPassword,
          password: data.newPassword,
          re_password: data.newPassword,
        },
        {
          headers: { Authorization: `Token ${localStorage.getItem('token')}` },
        },
      );
      dispatch(changePasswordSuccess(response.data));
    } catch (e) {
      const { code } = e?.response;
      if (code == 401) {
        logout();
        return;
      }
      const error = e?.response?.data?.detail ?? 'Произошла ошибка';
      console.log(e.response);
      dispatch(changePasswordError(error));
    }
  };
};
export const resetPassword = (data) => {
  return async (dispatch) => {
    try {
      dispatch(resetPasswordLoading(true));
      setTimeout(() => {
        dispatch(resetPasswordSuccess(true));
      }, 2000);
      // settim
      // const response = await axios.post(`${API_URL}/users/edit/resetPassword/`, data);
      // dispatch(resetPasswordSuccess(response.data));
    } catch (e) {
      const { code } = e?.response;
      if (code == 401) {
        logout();
        return;
      }
      const error = e?.response?.data?.detail ?? 'Произошла ошибка';
      console.log(e.response);
      dispatch(resetPasswordError(error));
    }
  };
};
