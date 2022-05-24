import Button from 'components/Atoms/Button';
import { useDispatch } from 'react-redux';
import { setShowRequestModal } from 'redux/reducers/appReducer';
import * as S from './Styled';

const WeSelling = () => {
  const dispatch = useDispatch();

  return (
    <S.Wrapper>
      <S.Title>Сделаем все за вас</S.Title>
      <S.Description>Заберем ваши вещи, которые пылятся в гардеробе, вы не консервируете деньги у себя в шкафу, а зарабатываете на будущие покупки.</S.Description>
      <S.ButtonBlock>
        <Button onClick={() => dispatch(setShowRequestModal(true))} padding="14px 24px" topGreen style={{ fontWeight: 400 }}>
          Получить VIP сервис
        </Button>
      </S.ButtonBlock>
    </S.Wrapper>
  );
};

export default WeSelling;
