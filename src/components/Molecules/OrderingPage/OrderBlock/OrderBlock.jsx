import { useDispatch, useSelector } from 'react-redux';
import { setShowMobileCartModal } from 'redux/reducers/appReducer';
import { currencyFormat } from 'utils/currencyFormat';
import OrderingProduct from '../OrderingProduct/OrderingProduct';
import * as S from './Styled';

const OrderBlock = () => {
  const { cartProducts, cartTotal } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const showMobileCartModal = useSelector((state) => state.app.showMobileCartModal);
  return (
    <>
      <S.Overlay
        active={showMobileCartModal}
        onClick={() => {
          dispatch(setShowMobileCartModal(false));
        }}></S.Overlay>
      <S.OrderBlock active={showMobileCartModal}>
        <S.TitleBlock
          onClick={() => {
            dispatch(setShowMobileCartModal(false));
          }}>
          {`  Ваш заказ (${cartProducts?.length})`}
        </S.TitleBlock>
        <S.Products>
          {cartProducts?.map((product, i) => (
            <OrderingProduct key={i} product={product} />
          ))}
        </S.Products>

        <S.Container>
          <S.Line />
          <S.SumTitle>Сумма заказа</S.SumTitle>
          <S.PriceItems>
            <S.PriceItem>
              <S.PriceItemName>Товары:</S.PriceItemName>
              <S.PriceItemNumber>{currencyFormat(cartTotal)}</S.PriceItemNumber>
            </S.PriceItem>

            <S.PriceItem>
              <S.PriceItemName>Экспертиза:</S.PriceItemName>
              <S.PriceItemNumber>$0</S.PriceItemNumber>
            </S.PriceItem>

            <S.PriceItem>
              <S.PriceItemName>Доставка:</S.PriceItemName>
              <S.PriceItemNumber>$0</S.PriceItemNumber>
            </S.PriceItem>
          </S.PriceItems>

          <S.AllPriceLine />

          <S.AllPrice>
            <S.AllPriceName>Всего</S.AllPriceName>
            <S.AllPriceNumber>{currencyFormat(cartTotal)}</S.AllPriceNumber>
          </S.AllPrice>
        </S.Container>
      </S.OrderBlock>
    </>
  );
};

export default OrderBlock;
