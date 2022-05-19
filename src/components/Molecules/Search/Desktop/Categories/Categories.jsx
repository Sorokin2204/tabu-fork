import { useSelector } from "react-redux";
import * as S from "./Styled";

const Categories = () => {
  const categories = useSelector((state) => state.search.categories);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Category></S.Category>
      </S.Container>
    </S.Wrapper>
  );
};

export default Categories;
