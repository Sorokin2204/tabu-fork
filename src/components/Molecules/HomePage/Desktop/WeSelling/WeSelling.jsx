import Button from "components/Atoms/Button";
import { useDispatch } from "react-redux";
import { setShowRequestModal } from "redux/reducers/appReducer";
import * as S from "./Styled";

const WeSelling = () => {
  const dispatch = useDispatch();

  return (
    <S.Wrapper>
      <S.Title>Сделаем все за вас</S.Title>
      <S.Description>
        Заберем ваши вещи. Подготовим, опубликуем и продадим. Переведем вам
        деньги
      </S.Description>
      <S.ButtonBlock>
        <Button
          onClick={() => dispatch(setShowRequestModal(true))}
          padding="14px 24px"
          topGreen
        >
          Получить VIP сервис
        </Button>
      </S.ButtonBlock>
    </S.Wrapper>
  );
};

export default WeSelling;
