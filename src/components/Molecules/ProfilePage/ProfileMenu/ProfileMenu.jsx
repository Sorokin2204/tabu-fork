import * as S from "./Styled";
import Avatar from "assets/img/Profile/avatar.jpg";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { useState } from "react";

const ProfileMenu = (props) => {
  const user = useSelector((state) => state.user.currentUser);
  const [showEdit, setShowEdit] = useState();

  return (
    <div>
      <S.Wrapper {...props}>
        <EditProfileModal show={showEdit} onClose={setShowEdit} />

        <S.WrapperInner>
          {user?.avatar ? (
            <S.Avatar src={Avatar} />
          ) : (
            <S.AvatarText>
              {user?.first_name?.length
                ? user?.first_name[0]?.toUpperCase()
                : ""}
            </S.AvatarText>
          )}

          <S.Title>{user?.first_name}</S.Title>
          <S.Role>
            {user?.user_type === 0 ? "Частный продавец" : "Компания"}
          </S.Role>
          <S.Position>
            <S.PositionIcon>
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={12} height={12} fill="white" />
                <path
                  d="M9.5 4.5C9.5 7.76142 6 11 6 11C6 11 2.5 7.76142 2.5 4.5C2.5 2.23858 4.067 1 6 1C7.933 1 9.5 2.25 9.5 4.5Z"
                  stroke="#717171"
                  strokeLinecap="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 3C6.82843 3 7.5 3.67157 7.5 4.5C7.5 5.32843 6.82843 6 6 6C5.17157 6 4.5 5.32843 4.5 4.5C4.5 3.67157 5.17157 3 6 3Z"
                  stroke="#717171"
                  strokeLinecap="round"
                />
              </svg>
            </S.PositionIcon>
            Алматы Казахстан
          </S.Position>

          <S.Button onClick={() => setShowEdit(true)}>
            <S.EditIcon>
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0H0V12H12V0Z" fill="white" fillOpacity="0.01" />
                <path
                  d="M1.32819 10.876L3.44945 10.8761L11.2276 3.09788L9.1063 0.976562L1.32812 8.75473L1.32819 10.876Z"
                  stroke="white"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.98828 3.09766L9.10961 5.21898"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </S.EditIcon>
            Редактировать профиль
          </S.Button>

          <S.Menu>
            <NavLink
              to="/profile/"
              className={({ isActive }) =>
                isActive ? "profile_menu_item active" : "profile_menu_item"
              }
            >
              <S.ItemTitle>Все заказы</S.ItemTitle>
              <S.ItemNumber>12</S.ItemNumber>
            </NavLink>
            <NavLink
              to="/profile/sellitems"
              className={({ isActive }) =>
                isActive ? "profile_menu_item active" : "profile_menu_item"
              }
            >
              <S.ItemTitle>Товары на продажу</S.ItemTitle>
              <S.ItemNumber>3</S.ItemNumber>
            </NavLink>
            <NavLink
              to="/profile/wishlist"
              className={({ isActive }) =>
                isActive ? "profile_menu_item active" : "profile_menu_item"
              }
            >
              <S.ItemTitle>Избранное</S.ItemTitle>
              <S.ItemNumber>50</S.ItemNumber>
            </NavLink>

            <S.Item logout onClick={() => props?.setShowLogout(true)}>
              <S.ItemTitle>Выйти</S.ItemTitle>
            </S.Item>
          </S.Menu>
        </S.WrapperInner>
      </S.Wrapper>
    </div>
  );
};

export default ProfileMenu;
