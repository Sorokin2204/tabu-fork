import * as S from './Styled';
import { useDispatch, useSelector } from 'react-redux';
import { hideMobileSidebar, setShowAuthModal } from '../../../../../redux/reducers/appReducer';
import MobileCategory from './MobileCategory/MobileCategory';
import MobileCategories from './MobileCategories/MobileCategories';
import { setMainCategory } from 'redux/reducers/categoriesReducer';

const MobileSidebar = (props) => {
  const dispatch = useDispatch();
  const menuCategory = useSelector((state) => state.app.menuCategory);
  const categories = useSelector((state) => state.categories.categories);
  const main_category = useSelector((state) => state.categories.main_category);

  const onTabClick = (category) => {
    dispatch(setMainCategory(category));
  };

  return (
    <S.Wrapper {...props}>
      <S.Background onClick={() => dispatch(hideMobileSidebar())} />
      <S.AbsoluteSidebar>
        <S.MobileSidebar>
          <S.Login
            onClick={() => {
              dispatch(setShowAuthModal(true));
              dispatch(hideMobileSidebar());
            }}>
            Регистрация / Войти
          </S.Login>
          <S.Tabs>
            {categories.map((category, i) => (
              <S.Tab key={i} onClick={() => onTabClick(category)} active={main_category.title === category.title ? true : false}>
                {category.title}
              </S.Tab>
            ))}
          </S.Tabs>

          {menuCategory.active ? '' : <MobileCategories />}
          <MobileCategory active={menuCategory.active ? true : false} />

          <S.Space />
          <div>
            <S.Favorite>Избранные</S.Favorite>
          </div>
        </S.MobileSidebar>
      </S.AbsoluteSidebar>
    </S.Wrapper>
  );
};

export default MobileSidebar;
