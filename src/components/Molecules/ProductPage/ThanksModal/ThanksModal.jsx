import Button from 'components/Atoms/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setShowSellerThanksModal } from 'redux/reducers/appReducer';
import * as S from './Styled';

const MessageModal = ({ title, desc, onClickFirstBtn, onClickSecondBtn, textFirstBtn, textSecondBtn, onClose, open, style }) => {
  return (
    <>
      <S.Wrapper className={open ? 'visible' : 'hidden'} onClick={onClose}></S.Wrapper>
      <S.Block style={style} className={open ? 'visible' : 'hidden'} desc={desc}>
        <S.Close onClick={onClose}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.4701 8.47108C24.7305 8.21073 24.7305 7.78862 24.4701 7.52827C24.2098 7.26792 23.7876 7.26792 23.5273 7.52827L15.9987 15.0569L8.4701 7.52827C8.20975 7.26792 7.78764 7.26792 7.52729 7.52827C7.26694 7.78862 7.26694 8.21073 7.52729 8.47108L15.0559 15.9997L7.52729 23.5283C7.26694 23.7886 7.26694 24.2107 7.52729 24.4711C7.78764 24.7314 8.20975 24.7314 8.4701 24.4711L15.9987 16.9425L23.5273 24.4711C23.7876 24.7314 24.2098 24.7314 24.4701 24.4711C24.7305 24.2107 24.7305 23.7886 24.4701 23.5283L16.9415 15.9997L24.4701 8.47108Z"
              fill="#191919"
            />
          </svg>
        </S.Close>
        <S.Title
          style={{
            textAlign: 'center',
          }}>
          {title}
        </S.Title>
        <S.Description>{desc}</S.Description>
        {textSecondBtn ? (
          <S.Buttons>
            <Button onClick={onClickFirstBtn} w100 topGreen padding="14px 0">
              {textFirstBtn}
            </Button>
            <Button margin="0 0 0 0" grayBorder borderRadius="0" padding="14px 0" w100 onClick={onClickSecondBtn}>
              {textSecondBtn}
            </Button>
          </S.Buttons>
        ) : (
          textFirstBtn && (
            <S.ButtonsSingle>
              <Button onClick={onClickFirstBtn} w100 topGreen padding="14px 0">
                {textFirstBtn}
              </Button>
            </S.ButtonsSingle>
          )
        )}
      </S.Block>
    </>
  );
};

export default MessageModal;
