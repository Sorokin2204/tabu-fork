import axios from 'axios';
import { API_URL } from 'config';
import { orderingError, orderingLoading, orderingSuccess, setCartProducts, setCartProductsLoading, setCartTotal } from 'redux/reducers/cartReducer';
import { updateCountCart } from 'redux/reducers/productReducer';
import { authError } from 'utils/authError';
import { fbqSellProduct } from 'utils/fbPixel';

// export const getRelevantCart = () => {
//   return async (dispatch) => {
//     try {
//       //   const currentCart = JSON.parse(localStorage.getItem('cart'));
//       //   dispatch(setCartLocal(currentCart ? currentCart : []));
//     } catch (e) {
//       console.log(e);
//     }
//   };
// };

export const getCartProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(setCartProductsLoading(true));

      const currentCart = JSON.parse(localStorage.getItem('cart'));
      if (currentCart) {
        const response = await axios.get(`${API_URL}/products/?id__in=${currentCart.map((item) => item.id).join(',')}`);
        let total = 0;
        const cartProducts = response.data.results.map((item) => {
          const cartVariation = currentCart.find((curCart) => curCart.id === item.id).size.id;
          const selectSize = item.size_variations.find((s) => s.id == cartVariation);
          total += item.price;
          return { ...item, size_variations: [selectSize] };
        });
        dispatch(updateCountCart());
        dispatch(setCartProducts(cartProducts));
        dispatch(setCartTotal(total));
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const ordering = (data) => {
  return async (dispatch, getState) => {
    try {
      const {
        cart: { cartTotal },
      } = getState();
      dispatch(orderingLoading(true));
      const response = await axios.post(`${API_URL}/products/purchases/`, data, {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` },
      });
      localStorage.removeItem('cart');

      dispatch(orderingSuccess(response.data));
      fbqSellProduct(cartTotal);

      document.location.href = response.data.payment_page_url;
    } catch (e) {
      const error = e?.response?.data?.detail ?? 'Произошла непредвиденная ошибка';
      authError(e);
      dispatch(orderingError(error));
    }
  };
};
