import axios from 'axios';
import { API_URL } from 'config';
import { setShowAuthModal } from 'redux/reducers/appReducer';
import { setUser, userError, userLoading, userSuccess } from 'redux/reducers/userReducer';

export const registration = (data) => {
  return async (dispatch) => {
    try {
      dispatch(userLoading());
      const dataUser = {
        user_type: data.user_type,
        first_name: data.fullName,
        last_name: data.companyName,
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

export const login = (data) => {
  return async (dispatch) => {
    try {
      dispatch(userLoading());
      const response = await axios.post(`${API_URL}/users/login/`, data);
      dispatch(userSuccess(response.data));
      // localStorage.setItem('token', response.data.token);
      // localStorage.setItem('user', JSON.stringify(response.data.user));

      // document.location.href = '/profile';
      dispatch(setShowAuthModal(false));
    } catch (error) {
      const errorMessage = error?.response?.data?.error_message ?? 'Произошла непредвиденная ошибка. Повторите позже.';
      dispatch(userError(errorMessage));
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/users/me/?format=json`, {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` },
      });
      dispatch(setUser({ ...response.data, token: localStorage.getItem('token') }));

      // localStorage.setItem("token", response.data);
    } catch (e) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  };
};
