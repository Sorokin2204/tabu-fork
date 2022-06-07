import { URL } from 'config';
import { currencyFormat } from 'utils/currencyFormat';
import * as S from './Styled';

const OrderingProduct = ({ product }) => {
  let productTitle = product?.title;
  let productDescription = product?.description;
  let productSize = product?.size?.title;
  let productPrice = product?.price;

  if (productDescription.length > 76) {
    productDescription = productDescription.slice(0, 76) + ' ...';
  }

  return (
    <S.Wrapper>
      <S.Image src={URL + product.images[0]?.image} />
      <S.Details>
        <S.Title>{productTitle}</S.Title>
        <S.Description>{productDescription}</S.Description>
        <S.Size>Размер: {productSize}</S.Size>
        <S.Price>{currencyFormat(productPrice)}</S.Price>
      </S.Details>
    </S.Wrapper>
  );
};

export default OrderingProduct;
