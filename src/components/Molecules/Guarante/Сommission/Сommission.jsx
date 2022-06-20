import React from 'react';
import * as S from './Styled';
const Commission = ({ title, list, caption }) => {
  return (
    <>
      <S.Wrapper name="commission-block">
        <S.Inner>
          <S.Title>{title}</S.Title>
          <S.Caption>{caption}</S.Caption>
          <S.Content>
            {list?.map((item) => (
              <S.Block>
                <S.BlockTitle>{item.title}</S.BlockTitle>
                <S.List>
                  {item.list?.map((item, i) => (
                    <S.Item>{`${i + 1}. ${item}`}</S.Item>
                  ))}
                </S.List>
              </S.Block>
            ))}
          </S.Content>
        </S.Inner>
      </S.Wrapper>
    </>
  );
};

export default Commission;
