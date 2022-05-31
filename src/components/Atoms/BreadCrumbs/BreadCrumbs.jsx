import * as S from './Styled';

const BreadCrumbs = ({ list }) => {
  return (
    <S.BreadCrumbs>
      {list.map((item, index) => {
        if (index === list.length - 1) {
          return <S.ActiveCrumb>{item}</S.ActiveCrumb>;
        } else {
          return item + ' / ';
        }
      })}
      {/* Главная / Для нее / <S.ActiveCrumb>&nbsp;Новинки</S.ActiveCrumb> */}
    </S.BreadCrumbs>
  );
};

export default BreadCrumbs;
