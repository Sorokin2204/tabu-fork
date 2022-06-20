import React from 'react';
import * as S from './Styled';
const Guarante = ({ title, img, list }) => {
  return (
    <>
      <S.Wrapper name="guarante-block">
        <S.Inner>
          <S.Title>{title}</S.Title>
          <S.Content>
            <S.List>
              {list?.map((item, i) => (
                <S.Item>
                  <S.ItemTitle>{`${i + 1}. ${item.title}`}</S.ItemTitle>
                  <S.ItemDesc>{item.desc}</S.ItemDesc>
                </S.Item>
              ))}
            </S.List>
            <S.Img src={img} />
          </S.Content>
        </S.Inner>
      </S.Wrapper>
    </>
  );
};

export default Guarante;
