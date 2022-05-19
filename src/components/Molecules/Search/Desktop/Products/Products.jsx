import { useSelector } from "react-redux";
import Product from "./Product/Product";
import * as S from "./Styled";
import { URL } from "config";

const Products = () => {
  const searchProducts = useSelector((state) => state.search.products);

  return (
    <S.Wrapper>
      <S.Container>
        {searchProducts?.results?.map((product, i) => (
          <Product
            key={i}
            title={product.title}
            id={product.id}
            img={URL + product.images[0].image}
          />
        ))}
      </S.Container>
    </S.Wrapper>
  );
};

export default Products;
