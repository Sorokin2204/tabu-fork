import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "redux/actions/categories";
import CategorySteps from "./CategorySteps/CategorySteps";
import * as S from "./Styled";

const CategorySelectModal = ({
  firstCategory,
  setFirstCategory,
  secondCategory,
  setSecondCategory,
  thirdCategory,
  setThirdCategory,
  active,
  setActive,
}) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const [step, setStep] = useState();

  const [secondCategories, setSecondCategories] = useState(null);
  const [thirdCategories, setThirdCategories] = useState(null);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const onCategoryClick = (columnNumber, category) => {
    if (columnNumber === 1) {
      setFirstCategory(category);
      setSecondCategories(category?.children);
    }

    if (columnNumber === 2) {
      setThirdCategories(category?.children);
      setSecondCategory(category);
      setStep(2);
    }

    if (columnNumber === 3) {
      setThirdCategory(category);
      setStep(3);
      setActive(false);
    }
  };

  return (
    <S.Wrapper className={active ? "visible" : "hidden"}>
      <S.Block>
        <S.BlockInside>
          <S.Title>Категория</S.Title>
          <CategorySteps step={step} setStep={setStep} />

          <S.Categories>
            <S.CategoriesCol>
              {categories?.map((category, i) => (
                <S.Category
                  onClick={() => onCategoryClick(1, category)}
                  key={i}
                  active={
                    firstCategory?.title === category.title ? true : false
                  }
                >
                  {category?.title}
                </S.Category>
              ))}
            </S.CategoriesCol>

            <S.Line />

            {secondCategories && (
              <S.CategoriesCol>
                {secondCategories?.map((category, i) => (
                  <S.Category
                    onClick={() => onCategoryClick(2, category)}
                    key={i}
                    active={
                      secondCategory?.title === category.title ? true : false
                    }
                  >
                    {category?.title}
                  </S.Category>
                ))}
              </S.CategoriesCol>
            )}

            <S.Line />

            {thirdCategories && (
              <S.CategoriesCol>
                {thirdCategories?.map((category, i) => (
                  <S.Category
                    onClick={() => onCategoryClick(3, category)}
                    key={i}
                    active={
                      thirdCategory?.title === category.title ? true : false
                    }
                  >
                    {category?.title}
                  </S.Category>
                ))}
              </S.CategoriesCol>
            )}
          </S.Categories>
        </S.BlockInside>
      </S.Block>
      <S.Background onClick={() => setActive(false)} />
    </S.Wrapper>
  );
};

export default CategorySelectModal;
