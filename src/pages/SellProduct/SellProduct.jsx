import Button from 'components/Atoms/Button';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { sizes } from 'sizes';
import ContentBlock from './ContentBlock/ContentBlock';
import PhotoBlock from './PhotoBlock/PhotoBlock';
import * as S from './Styled';

const SellProduct = () => {
  const [showPhoto, setShowPhoto] = useState(false);

  const isMobile = useSelector((state) => state.app.isMobile);

  return (
    <S.Wrapper>
      <S.Title>Продать товар</S.Title>
      <S.Description>Подарите своему гардеробу вторую жизнь - продайте то, что вы не носите</S.Description>
      <S.Blocks>
        <PhotoBlock showPhoto={showPhoto} setShowPhoto={setShowPhoto} />
        <ContentBlock />
      </S.Blocks>{' '}
      <S.Buttons>
        <Button topGreen padding="15px 23px" width={isMobile ? '100% ' : '332px'}>
          Опубликовать этот товар
        </Button>
      </S.Buttons>
    </S.Wrapper>
  );
};

export default SellProduct;
