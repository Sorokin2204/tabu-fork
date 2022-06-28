import CartProductCard from 'components/Molecules/Cart/CartComponent/Left/CartProductCard/CartProductCard';
import { useSelector } from 'react-redux';
import * as S from './Styled';
import MobileCartProductCard from '../../../Molecules/Cart/CartComponent/Left/CartProductCard/MobileCartProductCard';
const ProfileProducts = ({ products, type }) => {
  const isMobile = useSelector((state) => state.app.isMobile);
  console.log(type);
  return (
    <S.Wrapper>
      {isMobile ? (
        <>{products?.length !== 0 ? products?.map((product) => <MobileCartProductCard key={product.id} product={product} type={type} />) : <S.NotFoundText>Товаров нет</S.NotFoundText>}</>
      ) : (
        <> {products?.length !== 0 ? products?.map((product) => <CartProductCard key={product.id} profile product={product} type={type} />) : <S.NotFoundText>Товаров нет</S.NotFoundText>}</>
      )}
    </S.Wrapper>
  );
};

export default ProfileProducts;
