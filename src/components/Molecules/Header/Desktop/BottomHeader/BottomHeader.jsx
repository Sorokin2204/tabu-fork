import * as S from './Styled';
import { useDispatch, useSelector } from 'react-redux';
import { hideHoverMenu, setIsDisableScroll, showHoverMenu } from 'redux/reducers/appReducer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getCategories } from 'redux/actions/categories';
import { setCategory, setMainCategory } from 'redux/reducers/categoriesReducer';
import { getProductsByCategory } from 'redux/actions/product';
import { setShowSearch } from 'redux/reducers/searchReducer';

const BottomHeader = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const main_category = useSelector((state) => state.categories.main_category);
  const brandOptions = useSelector((state) => state.filterOptions.brandOptions);
  const onHover = (category) => {
    dispatch(setCategory(category));
    dispatch(showHoverMenu());
  };

  return (
    <S.BottomHeader>
      <S.BottomCategories>
        {!main_category.children && brandOptions ? (
          ''
        ) : (
          <>
            {' '}
            {main_category.children.map((category, i) => (
              <S.BottomCategory
                key={i}
                onMouseEnter={() => {
                  onHover(main_category.children[i]);
                }}>
                <Link
                  onClick={() => {
                    dispatch(hideHoverMenu());
                  }}
                  to={`/categories/${category.slug}`}>
                  {category.title}
                </Link>
              </S.BottomCategory>
            ))}
            <S.BottomCategory
              key={123456}
              onMouseEnter={() => {
                onHover({
                  slug: `${main_category?.slug}`,
                  title: 'Бренды',
                  brandParam: true,
                  children: brandOptions?.map((brand) => ({ slug: brand.title, title: brand.title })),
                });
              }}>
              <Link
                onClick={() => {
                  dispatch(hideHoverMenu());
                }}
                to={`/categories/${main_category?.slug}`}
                replace>
                Бренды
              </Link>
            </S.BottomCategory>
          </>
        )}
      </S.BottomCategories>
      <S.SearchBtn
        onClick={() => {
          dispatch(setShowSearch(true));
          dispatch(setIsDisableScroll(true));
        }}>
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.33927 2.33989L9.42098 2.42415C11.0279 4.08132 11.2916 6.62316 10.0589 8.57485L9.88757 8.84615C7.93089 11.292 4.17859 11.3247 2.14686 8.94083C0.417167 6.91133 0.606198 3.83507 2.60805 2.07344C4.56365 0.352509 7.52582 0.469761 9.33927 2.33989Z" fill="#025B37" />
          <path
            d="M9.88757 8.84615V8.84615C7.93089 11.292 4.17858 11.3247 2.14686 8.94083V8.94083C0.417167 6.91133 0.606198 3.83507 2.60805 2.07344V2.07344C4.56365 0.35251 7.52581 0.469762 9.33927 2.33989L9.42098 2.42415C11.0279 4.08132 11.2916 6.62316 10.0589 8.57485L9.88757 8.84615ZM9.88757 8.84615L15 12.6331"
            stroke="white"
          />
        </svg>
      </S.SearchBtn>
    </S.BottomHeader>
  );
};

export default BottomHeader;
