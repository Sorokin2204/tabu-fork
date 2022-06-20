import { Interweave } from 'interweave';
import React from 'react';
import * as S from './Styled';
const Why = ({ title, desc, img }) => {
  return (
    <>
      <S.Wrapper>
        <S.Inner>
          <S.Title>{title}</S.Title>
          <S.Img src={img} />
          <S.Desc>
            <Interweave content={desc} />
          </S.Desc>
        </S.Inner>
      </S.Wrapper>
    </>
  );
};

export default Why;
