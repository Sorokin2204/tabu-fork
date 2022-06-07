import axios from 'axios';
import { API_URL } from 'config';
import { setCartProducts, setCartProductsLoading, setCartTotal } from 'redux/reducers/cartReducer';
import { updateCountCart } from 'redux/reducers/productReducer';

export const getRelevantCart = () => {
  return async (dispatch) => {
    try {
      //   const currentCart = JSON.parse(localStorage.getItem('cart'));
      //   dispatch(setCartLocal(currentCart ? currentCart : []));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getCartProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(setCartProductsLoading(true));

      const currentCart = JSON.parse(localStorage.getItem('cart'));
      if (currentCart) {
        console.log(currentCart.map((item) => item.id).join(','));
        const response = await axios.get(`${API_URL}/products/?id__in=${currentCart.map((item) => item.id).join(',')}`);
        let total = 0;
        const cartProducts = response.data.results.map((item) => {
          const selectSize = item.size.filter((s) => !!currentCart.find((ss) => ss.size === s.id));
          total += item.price;
          return { ...item, size: selectSize[0] };
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
