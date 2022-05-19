import { useSelector } from "react-redux";
import OrderingProduct from "../OrderingProduct/OrderingProduct";
import * as S from "./Styled";

const OrderBlock = () => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  return (
    <S.OrderBlock>
      <S.TitleBlock>Ваш заказ (2)</S.TitleBlock>
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
            <S.PriceItemNumber>$ 2178</S.PriceItemNumber>
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
          <S.AllPriceNumber>$2178</S.AllPriceNumber>
        </S.AllPrice>
      </S.Container>
    </S.OrderBlock>
  );
};

export default OrderBlock;
