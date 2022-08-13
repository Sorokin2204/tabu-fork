import CartIcon from 'components/Atoms/Icons/CartIcon';
import DeliveryIcon from 'components/Atoms/Icons/DeliveryIcon';
import DocumentIcon from 'components/Atoms/Icons/DocumentIcon';
import LockIcon from 'components/Atoms/Icons/LockIcon';
import * as S from './Styled';

const MobileCards = () => {
  return (
    <S.Wrapper>
      <S.Card>
        <S.Left>
          <CartIcon width={56} hegiht={56} />
        </S.Left>
        <S.Right>
          <S.Title>Новая и почти новая одежда</S.Title>
          <S.Description>Частные продавцы размещают новую одежду с бирками и почти новую одежду в отличном состоянии.</S.Description>
          <S.ButtonBox></S.ButtonBox>
        </S.Right>
      </S.Card>
      <S.Card>
        <S.Left>
          <DocumentIcon width={56} hegiht={56} />
        </S.Left>
        <S.Right>
          <S.Title>Гарантия качества</S.Title>
          <S.Description>Эксперты проверяют состояние товара. После проверки мы предоставляем сертификат подлинности и качества.</S.Description>
          <S.ButtonBox></S.ButtonBox>
        </S.Right>
      </S.Card>
      <S.Card>
        <S.Left>
          <LockIcon width={56} hegiht={56} />
        </S.Left>
        <S.Right>
          <S.Title>Безопасная сделка</S.Title>
          <S.Description>После оплаты деньги переходят на счет TAABU и отправляются продавцу после отправки товара покупателю.</S.Description>
          <S.ButtonBox></S.ButtonBox>
        </S.Right>
      </S.Card>
      <S.Card>
        <S.Left>
          <DeliveryIcon width={56} hegiht={56} />
        </S.Left>
        <S.Right>
          <S.Title>Доставка до двери</S.Title>
          <S.Description>Мы забираем товар, проверяем его и отправляем покупателю. Курьер доставляет посылку в день отправки товара.</S.Description>
          <S.ButtonBox></S.ButtonBox>
        </S.Right>
      </S.Card>
    </S.Wrapper>
  );
};

export default MobileCards;
