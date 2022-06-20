import styled, { css } from 'styled-components';
import Grid from '../../../../Atoms/Grid';
import ExpandIcon from '../../../../Atoms/Icons/ExpandIcon';
import Text from '../../../../Atoms/Text';
import Question from './Question';

const Numbers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Number = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  &:nth-child(1) {
    margin-top: 0;
  }
`;

const Info = styled.div`
  display: grid;
  align-content: start;
  margin-top: 0px;
`;

const HalfLine = styled.div`
  display: flex;
  height: 20px;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.25);
  margin: ${({ margin }) => margin || ''};
  ${(props) =>
    props.active &&
    css`
      background-color: #025b37;
    `};
`;

const Questions = () => {
  return (
    <Grid columns="1fr 10fr" padding="64px 0 0 0">
      <Numbers>
        <Number>
          <Text color="#025B37;" fontFamily="Mont" fontWeight="600" fontSize="18px">
            01
          </Text>
          <HalfLine margin="15px 0 0 0" active />
          <HalfLine />
        </Number>
        <Number>
          <Text color="rgba(0, 0, 0, 0.25)" fontFamily="Mont" fontWeight="600" fontSize="18px">
            02
          </Text>
          <HalfLine margin="15px 0 0 0" />
          <HalfLine />
        </Number>
        <Number>
          <Text color="rgba(0, 0, 0, 0.25)" fontFamily="Mont" fontWeight="600" fontSize="18px">
            03
          </Text>
          <HalfLine margin="15px 0 0 0" />
          <HalfLine />
        </Number>
        <Number>
          <Text color="rgba(0, 0, 0, 0.25)" fontFamily="Mont" fontWeight="600" fontSize="18px">
            04
          </Text>
          <HalfLine margin="15px 0 0 0" />
          <HalfLine />
        </Number>
        <Number>
          <Text color="rgba(0, 0, 0, 0.25)" fontFamily="Mont" fontWeight="600" fontSize="18px">
            05
          </Text>
        </Number>
      </Numbers>
      <Info>
        <Question
          first
          title="Кто может продавать товары на площадке TAABU?"
          description="Наши продавцы - это частные лица и магазины. Чтобы начать продавать на нашей
площадке, достаточно зарегистрироваться и загрузить фото вещей на свой аккаунт."
        />
        <Question
          title="Какие услуги входят в стоимость товара? "
          description="В стоимость товара входит доставка, проверка качества и подлинности, проверка
соответствия состоянию, сертификат качества и подлинности TAABU и фирменная
упаковка."
        />
        <Question
          title="Как происходит оплата?"
          description="Вы заказываете товар, средства с вашего счета переходят на счет TAABU, и будут
перечислены продавцу только после того, как товар попадет к вам."
        />
        <Question title="Сколько времени занимает доставка? " description="По городу Алматы доставка занимает около 7х рабочих дней. Доставка может занять больше времени в другие города Казахстана." />
        <Question
          title="Что если товар не соответствует описанию / не прошел проверку?"
          description="Если товар не прошел нашу проверку по любой причине, мы отправим деньги обратно покупателю, а товар – продавцу. Пожалуйста, ознакомьтесь с Правилами Пользования на нашем сайте.
"
        />
      </Info>
    </Grid>
  );
};

export default Questions;
