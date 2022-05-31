import Button from 'components/Atoms/Button';
import React from 'react';
import * as S from './Styled';
import LogoImg from 'assets/img/logo.png';
import { useNavigate } from 'react-router-dom';
const NotFound = ({ title }) => {
  const navigate = useNavigate();
  return (
    <>
      <S.Wrapper>
        <S.Inner>
          <S.Left>
            <S.Logo src={LogoImg} />
            <S.Title>{title}</S.Title>
            <S.Desc>Возможно, страница была перемещена</S.Desc>
            <Button
              dark_filled
              onClick={() => navigate('/')}
              style={{
                fontSize: '16px',
                padding: '21px',
                width: '277px',
              }}>
              Вернуться на главную
            </Button>
          </S.Left>
          <S.Right>
            <S.Circle>
              <S.CodeError>404</S.CodeError>
            </S.Circle>
          </S.Right>
        </S.Inner>
      </S.Wrapper>
    </>
  );
};

export default NotFound;
