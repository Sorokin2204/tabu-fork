import * as S from './Styled';
import { useEffect } from 'react';
import OrderBlock from 'components/Molecules/OrderingPage/OrderBlock/OrderBlock';
import ContentBlock from 'components/Molecules/OrderingPage/ContentBlock/ContentBlock';
import { useDispatch, useSelector } from 'react-redux';
import { setCartProducts } from 'redux/reducers/cartReducer';
import MobileOrderShortBlock from 'components/Molecules/OrderingPage/MobileOrderShortBlock/MobileOrderShortBlock';
import { Navigate } from 'react-router-dom';
import Loading from 'components/Loading/Loading';
import { getCartProducts } from 'redux/actions/cart';

const Ordering = () => {
  const dispatch = useDispatch();
  const { cartProductsLoading, cartProducts } = useSelector((state) => state.cart);
  useEffect(() => {
    if (localStorage.getItem('cart')) {
      dispatch(getCartProducts());
    }
    // set cart products
    // dispatch(setCartProducts(JSON.parse(localStorage.getItem('cartProducts'))));
  }, []);

  return JSON.parse(localStorage.getItem('cart')) ? (
    !cartProductsLoading && cartProducts?.length !== 0 ? (
      <S.Wrapper>
        <ContentBlock />
        <OrderBlock />
        <MobileOrderShortBlock />
      </S.Wrapper>
    ) : (
      <div>
        <Loading />
      </div>
    )
  ) : (
    <Navigate to={'/'} />
  );
};

export default Ordering;
