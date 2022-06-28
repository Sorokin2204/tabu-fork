import * as S from './Styled';
import Avatar from 'assets/img/Profile/avatar.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import EditProfileModal from '../EditProfileModal/EditProfileModal';
import { useState } from 'react';
import { setIsDisableScroll, setShowChangePassModal, setShowChangePassSuccessModal, setShowEditUserModal, setShowEditUserSuccessModal, setShowLogoutModal } from 'redux/reducers/appReducer';
import MessageModal from 'components/Molecules/ProductPage/ThanksModal/ThanksModal';
import { API_URL, URL } from 'config';
import _ from 'lodash';
import FormInput from 'components/Molecules/Form/FormInput/FormInput';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { changePassword } from 'redux/actions/user';
import Loading from 'components/Loading/Loading';
import { changePasswordSuccess } from 'redux/reducers/userReducer';
import EditPasswordModal from '../EditPasswordModal/EditPasswordModal';
const ProfileMenu = (props) => {
  const user = useSelector((state) => state.user.currentUser);
  const isMobile = useSelector((state) => state.app.isMobile);
  const { showEditUserSuccessModal, showChangePassModal, showChangePassSuccessModal } = useSelector((state) => state.app);
  const { countFavorite } = useSelector((state) => state.product);
  const { changePasswordLoading, changePasswordData, changePasswordError } = useSelector((state) => state.user);
  const dispath = useDispatch();
  const {
    currentUser: { product_set, products_count, favorites_count, purchased_count },
    activeTab,
  } = useSelector((state) => state.user);
  return (
    <div>
      <S.Wrapper {...props}>
        <EditProfileModal />
        <EditPasswordModal />
        <MessageModal open={showChangePassSuccessModal} onClose={() => dispath(setShowChangePassSuccessModal(false))} title={'Пароль успешно изменен'} textFirstBtn={'Отлично'} onClickFirstBtn={() => dispath(setShowChangePassSuccessModal(false))} />
        <MessageModal open={showEditUserSuccessModal} onClose={() => dispath(setShowEditUserSuccessModal(false))} title={'Данные профиля успешно обнавлены'} textFirstBtn={'Отлично'} onClickFirstBtn={() => dispath(setShowEditUserSuccessModal(false))} />
        <S.WrapperInner>
          {user?.avatar ? <S.Avatar src={`${URL + user?.avatar}`} /> : <S.AvatarText>{user?.fio?.length ? user?.fio[0]?.toUpperCase() : user?.company_name?.length ? user?.company_name[0]?.toUpperCase() : ''}</S.AvatarText>}
          {/* <S.Name>{user?.fio}</S.Name> */}
          <S.Title>{user?.fio ? user?.fio : user?.company_name}</S.Title>
          <S.Role>{user?.user_type === 0 ? 'Частный продавец' : 'Компания'}</S.Role>
          <S.Position>
            <S.PositionIcon>
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width={12} height={12} fill="white" />
                <path d="M9.5 4.5C9.5 7.76142 6 11 6 11C6 11 2.5 7.76142 2.5 4.5C2.5 2.23858 4.067 1 6 1C7.933 1 9.5 2.25 9.5 4.5Z" stroke="#717171" strokeLinecap="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M6 3C6.82843 3 7.5 3.67157 7.5 4.5C7.5 5.32843 6.82843 6 6 6C5.17157 6 4.5 5.32843 4.5 4.5C4.5 3.67157 5.17157 3 6 3Z" stroke="#717171" strokeLinecap="round" />
              </svg>
            </S.PositionIcon>
            {!user?.city && !user?.country ? 'Не указано' : `${user?.country}${user?.city ? `,${user?.city}` : ''}`}
          </S.Position>

          <S.Button
            onClick={() => {
              dispath(setShowEditUserModal(true));
            }}>
            <S.EditIcon>
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0H0V12H12V0Z" fill="white" fillOpacity="0.01" />
                <path d="M1.32819 10.876L3.44945 10.8761L11.2276 3.09788L9.1063 0.976562L1.32812 8.75473L1.32819 10.876Z" stroke="white" strokeLinejoin="round" />
                <path d="M6.98828 3.09766L9.10961 5.21898" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </S.EditIcon>
            Редактировать профиль
          </S.Button>

          <S.Menu>
            <NavLink to="/profile/orders" className={({ isActive }) => (isActive && !isMobile ? 'profile_menu_item active' : 'profile_menu_item')}>
              <S.ItemTitle>Все заказы</S.ItemTitle>
              <S.ItemNumber>{purchased_count}</S.ItemNumber>
            </NavLink>
            <NavLink to="/profile/sellitems" className={({ isActive }) => (isActive && !isMobile ? 'profile_menu_item active' : 'profile_menu_item')}>
              <S.ItemTitle>Товары на продажу</S.ItemTitle>
              <S.ItemNumber>{products_count}</S.ItemNumber>
            </NavLink>
            <NavLink to="/profile/wishlist" className={({ isActive }) => (isActive && !isMobile ? 'profile_menu_item active' : 'profile_menu_item')}>
              <S.ItemTitle>Избранное</S.ItemTitle>
              <S.ItemNumber>{favorites_count}</S.ItemNumber>
            </NavLink>

            <S.Item logout onClick={() => dispath(setShowLogoutModal(true))}>
              <S.ItemTitle>Выйти</S.ItemTitle>
            </S.Item>
          </S.Menu>
        </S.WrapperInner>
      </S.Wrapper>
    </div>
  );
};

export default ProfileMenu;
