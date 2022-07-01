import { optionsSort } from 'pages/CategoryPage/CategoryPage';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory } from 'redux/actions/product';
import { setShowMobileSortModal } from 'redux/reducers/appReducer';
import { setTypeSort } from 'redux/reducers/filterOptionsReducer';
import { setProducts } from 'redux/reducers/productReducer';
import * as S from './Styled';

const MobileSort = (props) => {
  const showMobileSortModal = useSelector((state) => state.app.showMobileSortModal);
  const products = useSelector((state) => state.product.products);
  const { typeSort } = useSelector((state) => state.filterOptions);

  const dispatch = useDispatch();

  const onChangeType = (item) => {
    dispatch(setTypeSort(item));
    dispatch(setShowMobileSortModal(false));
    dispatch(getProductsByCategory({ page: 1 }));
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
          {optionsSort.map((item) => (
            <S.Item active={typeSort?.slug === item.slug} onClick={() => onChangeType(item)}>
              {item.name}
            </S.Item>
          ))}
        </S.List>
      </S.ListWrapper>
    </S.MobileSort>
  );
};

export default MobileSort;
