import { useSelector } from 'react-redux';
import * as S from './Styled';

const Details = () => {
  const { openedProduct } = useSelector((state) => state.product);

  return (
    openedProduct?.details_list?.length !== 0 && (
      <S.Container>
        <S.Title>ДЕТАЛИ ПРОДУКТА</S.Title>
        <S.List>
          <ul>
            {openedProduct?.details_list?.map((item) => (
              <li>{item.title}</li>
            ))}
          </ul>
        </S.List>
      </S.Container>
    )
  );
};

export default Details;
