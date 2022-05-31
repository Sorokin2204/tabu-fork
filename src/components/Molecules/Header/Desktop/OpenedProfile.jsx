import * as S from './Styled';
import Flex from 'components/Atoms/Flex';
import Text from 'components/Atoms/Text';
import Button from 'components/Atoms/Button';
import Expand from 'assets/svg/expand_profile.svg';
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { hideProfile, setShowAuthModal, setShowRegModal, showProfile } from 'redux/reducers/appReducer';

const OpenedProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.user.isAuth);
  const profileShow = useSelector((state) => state.app.showProfile);

  const openProfilePage = () => {
    if (showProfile) {
      navigate('/profile');
    }
  };
  return (
    <S.OpenedProfileWrapper>
      <S.OpenedProfile>
        {/* <Flex padding="14.5px 16px" justify="end" align="center">
            <Text
              cursor="pointer"
              color="#191919"
              fontFamily="Mont"
              fontWeight="600"
              fontSize="13px"
              onClick={() => {
                if (profileShow) {
                  dispatch(hideProfile());
                } else {
                  dispatch(showProfile());
                }
              }}
              style={{
                cursor: 'pointer',
                userSelect: 'none',
              }}>
              Мой профиль
            </Text>
            <Flex margin="0 0 0 2px">
              <img alt="" src={Expand} />
            </Flex>
          </Flex> */}
        {profileShow && (
          <div style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
            {/* {!isAuth && (
                <Flex direction="row" justify="center" padding="6px 0">
                  <Button
                    grid
                    w100
                    margin="0 0 0 20px"
                    fontFamily="Mont"
                    fontSize="12px"
                    color="#191919"
                    padding="8px 12px"
                    topGreen
                    onClick={() => {
                      dispatch(setShowAuthModal(false));
                      dispatch(setShowRegModal(true));
                      dispatch(hideProfile(false));
                    }}>
                    Регистрация
                  </Button>
                  <Button
                    grid
                    w100
                    margin="0 20px 0 6px"
                    fontFamily="Mont"
                    fontSize="12px"
                    color="#ffffff"
                    padding="8px 12px"
                    dark_filled
                    onClick={() => {
                      dispatch(setShowAuthModal(true));
                      dispatch(setShowRegModal(true));
                      dispatch(hideProfile());
                    }}>
                    Войти
                  </Button>
                </Flex>
              )} */}
            <Text fontFamily="Gilroy" fontWeight="400" fontSize="13px" color="#000" padding="14px 20px" cursor="pointer">
              Мой профиль
            </Text>
            <Text fontFamily="Gilroy" fontWeight="400" fontSize="13px" color="#000" padding="14px 20px" cursor="pointer">
              Мои товары на продажу
            </Text>
            <Text fontFamily="Gilroy" fontWeight="400" fontSize="13px" color="#000" padding="14px 20px" cursor="pointer">
              Мои заказы
            </Text>
            <Text fontFamily="Gilroy" fontWeight="400" fontSize="13px" color="#000" padding="14px 20px" cursor="pointer">
              Список желаний
            </Text>
            <Text fontFamily="Gilroy" fontWeight="400" fontSize="13px" color="#000" padding="14px 20px" cursor="pointer" style={{ color: '#D51313' }}>
              Выйти
            </Text>
          </div>
        )}
      </S.OpenedProfile>
    </S.OpenedProfileWrapper>
  );
  // return (
  //   <S.OpenedProfileWrapper
  //     style={{
  //       ...(profileShow ? { width: '254px' } : { width: '149px' }),
  //     }}>
  //     <S.OpenedProfile>
  //       <OutsideClickHandler
  //         onOutsideClick={() => {
  //           dispatch(hideProfile());
  //         }}>
  //         <Flex
  //           padding="14.5px 16px"
  //           justify="end"
  //           align="center"
  //           style={{
  //             position: 'relative',
  //           }}>
  //           <Text
  //             cursor="pointer"
  //             color="#191919"
  //             fontFamily="Mont"
  //             fontWeight="600"
  //             fontSize="13px"
  //             onClick={() => {
  //               if (!profileShow) {
  //                 dispatch(showProfile());
  //               } else {
  //                 dispatch(hideProfile());
  //               }
  //               // openProfilePage()
  //             }}>
  //             Мой профиль
  //           </Text>
  //           <Flex margin="0 0 0 2px">
  //             <img alt="" src={Expand} />
  //           </Flex>
  //           {profileShow && (
  //             <Flex
  //               style={{
  //                 width: '254px',
  //                 flexDirection: 'column',
  //                 position: 'absolute',
  //                 top: '100%',
  //                 backgroundColor: '#fff',
  //                 right: '0',
  //               }}>
  //               {!isAuth && (
  //                 <Flex direction="row" justify="center" padding="6px 0">
  //                   <Button
  //                     grid
  //                     w100
  //                     margin="0 0 0 20px"
  //                     fontFamily="Mont"
  //                     fontSize="12px"
  //                     color="#191919"
  //                     padding="8px 12px"
  //                     topGreen
  //                     onClick={() => {
  //                       dispatch(setShowRegModal(true));
  //                       dispatch(hideProfile(false));
  //                     }}>
  //                     Регистрация
  //                   </Button>
  //                   <Button
  //                     grid
  //                     w100
  //                     margin="0 20px 0 6px"
  //                     fontFamily="Mont"
  //                     fontSize="12px"
  //                     color="#ffffff"
  //                     padding="8px 12px"
  //                     dark_filled
  //                     onClick={() => {
  //                       dispatch(setShowAuthModal(true));
  //                       dispatch(hideProfile());
  //                     }}>
  //                     Войти
  //                   </Button>
  //                 </Flex>
  //               )}

  //               <Text fontFamily="Gilroy" fontWeight="400" fontSize="13px" color="#000" padding="14px 20px" cursor="pointer">
  //                 Мои товары на продажу
  //               </Text>
  //               <Text fontFamily="Gilroy" fontWeight="400" fontSize="13px" color="#000" padding="14px 20px" cursor="pointer">
  //                 Мои заказы
  //               </Text>
  //               <Text fontFamily="Gilroy" fontWeight="400" fontSize="13px" color="#000" padding="14px 20px" cursor="pointer">
  //                 Список желаний
  //               </Text>
  //               <Text fontFamily="Gilroy" fontWeight="400" fontSize="13px" color="#000" padding="14px 20px" cursor="pointer">
  //                 Выйти
  //               </Text>
  //             </Flex>
  //           )}
  //         </Flex>
  //       </OutsideClickHandler>
  //     </S.OpenedProfile>
  //   </S.OpenedProfileWrapper>
  // );
};

export default OpenedProfile;
