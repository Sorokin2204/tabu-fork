import { useSearchParams } from 'react-router-dom';
import * as S from './Styled';

const BreadCrumbs = ({ list }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <S.BreadCrumbs>
      {list.map((item, index) => {
        if (index === list.length - 1) {
          return <S.ActiveCrumb>{searchParams.get('news') ? 'Новинки' : item}</S.ActiveCrumb>;
        } else {
          return item + ' / ';
        }
      })}
      {/* Главная / Для нее / <S.ActiveCrumb>&nbsp;Новинки</S.ActiveCrumb> */}
    </S.BreadCrumbs>
  );
};

export default BreadCrumbs;
