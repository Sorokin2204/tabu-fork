import * as S from './Styled';
import { useDispatch, useSelector } from 'react-redux';
import { hideMobileSidebar, setIsDisableScroll, setShowAuthModal, setShowRegModal, showMobileSidebar } from '../../../../../redux/reducers/appReducer';
import MobileCategory from './MobileCategory/MobileCategory';
import MobileCategories from './MobileCategories/MobileCategories';
import { setMainCategory } from 'redux/reducers/categoriesReducer';
import { useNavigate } from 'react-router-dom';

const MobileSidebar = (props) => {
  const dispatch = useDispatch();
  const menuCategory = useSelector((state) => state.app.menuCategory);
  const categories = useSelector((state) => state.categories.categories);
  const main_category = useSelector((state) => state.categories.main_category);
  const isAuth = useSelector((state) => state.user.isAuth);
  const onTabClick = (category) => {
    dispatch(setMainCategory(category));
  };
  const navigate = useNavigate();
  return (
    <S.Wrapper {...props}>
      {/* <S.Background active={showMobileSidebar} onClick={() => dispatch(hideMobileSidebar())} /> */}

      <S.AbsoluteSidebar>
        <S.MobileSidebar>
          <S.SidebarHead>
            {isAuth ? (
              <S.Profile
                onClick={() => {
                  navigate('/profile');
                  dispatch(hideMobileSidebar());
                }}>
                Мой профиль
              </S.Profile>
            ) : (
              <S.Login
                onClick={() => {
                  dispatch(setIsDisableScroll(true));
                  dispatch(setShowAuthModal(true));
                  dispatch(setShowRegModal(true));
                  dispatch(hideMobileSidebar());
                }}>
                Регистрация / Войти
              </S.Login>
            )}
          </S.SidebarHead>

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
