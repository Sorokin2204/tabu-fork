import * as S from "./Styled";
import Card from "../../../Card/Card";
import product1 from "assets/img/products/1.png";
import { useSelector } from "react-redux";

const MobileNowInTrand = () => {
  const trands = useSelector((state) => state.product.trends);

  return (
    <S.Wrapper>
      <a href="/categories/Сейчас в тренде">
        {" "}
        <S.Title> Сейчас в тренде</S.Title>
      </a>

      <S.Products>
        {trands?.results?.map((product, i) => (
          <Card
            key={i}
            title={product.title}
            description={product.description}
            price={product.price}
            img={URL + product.images[0].image}
            product_id={product.id}
          />
        ))}
      </S.Products>
    </S.Wrapper>
  );
};

export default MobileNowInTrand;
