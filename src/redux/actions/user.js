import axios from 'axios';
import { API_URL } from 'config';
import { setShowAuthModal, setShowEditUserSuccessModal } from 'redux/reducers/appReducer';
import { editUserError, editUserLoading, editUserSuccess, setUser, userError, userLoading, userSuccess } from 'redux/reducers/userReducer';
import _ from 'lodash';
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
      };

      const response = await axios.post(`${API_URL}/users/register/`, dataUser);
      dispatch(userSuccess(response.data));
      dispatch(setShowAuthModal(false));
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      document.location.href = '/profile';
    } catch (error) {
      const errorMessage = error?.response?.data?.email?.[0] ?? 'Произошла непредвиденная ошибка. Повторите позже.';
      dispatch(userError(errorMessage));
      console.log(errorMessage);
    }
  };
};
export const editUser = ({ data, token }) => {
  return async (dispatch) => {
    try {
      dispatch(editUserLoading());
      const response = await axios.post(`${API_URL}/users/edit/`, data, {
        headers: { Authorization: `Token ${token}`, 'content-type': 'multipart/form-data' },
      });
      dispatch(auth());
      dispatch(editUserSuccess(response.data));
      dispatch(setShowEditUserSuccessModal(true));
    } catch (error) {
      console.log(error.response);
      const errorMessage = error?.response?.data?.error_message ?? 'Произошла непредвиденная ошибка. Повторите позже.';
      dispatch(editUserError(errorMessage));
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
      localStorage.setItem('user', JSON.stringify(response.data.user));

      document.location.href = '/profile';
      dispatch(setShowAuthModal(false));
    } catch (error) {
      const errorMessage = error?.response?.data?.error_message ?? 'Произошла непредвиденная ошибка. Повторите позже.';
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
      const response = await axios.get(`${API_URL}/users/me/?format=json`, {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` },
      });

      const groupProducts = groupByStatus(response.data.product_set);

      dispatch(setUser({ ...response.data, product_set: groupProducts, token: localStorage.getItem('token') }));

      // localStorage.setItem("token", response.data);
    } catch (e) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  };
};
