import { useDispatch } from 'react-redux';
import { setShowMobileFilterModal, setShowMobileSortModal } from 'redux/reducers/appReducer';
import * as S from './Styled';

const SortButtons = (props) => {
  const dispatch = useDispatch();

  return (
    <S.Buttons>
      <S.Button onClick={() => dispatch(setShowMobileSortModal(true))}>Сортировка</S.Button>
      <S.Button onClick={() => dispatch(setShowMobileFilterModal(true))}>Фильтр по</S.Button>
    </S.Buttons>
  );
};

export default SortButtons;
