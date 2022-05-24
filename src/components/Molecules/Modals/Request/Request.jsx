import Button from 'components/Atoms/Button';
import Flex from 'components/Atoms/Flex';
import FormInput from 'components/Molecules/Form/FormInput/FormInput';
import Header from 'components/Molecules/Search/Desktop/Header/Header';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowRequestModal } from 'redux/reducers/appReducer';
import { sizes } from 'sizes';
import * as S from './Styled';

const Request = (props) => {
  const dispatch = useDispatch();
  const showRequest = useSelector((state) => state.app.showRequestModal);
  const isMobile = useSelector((state) => state.app.isMobile);

  const [FIO, setFIO] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <S.Wrapper {...props} className={`request ${showRequest ? 'visible' : 'hidden'}`}>
      <S.Block onClick={() => dispatch(setShowRequestModal(false))}> </S.Block>
      <S.BlockInside>
        {isMobile ? (
          ''
        ) : (
          <S.Close onClick={() => dispatch(setShowRequestModal(false))}>
            <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.4701 8.47108C24.7305 8.21073 24.7305 7.78862 24.4701 7.52827C24.2098 7.26792 23.7876 7.26792 23.5273 7.52827L15.9987 15.0569L8.4701 7.52827C8.20975 7.26792 7.78764 7.26792 7.52729 7.52827C7.26694 7.78862 7.26694 8.21073 7.52729 8.47108L15.0559 15.9997L7.52729 23.5283C7.26694 23.7886 7.26694 24.2107 7.52729 24.4711C7.78764 24.7314 8.20975 24.7314 8.4701 24.4711L15.9987 16.9425L23.5273 24.4711C23.7876 24.7314 24.2098 24.7314 24.4701 24.4711C24.7305 24.2107 24.7305 23.7886 24.4701 23.5283L16.9415 15.9997L24.4701 8.47108Z"
                fill="#191919"
              />
            </svg>
          </S.Close>
        )}
        {isMobile ? <Header onClose={() => dispatch(setShowRequestModal(false))} /> : ''}

        <Flex direction="column" padding="60px 122px 54px 32px" style={{ overflow: 'scroll' }}>
          <S.Title>Оставить заявку</S.Title>
          <FormInput value={FIO} setValue={setFIO} label="ФИО" placeholder="Введите ФИО" type="text" />
          <FormInput value={email} setValue={setEmail} label="Эл.почта" placeholder="Введите электронную почту" type="email" />
          <FormInput value={phone} setValue={setPhone} label="Телефон" placeholder="Введите ваш номер телефона" type="text" />
          <S.ButtonWrapper>
            <Button borderRadius="2px" padding="14px 49.5px" topGreen>
              Отправить
            </Button>
          </S.ButtonWrapper>
        </Flex>
      </S.BlockInside>

      <S.Background />
    </S.Wrapper>
  );
};

export default Request;
