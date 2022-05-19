import { URL } from "config";
import * as S from "./Styled";

const OrderingProduct = ({ product }) => {
  const productImage = product.images.filter((x) => x.main_image === true);
  let productImageUrl = URL + productImage[0]?.image;
  let productTitle = product?.title;
  let productDescription = product?.description;
  let productSize = product?.size[0]?.title;
  let productPrice = product?.price;

  if (productDescription.length > 76) {
    productDescription = productDescription.slice(0, 76) + " ...";
  }

  return (
    <S.Wrapper>
      <S.Image src={productImageUrl} />
      <S.Details>
        <S.Title>{productTitle}</S.Title>
        <S.Description>{productDescription}</S.Description>
        <S.Size>Размер: {productSize}</S.Size>
        <S.Price>${productPrice}</S.Price>
      </S.Details>
    </S.Wrapper>
  );
};

export default OrderingProduct;
