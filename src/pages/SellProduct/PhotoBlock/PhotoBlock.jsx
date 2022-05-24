import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { sizes } from 'sizes';
import ExamplePhoto from './ExamplePhoto/ExamplePhoto';
import MainPhoto from './MainPhoto/MainPhoto';
import * as S from './Styled';

const PhotoBlock = ({ showPhoto, setShowPhoto }) => {
  const isMobile = useSelector((state) => state.app.isMobile);

  return (
    <>
      <S.PhotoBlock>
        <S.TitleBlock>ФОТО</S.TitleBlock>
        <S.SubTitleBlock>
          <S.TitleSection>Основное фото</S.TitleSection>
          <S.TitleSection>Пример фото</S.TitleSection>
        </S.SubTitleBlock>
        <S.Sections>
          <S.Section>
            <S.MainText>Фотография спереди</S.MainText>
            <S.SectionInner>
              <MainPhoto main_text="" />
              <ExamplePhoto first src="/img/product-views/front.png" />
            </S.SectionInner>
          </S.Section>
          <S.Section>
            <S.MainText>Фотография сзади</S.MainText>
            <S.SectionInner>
              <MainPhoto main_text="" />
              <ExamplePhoto first src="/img/product-views/back.png" />
            </S.SectionInner>
          </S.Section>
          <S.Section>
            <S.MainText>Фотография фирменной бирки</S.MainText>
            <S.SectionInner>
              <MainPhoto main_text="" />
              <ExamplePhoto first src="/img/product-views/brand.png" />
            </S.SectionInner>
            <S.Section>
              <S.MainText>Фотография сбоку</S.MainText>
              <S.SectionInner>
                <MainPhoto main_text="" />
                <ExamplePhoto first src="/img/product-views/side.png" />
              </S.SectionInner>
            </S.Section>
            <S.Section>
              <S.MainText>Фотография изнутри</S.MainText>
              <S.SectionInner>
                <MainPhoto main_text="" />
                <ExamplePhoto first src="/img/product-views/inside.png" />
              </S.SectionInner>
            </S.Section>
          </S.Section>
        </S.Sections>
      </S.PhotoBlock>
    </>
  );
};

export default PhotoBlock;
