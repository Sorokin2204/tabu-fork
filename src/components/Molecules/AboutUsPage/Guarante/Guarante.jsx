import { Interweave } from 'interweave';
import React from 'react';
import * as S from './Styled';
const Guarante = ({ title, desc, img }) => {
  return (
    <>
      <S.Wrapper name="guarante-block">
        <S.Inner>
          <S.Title>{title}</S.Title>
          <S.Content>
            <S.Desc>
              <Interweave content={desc} />
            </S.Desc>
            <S.Img src={img}></S.Img>
          </S.Content>
        </S.Inner>
      </S.Wrapper>
    </>
  );
};

export default Guarante;
