import Button from 'components/Atoms/Button';
import React from 'react';
import * as S from './Styled';
import LogoImg from 'assets/img/logo.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const NotFound = ({ title }) => {
  const navigate = useNavigate();
  const isMobile = useSelector((state) => state.app.isMobile);
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
          {!isMobile && (
            <S.Right>
              <S.Circle>
                <S.CodeError>404</S.CodeError>
              </S.Circle>
            </S.Right>
          )}
        </S.Inner>
      </S.Wrapper>
    </>
  );
};

export default NotFound;
