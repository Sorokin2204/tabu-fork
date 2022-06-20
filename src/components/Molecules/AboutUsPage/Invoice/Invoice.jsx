import React from 'react';
import * as S from './Styled';
import NatureIcon from 'assets/svg/nature.svg';
const Invoice = ({ title, desc }) => {
  return (
    <>
      <S.Wrapper>
        <S.Inner>
          <S.Icon src={NatureIcon}></S.Icon>
          <S.Title>{title}</S.Title>
          <S.Desc>{desc}</S.Desc>
        </S.Inner>
      </S.Wrapper>
    </>
  );
};

export default Invoice;
