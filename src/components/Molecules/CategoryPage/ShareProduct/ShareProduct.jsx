import { useDispatch, useSelector } from 'react-redux';
import { setShareProduct } from 'redux/reducers/productReducer';
import * as S from './Styled';
import { useEffect, useState } from 'react';
import { sizes } from '../../../../sizes';
import IconFacebook from '../../../../assets/svg/facebook.svg';
import IconTwitter from '../../../../assets/svg/twitter.svg';
import IconVk from '../../../../assets/svg/vk.svg';
import IconInstagram from '../../../../assets/svg/instagram.svg';
import { setIsDisableScroll } from 'redux/reducers/appReducer';

const ShareProduct = (props) => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setIsDisableScroll(false));
    dispatch(setShareProduct({ link: '', showShare: false }));
  };

  const isMobile = useSelector((state) => state.app.isMobile);

  return (
    <>
      <S.WrapperOverlay {...props} onClick={onClose}>
        {' '}
      </S.WrapperOverlay>
      <S.Wrapper
        active={props.active}
        style={{
          position: 'fixed',
        }}>
        {!isMobile && (
          <S.Close onClick={onClose}>
            <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.4701 8.47108C24.7305 8.21073 24.7305 7.78862 24.4701 7.52827C24.2098 7.26792 23.7876 7.26792 23.5273 7.52827L15.9987 15.0569L8.4701 7.52827C8.20975 7.26792 7.78764 7.26792 7.52729 7.52827C7.26694 7.78862 7.26694 8.21073 7.52729 8.47108L15.0559 15.9997L7.52729 23.5283C7.26694 23.7886 7.26694 24.2107 7.52729 24.4711C7.78764 24.7314 8.20975 24.7314 8.4701 24.4711L15.9987 16.9425L23.5273 24.4711C23.7876 24.7314 24.2098 24.7314 24.4701 24.4711C24.7305 24.2107 24.7305 23.7886 24.4701 23.5283L16.9415 15.9997L24.4701 8.47108Z"
                fill="white"
              />
            </svg>
          </S.Close>
        )}
        <S.Block>
          <S.Left>
            {isMobile && (
              <S.CloseMobile onClick={onClose}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.2933 5.2943C15.456 5.13158 15.456 4.86777 15.2933 4.70505C15.1306 4.54233 14.8668 4.54233 14.7041 4.70505L9.9987 9.41042L5.29333 4.70505C5.13061 4.54233 4.86679 4.54233 4.70407 4.70505C4.54135 4.86777 4.54135 5.13158 4.70407 5.2943L9.40944 9.99967L4.70407 14.705C4.54135 14.8678 4.54135 15.1316 4.70407 15.2943C4.86679 15.457 5.13061 15.457 5.29333 15.2943L9.9987 10.5889L14.7041 15.2943C14.8668 15.457 15.1306 15.457 15.2933 15.2943C15.456 15.1316 15.456 14.8678 15.2933 14.705L10.588 9.99967L15.2933 5.2943Z"
                    fill="#717171"
                  />
                </svg>
              </S.CloseMobile>
            )}
            <S.Title>Поделиться</S.Title>
            <S.Description>Поделитесь данным товаром на других соц.площадках!</S.Description>

            {!isMobile ? (
              <>
                <S.Socials>
                  <S.SocialLink href="https://google.com" target={'_blank'}>
                    <S.SocialIcon href="https://google.com" target={'_blank'}>
                      <img src={IconFacebook} />
                    </S.SocialIcon>
                    <S.SocialName>Facebook</S.SocialName>
                  </S.SocialLink>

                  <S.SocialLink href="https://google.com" target={'_blank'}>
                    <S.SocialIcon>
                      <img src={IconTwitter} />
                    </S.SocialIcon>
                    <S.SocialName>Twitter</S.SocialName>
                  </S.SocialLink>

                  <S.SocialLink href="https://google.com" target={'_blank'}>
                    <S.SocialIcon>
                      <img src={IconVk} />
                    </S.SocialIcon>
                    <S.SocialName>vk.com</S.SocialName>
                  </S.SocialLink>

                  <S.SocialLink href="https://google.com" target={'_blank'}>
                    <S.SocialIcon>
                      <img src={IconInstagram} />
                    </S.SocialIcon>
                    <S.SocialName>Instagram</S.SocialName>
                  </S.SocialLink>
                </S.Socials>

                <S.Line />
              </>
            ) : (
              <>
                <S.MobileSocials>
                  <S.MobileSocial>
                    <S.MobileSocialIcon>
                      <img src={IconFacebook} />
                    </S.MobileSocialIcon>
                    <S.MobileSocialName>Facebook</S.MobileSocialName>
                  </S.MobileSocial>

                  <S.MobileSocial>
                    <S.MobileSocialIcon>
                      <img src={IconTwitter} />
                    </S.MobileSocialIcon>
                    <S.MobileSocialName>Twitter</S.MobileSocialName>
                  </S.MobileSocial>

                  <S.MobileSocial>
                    <S.MobileSocialIcon>
                      <img src={IconVk} />
                    </S.MobileSocialIcon>
                    <S.MobileSocialName>Vk.com</S.MobileSocialName>
                  </S.MobileSocial>

                  <S.MobileSocial>
                    <S.MobileSocialIcon>
                      <img src={IconInstagram} />
                    </S.MobileSocialIcon>
                    <S.MobileSocialName>Instagram</S.MobileSocialName>
                  </S.MobileSocial>
                </S.MobileSocials>
              </>
            )}

            <S.LinkBlock>
              <S.Label>Или скопируйте ссылку :</S.Label>
              <S.Input>
                <S.InputText>https://Taabu.kz/kg49mTJxRhs</S.InputText>
                <S.InputCopy>
                  <svg width={20} height={24} viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.3333 20H6.66667C6.00363 20 5.36774 19.6839 4.8989 19.1213C4.43006 18.5587 4.16667 17.7956 4.16667 17V7C4.16667 6.73478 4.07887 6.48043 3.92259 6.29289C3.76631 6.10536 3.55435 6 3.33333 6C3.11232 6 2.90036 6.10536 2.74408 6.29289C2.5878 6.48043 2.5 6.73478 2.5 7V17C2.5 18.3261 2.93899 19.5979 3.72039 20.5355C4.50179 21.4732 5.5616 22 6.66667 22H13.3333C13.5543 22 13.7663 21.8946 13.9226 21.7071C14.0789 21.5196 14.1667 21.2652 14.1667 21C14.1667 20.7348 14.0789 20.4804 13.9226 20.2929C13.7663 20.1054 13.5543 20 13.3333 20ZM17.5 8.94C17.4913 8.84813 17.4746 8.75763 17.45 8.67V8.58C17.4099 8.47718 17.3565 8.38267 17.2917 8.3L12.2917 2.3C12.2228 2.22222 12.144 2.15808 12.0583 2.11H11.9833L11.7167 2H8.33333C7.67029 2 7.03441 2.31607 6.56557 2.87868C6.09673 3.44129 5.83333 4.20435 5.83333 5V15C5.83333 15.7956 6.09673 16.5587 6.56557 17.1213C7.03441 17.6839 7.67029 18 8.33333 18H15C15.663 18 16.2989 17.6839 16.7678 17.1213C17.2366 16.5587 17.5 15.7956 17.5 15V9C17.5 9 17.5 9 17.5 8.94ZM12.5 5.41L14.6583 8H13.3333C13.1123 8 12.9004 7.89464 12.7441 7.70711C12.5878 7.51957 12.5 7.26522 12.5 7V5.41ZM15.8333 15C15.8333 15.2652 15.7455 15.5196 15.5893 15.7071C15.433 15.8946 15.221 16 15 16H8.33333C8.11232 16 7.90036 15.8946 7.74408 15.7071C7.5878 15.5196 7.5 15.2652 7.5 15V5C7.5 4.73478 7.5878 4.48043 7.74408 4.29289C7.90036 4.10536 8.11232 4 8.33333 4H10.8333V7C10.8333 7.79565 11.0967 8.55871 11.5656 9.12132C12.0344 9.68393 12.6703 10 13.3333 10H15.8333V15Z"
                      fill="#1F1F1F"
                    />
                  </svg>
                </S.InputCopy>
              </S.Input>
            </S.LinkBlock>
          </S.Left>
        </S.Block>
      </S.Wrapper>
    </>
  );
};

export default ShareProduct;
