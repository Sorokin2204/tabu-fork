import { useDispatch, useSelector } from 'react-redux';
import { setShowMobileSortModal } from 'redux/reducers/appReducer';
import { setProducts } from 'redux/reducers/productReducer';
import * as S from './Styled';

const MobileSort = (props) => {
  const showMobileSortModal = useSelector((state) => state.app.showMobileSortModal);
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const onUp = () => {
    let newProducts = [...products];

    dispatch(setProducts(newProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))));
    dispatch(setShowMobileSortModal(false));
  };

  const onLow = () => {
    let newProducts = [...products];

    dispatch(setProducts(newProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))));
    dispatch(setShowMobileSortModal(false));
  };

  return (
    <S.MobileSort className={showMobileSortModal ? 'show_mobile_filter' : ''}>
      <S.Header>
        Сортировка
        <svg onClick={() => dispatch(setShowMobileSortModal(false))} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 7L17 17" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 17L17 7" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </S.Header>
      <S.ListWrapper>
        <S.List>
          <S.Item>Сначала новые</S.Item>
          <S.Item onClick={onLow}>По убыванию цены</S.Item>
          <S.Item onClick={onUp}>По возрастанию цены</S.Item>
          <S.Item>По величине скидки</S.Item>
        </S.List>
      </S.ListWrapper>
    </S.MobileSort>
  );
};

export default MobileSort;
