import * as S from './Styled';
import { useDispatch, useSelector } from 'react-redux';
import { hideMobileSidebar, setMenuCategory } from 'redux/reducers/appReducer';
import { useNavigate } from 'react-router-dom';
import { getProductsByCategory } from '../../../../../../redux/actions/product';

const MobileCategory = (props) => {
  const dispatch = useDispatch();
  const menuCategory = useSelector((state) => state.app.menuCategory);
  let navigate = useNavigate();
  const parentCategory = useSelector((state) => state.categories.category);
  const onCategoryClick = (category) => {
    let link = !menuCategory?.parentCategory?.brandParam ? `/categories/${category.slug}` : `/categories/${parentCategory.slug}?brand=${category.slug}`;

    navigate(link);
    dispatch(hideMobileSidebar());
  };

  const onClickBack = () => {
    dispatch(setMenuCategory({ ...menuCategory, active: false }));
  };

  return (
    <S.Wrapper {...props}>
      <S.Back onClick={() => onClickBack()}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 16L10 12L14 8" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <S.BackText>Назад</S.BackText>
      </S.Back>
      <S.Title
        onClick={() => {
          let linkParent = `/categories/${menuCategory?.parentCategory?.slug}`;
          navigate(linkParent);
          dispatch(hideMobileSidebar());
        }}>
        {!menuCategory.parentCategory ? '' : menuCategory.parentCategory.title}
      </S.Title>
      <S.Categories>{!menuCategory.parentCategory ? '' : menuCategory.parentCategory.children.map((subcat, i) => <S.Category onClick={() => onCategoryClick(subcat)}>{subcat.title}</S.Category>)}</S.Categories>
    </S.Wrapper>
  );
};

export default MobileCategory;
