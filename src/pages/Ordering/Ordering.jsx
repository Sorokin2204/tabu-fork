import * as S from './Styled';
import { useEffect } from 'react';
import OrderBlock from 'components/Molecules/OrderingPage/OrderBlock/OrderBlock';
import ContentBlock from 'components/Molecules/OrderingPage/ContentBlock/ContentBlock';
import { useDispatch } from 'react-redux';
import { setCartProducts } from 'redux/reducers/cartReducer';
import MobileOrderShortBlock from 'components/Molecules/OrderingPage/MobileOrderShortBlock/MobileOrderShortBlock';

const Ordering = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // set cart products
    dispatch(setCartProducts(JSON.parse(localStorage.getItem('cartProducts'))));
  }, []);

  return (
    <S.Wrapper>
      <ContentBlock />
      <OrderBlock />
      <MobileOrderShortBlock />
    </S.Wrapper>
  );
};

export default Ordering;
