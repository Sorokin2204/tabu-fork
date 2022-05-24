import Button from 'components/Atoms/Button';
import * as S from './Styled';

const MobileStartSale = () => {
  return (
    <S.Wrapper>
      <S.Title>Начните продавать</S.Title>
      <S.Description>Продавая вещи, которые пылятся в гардеробе, вы не консервируете деньги у себя в шкафу, а зарабатываете на будущие покупки. На нашем сайте достаточно двух кликов, чтобы выставить свои вещи на продажу.</S.Description>
      <div>
        <Button filled padding="14px 24px" margin="32px 0 0 0">
          Продать товар
        </Button>
      </div>
    </S.Wrapper>
  );
};

export default MobileStartSale;
