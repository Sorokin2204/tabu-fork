import { useSelector } from 'react-redux';
import * as S from './Styled';

const GeneralInformation = () => {
  const openedProduct = useSelector((state) => state.product.openedProduct);

  return (
    <S.Container>
      <S.Title>Общая информация</S.Title>
      <S.Columns>
        <S.LeftColumn>
          <S.NameRow>Категория</S.NameRow>
          <S.NameRow>Бренд</S.NameRow>
          <S.NameRow>Материал</S.NameRow>
          <S.NameRow>Цвет</S.NameRow>
        </S.LeftColumn>
        <S.RightColumn>
          <S.ValueRow>{openedProduct ? (openedProduct.category ? openedProduct.category.title : '') : ''}</S.ValueRow>
          <S.ValueRow>{openedProduct ? (openedProduct.brand ? openedProduct.brand.title : '') : ''}</S.ValueRow>
          <S.ValueRow>{openedProduct ? (openedProduct.material ? openedProduct.material.title : '') : ''}</S.ValueRow>
          <S.ValueRow>{openedProduct ? (openedProduct.color ? openedProduct.color.title : '') : ''}</S.ValueRow>
        </S.RightColumn>
      </S.Columns>
    </S.Container>
  );
};

export default GeneralInformation;
