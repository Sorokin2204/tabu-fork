import Button from 'components/Atoms/Button';
import CartComponent from 'components/Molecules/Cart/CartComponent/CartComponent';
import EmptyCart from 'components/Molecules/Cart/EmptyCart/EmptyCart';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProducts } from 'redux/actions/cart';
import * as S from './Styled';

const Cart = () => {
  const { countCart } = useSelector((state) => state.product);
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('cart')) {
      dispatch(getCartProducts());
    }
  }, []);

  return <>{JSON.parse(localStorage.getItem('cart'))?.length !== 0 && countCart && localStorage.getItem('cart') ? <CartComponent /> : <EmptyCart />}</>;
};

export default Cart;
