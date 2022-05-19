import * as S from "./Styled";
import product from "assets/img/products/1.png";

const Product = (props) => {
  return (
    <S.Product {...props}>
      <S.Image src={props?.img} />
      <S.Title>{props?.title}</S.Title>
    </S.Product>
  );
};

export default Product;
