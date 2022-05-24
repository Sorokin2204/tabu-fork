import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'redux/actions/categories';
import { setIsDisableScroll } from 'redux/reducers/appReducer';
import CategorySteps from './CategorySteps/CategorySteps';
import * as S from './Styled';
import Header from 'components/Molecules/Search/Desktop/Header/Header';

const CategorySelectModal = ({ firstCategory, setFirstCategory, secondCategory, setSecondCategory, thirdCategory, setThirdCategory, active, setActive }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const [step, setStep] = useState(1);
  const isMobile = useSelector((state) => state.app.isMobile);
  const [secondCategories, setSecondCategories] = useState(null);
  const [thirdCategories, setThirdCategories] = useState(null);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const onCategoryClick = (columnNumber, category) => {
    if (columnNumber === 1) {
      setFirstCategory(category);
      setSecondCategories(category?.children);
      setStep(2);
    }

    if (columnNumber === 2) {
      setThirdCategories(category?.children);
      setSecondCategory(category);
      setStep(3);
    }

    if (columnNumber === 3) {
      setThirdCategory(category);
      // setStep(3);
      setActive(false);
      dispatch(setIsDisableScroll(false));
    }
  };
  console.log(thirdCategories);
  return (
    <>
      <S.Background className={active ? 'visible' : 'hidden'} />

      <S.Wrapper className={active ? 'visible' : 'hidden'}>
        <S.Block>
          <S.BlockInside>
            {isMobile ? (
              <div style={{ width: '100vw' }}>
                <Header />
              </div>
            ) : (
              ''
            )}
            {!isMobile && <S.Title>Категория</S.Title>}

            <CategorySteps step={step} setStep={setStep} secondCategories={secondCategories} thirdCategories={thirdCategories} />

            <S.Categories>
              <S.CategoriesCol
                style={{
                  display: isMobile ? (step === 1 ? 'block' : 'none') : 'block',
                }}>
                {categories?.map((category, i) => (
                  <S.Category onClick={() => onCategoryClick(1, category)} key={i} active={firstCategory?.title === category.title ? true : false}>
                    {category?.title}
                  </S.Category>
                ))}
              </S.CategoriesCol>

              {secondCategories && (
                <S.CategoriesColWrapper
                  style={{
                    display: isMobile ? (step === 2 ? 'block' : 'none') : 'block',
                  }}>
                  {secondCategories.length !== 0 ? (
                    <S.CategoriesCol>
                      {secondCategories?.map((category, i) => (
                        <S.Category onClick={() => onCategoryClick(2, category)} key={i} active={secondCategory?.title === category.title ? true : false}>
                          {category?.title}
                        </S.Category>
                      ))}
                    </S.CategoriesCol>
                  ) : (
                    <S.CategoriesEmpty>Пусто</S.CategoriesEmpty>
                  )}
                </S.CategoriesColWrapper>
              )}

              {thirdCategories && (
                <S.CategoriesColWrapper
                  style={{
                    display: isMobile ? (step === 3 ? 'block' : 'none') : 'block',
                  }}>
                  {thirdCategories.length !== 0 ? (
                    <S.CategoriesCol>
                      {thirdCategories?.map((category, i) => (
                        <S.Category onClick={() => onCategoryClick(3, category)} key={i} active={thirdCategory?.title === category.title ? true : false}>
                          {category?.title}
                        </S.Category>
                      ))}
                    </S.CategoriesCol>
                  ) : (
                    <S.CategoriesEmpty>Категорий не найдено</S.CategoriesEmpty>
                  )}
                </S.CategoriesColWrapper>
              )}
            </S.Categories>
          </S.BlockInside>
        </S.Block>
      </S.Wrapper>
    </>
  );
};

export default CategorySelectModal;
