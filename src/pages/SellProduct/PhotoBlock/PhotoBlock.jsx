import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOldImageIds } from 'redux/actions/product';
import { sizes } from 'sizes';
import ExamplePhoto from './ExamplePhoto/ExamplePhoto';
import MainPhoto from './MainPhoto/MainPhoto';
import * as S from './Styled';
import InfoIcon from 'assets/svg/info.svg';
import { setShowPhotoRecomendModal } from 'redux/reducers/appReducer';
export const imageTypes = {
  FRONT: 0,
  BEHIND: 1,
  TAGS: 2,
  SIDE: 3,
  INSIDE: 4,
  DEFECT: 5,
  OTHER: 6,
};
const PhotoBlock = ({ setValue, errors, watch, name }) => {
  const isMobile = useSelector((state) => state.app.isMobile);
  const images = watch(name);

  const condition = watch('condition');
  const dispatch = useDispatch();
  return (
    <>
      <S.PhotoBlock>
        <S.TitleBlock>ФОТО</S.TitleBlock>
        <S.PhotoInfo>
          <S.IconInfo src={InfoIcon} />
          <S.TextInfo>
            Чтобы быстрее продать товар рекомендуем следовать <S.LinkInfo onClick={() => dispatch(setShowPhotoRecomendModal(true))}>инструкции</S.LinkInfo>
          </S.TextInfo>
        </S.PhotoInfo>
        <S.SubTitleBlock>
          <S.TitleSection>Основное фото</S.TitleSection>
          <S.TitleSection>Пример фото</S.TitleSection>
        </S.SubTitleBlock>
        <S.Sections>
          <S.Section>
            <S.MainText error={errors?.images?.[imageTypes['FRONT']]}>{errors?.images?.[imageTypes['FRONT']]?.message ?? 'Фотография спереди'}</S.MainText>
            <S.SectionInner>
              <MainPhoto watch={watch} type={'FRONT'} setValue={setValue} error={errors?.images?.[imageTypes['FRONT']]} />
              <ExamplePhoto first src="/img/product-views/front.png" />
            </S.SectionInner>
          </S.Section>
          <S.Section>
            <S.MainText error={errors?.images?.[imageTypes['BEHIND']]}>{errors?.images?.[imageTypes['BEHIND']]?.message ?? 'Фотография сзади'}</S.MainText>
            <S.SectionInner>
              <MainPhoto watch={watch} type={'BEHIND'} setValue={setValue} error={errors?.images?.[imageTypes['BEHIND']]} />
              <ExamplePhoto first src="/img/product-views/back.png" />
            </S.SectionInner>
          </S.Section>
          <S.Section>
            <S.MainText>Фотография сбоку</S.MainText>
            <S.SectionInner>
              <MainPhoto watch={watch} type={'SIDE'} setValue={setValue} />
              <ExamplePhoto first src="/img/product-views/side.png" />
            </S.SectionInner>
          </S.Section>
          <S.Section>
            <S.MainText>Фотография изнутри</S.MainText>
            <S.SectionInner>
              <MainPhoto watch={watch} type={'INSIDE'} setValue={setValue} />
              <ExamplePhoto first src="/img/product-views/inside.png" />
            </S.SectionInner>
          </S.Section>
          {condition !== 1 && (
            <S.Section>
              <S.MainText error={errors?.images?.[imageTypes['TAGS']]}>{errors?.images?.[imageTypes['TAGS']]?.message ?? 'Фотография фирменной бирки'}</S.MainText>
              <S.SectionInner>
                <MainPhoto setValue={setValue} watch={watch} type={'TAGS'} error={errors?.images?.[imageTypes['TAGS']]} />
                <ExamplePhoto first src="/img/product-views/brand.png" />
              </S.SectionInner>
            </S.Section>
          )}

          {(condition === 2 || condition === 3) && (
            <S.Section>
              <S.MainText>Фотография дефекта</S.MainText>
              <S.SectionInner>
                <MainPhoto watch={watch} type={'DEFECT'} setValue={setValue} main_text="" />
                <ExamplePhoto first src="/img/product-views/brand.png" />
              </S.SectionInner>
            </S.Section>
          )}

          <S.Section>
            <S.MainText>Другое</S.MainText>
            <S.SectionInner>
              <MainPhoto watch={watch} type={'OTHER'} setValue={setValue} main_text="" />
              <ExamplePhoto first src="/img/product-views/brand.png" />
            </S.SectionInner>
          </S.Section>
        </S.Sections>
      </S.PhotoBlock>
    </>
  );
};

export default PhotoBlock;
