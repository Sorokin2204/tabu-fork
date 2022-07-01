import * as S from './Styled';
import Card from '../../../Card/Card';
import product1 from 'assets/img/products/1.png';
import { useSelector } from 'react-redux';
import { URL } from 'config';

const MobileNewProducts = () => {
  const newProducts = useSelector((state) => state.product.newProducts);

  return (
    <S.Wrapper>
      <a href="/categories/Новинки">
        {' '}
        <S.Title>Новинки</S.Title>
      </a>
      <S.Title></S.Title>

      <S.Products>
        {newProducts?.results?.map((product, i) => (
          <Card key={i} title={product.title} description={product.description} price={product.price} img={product.images[0].image} product_id={product.id} />
        ))}
      </S.Products>
    </S.Wrapper>
  );
};

export default MobileNewProducts;
