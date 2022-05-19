import * as S from "./Styled";

const SortButtons = (props) => {
  const toggleFilter = () => {
    props.setActiveFilter(true);
    document.body.style.overflow = document.body.style.overflow
      ? null
      : "hidden";
  };

  const toggleSort = () => {
    props.setActiveSort(true);
    document.body.style.overflow = document.body.style.overflow
      ? null
      : "hidden";
  };

  return (
    <S.Buttons>
      <S.Button onClick={toggleSort}>Сортировка</S.Button>
      <S.Button onClick={toggleFilter}>Фильтр по</S.Button>
    </S.Buttons>
  );
};

export default SortButtons;
