import { useEffect, useState } from 'react';
import * as S from './Styled';
import Button from '../../../Atoms/Button';
import TopHeader from './TopHeader/TopHeader';
import BottomHeader from './BottomHeader/BottomHeader';
import HoverMenu from './HoverMenu/HoverMenu';
import OpenedProfile from './OpenedProfile';
import Expand from 'assets/svg/expand_profile.svg';
import { useDispatch, useSelector } from 'react-redux';
import { hideHoverMenu, hideProfile, setShowAuthModal, setShowRegModal, showProfile } from 'redux/reducers/appReducer';
import Logo from 'assets/img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import ImageBlock from 'components/Atoms/ImageBlock';
import { getCategories } from 'redux/actions/categories';
import { setMainCategory } from 'redux/reducers/categoriesReducer';
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler';
import { updateCountCart, updateCountFavorite } from 'redux/reducers/productReducer';
import ProfileIcon from 'assets/svg/profile.svg';
import { URL } from 'config';
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { countCart, getFavoritesData, countFavorite } = useSelector((state) => state.product);
  const categories = useSelector((state) => state.categories.categories);
  const main_category = useSelector((state) => state.categories.main_category);
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const showHover = useSelector((state) => state.app.showHoverMenu);
  const profileShow = useSelector((state) => state.app.showProfile);

  const isAuth = useSelector((state) => state.user.isAuth);
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <TopHeader />
      <S.StyledHeader onMouseEnter={() => dispatch(hideHoverMenu())}>
        <S.Categories>
          {categories.map((category, i) => (
            <S.Category key={i} active={main_category.title === category?.title ? true : false} onClick={() => dispatch(setMainCategory(category))}>
              {category.title}
            </S.Category>
          ))}
        </S.Categories>
        <S.Logo>
          <Link to="/">
            <ImageBlock src={Logo} />
          </Link>
        </S.Logo>
        <S.UserBlock>
          <Button
            outlined={true}
            width="149px"
            onClick={() => {
              if (isAuth) {
                navigate('/sellproduct');
              } else {
                dispatch(setShowAuthModal(true));
                dispatch(setShowRegModal(true));
              }
            }}>
            Продать товар
          </Button>

          <S.Cart onClick={() => navigate('/cart')}>
            <svg width={17} height={18} viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.5 4.5H14.5L15.5 17.5H1.5L2.5 4.5Z" stroke="black" strokeLinecap="round" />
              <path d="M5.5 6.5V3.5C5.5 1.84315 6.84315 0.5 8.5 0.5C10.1569 0.5 11.5 1.84315 11.5 3.5V6.5" stroke="black" strokeLinecap="round" />
            </svg>
            {countCart === 0 ? '' : <S.CartNumber>{countCart}</S.CartNumber>}
          </S.Cart>
          <S.Favorite>
            <svg
              width={21}
              height={18}
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                if (isAuth) {
                  navigate('/profile/wishlist');
                } else {
                  dispatch(setShowAuthModal(true));
                  dispatch(setShowRegModal(true));
                }
              }}>
              <path
                d="M18.5497 2.12403C17.493 1.08335 16.0694 0.5 14.5861 0.5C13.1031 0.5 11.6795 1.08335 10.6228 2.12403C10.5288 2.21797 10.4374 2.31538 10.3488 2.41643C10.2601 2.31556 10.1687 2.21797 10.0748 2.12403C9.01805 1.08335 7.59448 0.5 6.1114 0.5C4.62812 0.5 3.20456 1.08335 2.14785 2.12403C1.09351 3.16345 0.5 4.58208 0.5 6.06264C0.5 7.54321 1.09351 8.96184 2.14785 10.0013L10.3486 17.7952L18.5494 9.991C19.6012 8.95196 20.1933 7.53496 20.1933 6.05621C20.1933 4.57765 19.6012 3.16065 18.5494 2.12161L18.5497 2.12403ZM17.824 9.24163L10.3489 16.3541L2.88174 9.24955C2.02675 8.40696 1.54538 7.25666 1.54538 6.05612C1.54538 4.85576 2.02675 3.70546 2.88174 2.86268C3.85162 1.89756 5.20233 1.41688 6.56382 1.55238C7.92549 1.68783 9.15498 2.42503 9.91582 3.56219L10.3491 4.20963L10.7824 3.56237V3.56219C10.9509 3.3104 11.1442 3.07606 11.3592 2.86269C12.22 2.01497 13.3798 1.53998 14.5879 1.53998C15.7959 1.53998 16.9557 2.01497 17.8165 2.86269C18.6691 3.70509 19.1489 4.85376 19.1489 6.0523C19.1489 7.25084 18.6691 8.39928 17.8165 9.24173L17.824 9.24163Z"
                fill="black"
              />
            </svg>

            {getFavoritesData?.length >= 1 && <S.FavoriteNumber>{getFavoritesData?.length ?? ''}</S.FavoriteNumber>}
          </S.Favorite>
          {/* {!profileShow ? (
            <S.Profile onClick={() => dispatch(showProfile())}>
              Мой Профиль
              <img src={Expand} />
            </S.Profile>
          ) : (
            <OpenedProfile id="profile_menu" onClick={() => dispatch(hideProfile())} />
          )} */}
          {isAuth ? (
            <OutsideClickHandler
              onOutsideClick={() => {
                dispatch(hideProfile());
              }}>
              <S.AvatarProfile
                empty={!currentUser?.avatar}
                src={currentUser?.avatar ? `${URL}${currentUser?.avatar}` : ProfileIcon}
                onClick={() => {
                  if (profileShow) {
                    dispatch(hideProfile());
                  } else {
                    dispatch(showProfile());
                  }
                }}></S.AvatarProfile>
              <OpenedProfile id="profile_menu" onClick={() => dispatch(hideProfile())} />
            </OutsideClickHandler>
          ) : (
            <Button
              style={{ marginLeft: '34px' }}
              topGreen
              width={'80px'}
              onClick={() => {
                dispatch(setShowAuthModal(true));
                dispatch(setShowRegModal(true));
                dispatch(hideProfile());
              }}>
              Войти
            </Button>
          )}
        </S.UserBlock>
      </S.StyledHeader>
      <BottomHeader />
      <HoverMenu />
      {showHover && <S.Background />}
    </>
  );
};

export default Header;
