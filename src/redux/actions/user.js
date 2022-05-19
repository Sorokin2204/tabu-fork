import axios from "axios";
import { API_URL } from "config";
import { setShowAuthModal } from "redux/reducers/appReducer";
import { setUser } from "redux/reducers/userReducer";

export const registration = async (
  user_type,
  first_name,
  last_name,
  password,
  email
) => {
  try {
    const data = {
      user_type: user_type,
      first_name: first_name,
      last_name: last_name,
      password: password,
      email: email,
    };

    const response = await axios.post(`${API_URL}/users/register/`, data);

    console.log(response);

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));

    document.location.href = "/profile";

    return true;
  } catch (e) {
    console.log(e.response);
  }
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const data = {
        email: email,
        password: password,
      };

      const response = await axios.post(`${API_URL}/users/login/`, data);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      dispatch(setShowAuthModal(false));
      document.location.href = "/profile";
    } catch (e) {
      alert(e?.response?.data?.error_message);
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/users/me`, {
        headers: { Authorization: `Token ${localStorage.getItem("token")}` },
      });
      dispatch(
        setUser({ ...response.data, token: localStorage.getItem("token") })
      );

      // localStorage.setItem("token", response.data);
    } catch (e) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  };
};
