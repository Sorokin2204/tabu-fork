import Button from 'components/Atoms/Button';
import * as S from './Styled';

const EmptyCart = () => {
  return (
    <S.Container>
      <S.Image>
        <svg width={76} height={59} viewBox="0 0 76 59" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx={24} cy={24} r={24} fill="#F7F7F7" />
          <path fillRule="evenodd" clipRule="evenodd" d="M33.9993 19.3335H61.9994L64.3327 49.6668H31.666L33.9993 19.3335Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M41 24V17C41 13.134 44.134 10 48 10C51.866 10 55 13.134 55 17V24" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </S.Image>
      <S.Title>Ваша корзина пуста</S.Title>
      <S.Description>Добавьте товары в корзину</S.Description>
      <Button padding="14px 42.5px" margin="80px 0 0 0" green>
        Перейти к покупкам
      </Button>
    </S.Container>
  );
};

export default EmptyCart;
