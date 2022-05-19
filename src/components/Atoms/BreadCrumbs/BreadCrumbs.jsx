import * as S from "./Styled";

const BreadCrumbs = () => {
  return (
    <S.BreadCrumbs>
      Главная / Для нее / <S.ActiveCrumb>&nbsp;Новинки</S.ActiveCrumb>
    </S.BreadCrumbs>
  );
};

export default BreadCrumbs;
