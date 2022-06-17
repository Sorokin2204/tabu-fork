import Button from 'components/Atoms/Button';
import * as S from './Styled';

const MobileStartSale = ({ title, text, btnText, img, style }) => {
  return (
    <S.Wrapper img={img} style={style}>
      <S.Title>{title}</S.Title>
      <S.Description>{text}</S.Description>
      <div>
        <Button filled padding="14px 24px" margin="32px 0 0 0">
          {btnText}
        </Button>
      </div>
    </S.Wrapper>
  );
};

export default MobileStartSale;
