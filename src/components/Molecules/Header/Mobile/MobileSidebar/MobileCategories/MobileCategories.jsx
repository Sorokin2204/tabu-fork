import * as S from './Styled';
import { useDispatch, useSelector } from 'react-redux';
import { hideMobileSidebar, setMenuCategory } from 'redux/reducers/appReducer';
import { useNavigate } from 'react-router-dom';

const MobileCategories = (props) => {
  const dispatch = useDispatch();
  const main_category = useSelector((state) => state.categories.main_category);
  const brandOptions = useSelector((state) => state.filterOptions.brandOptions);
  const navigate = useNavigate();
  return (
    <S.Categories {...props}>
      {!main_category.children
        ? ''
        : main_category.children.map((category) => (
            <S.Category onClick={() => dispatch(setMenuCategory({ active: true, parentCategory: category }))}>
              {category.title}
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L1 9" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </S.Category>
          ))}
      <S.Category
        onClick={() => {
          dispatch(hideMobileSidebar());
          navigate(`/categories/${main_category?.slug}?news=true`);
        }}>
        Новинки
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L1 9" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </S.Category>
      <S.Category
        onClick={() =>
          dispatch(
            setMenuCategory({
              active: true,
              parentCategory: {
                slug: `${main_category?.slug}`,
                title: 'Бренды',
                brandParam: true,
                children: brandOptions?.map((brand) => ({ slug: brand.title, title: brand.title })),
              },
            }),
          )
        }>
        Бренды
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L1 9" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </S.Category>
    </S.Categories>
  );
};

export default MobileCategories;
