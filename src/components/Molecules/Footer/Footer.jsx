import Flex from "components/Atoms/Flex";
import Grid from "components/Atoms/Grid";
import Text from "components/Atoms/Text";
import * as S from "./Styled";
import {
  Youtube,
  Instagram,
  Telegram,
  Whatsapp,
  Facebook,
} from "components/Atoms/Icons/Social";

const Footer = () => {
  return (
    <S.Footer>
      <Flex>
        <Grid columns="1fr 1fr 1fr 1fr 1fr" gap="0 80px">
          <Flex direction="column">
            <S.TitleColumn>Tabu</S.TitleColumn>
            <Flex margin="40px 0 0 0" direction="column">
              <S.TextColumn>О проекте</S.TextColumn>
              <S.TextColumn>Гарантия от TABU</S.TextColumn>
            </Flex>
          </Flex>
          <Flex direction="column">
            <S.TitleColumn>ПОКУПАТЕЛЯМ</S.TitleColumn>
            <Flex margin="40px 0 0 0" direction="column">
              <S.TextColumn>Как покупать</S.TextColumn>
              <S.TextColumn>Гарантия подлинности</S.TextColumn>
              <S.TextColumn>Безопасная сделка</S.TextColumn>
              <S.TextColumn>Доставка и возврат</S.TextColumn>
              <S.TextColumn>Полезные советы </S.TextColumn>
            </Flex>
          </Flex>
          <Flex direction="column">
            <S.TitleColumn>ПРОДАВЦАМ</S.TitleColumn>
            <Flex margin="40px 0 0 0" direction="column">
              <S.TextColumn>Как продавать</S.TextColumn>
              <S.TextColumn>Экспертиза</S.TextColumn>
              <S.TextColumn>Безопасная сделка</S.TextColumn>
              <S.TextColumn>Комиссия</S.TextColumn>
              <S.TextColumn>Полезные советы</S.TextColumn>
            </Flex>
          </Flex>
          <Flex direction="column">
            <S.TitleColumn>Помощь</S.TitleColumn>
            <Flex margin="40px 0 0 0" direction="column">
              <S.TextColumn>Контакты</S.TextColumn>
              <S.TextColumn>FAQ</S.TextColumn>
            </Flex>
          </Flex>
          <Flex direction="column">
            <S.TitleColumn>Cвязаться с нами</S.TitleColumn>
            <Flex margin="51.33px 0 0 0">
              <Flex>
                <Youtube />
              </Flex>
              <Flex margin="0 0 0 20px">
                <Instagram />
              </Flex>
              <Flex margin="0 0 0 20px">
                <Telegram />
              </Flex>
              <Flex margin="0 0 0 20px">
                <Whatsapp />
              </Flex>
              <Flex margin="0 0 0 20px">
                <Facebook />
              </Flex>
            </Flex>
          </Flex>
        </Grid>
      </Flex>
      <Flex align="center" justify="space-between" margin="78px 0 0 0">
        <S.DarkText>© 2019-2022 TabuGroup. Все права защищены .</S.DarkText>
        <Flex>
          <S.DarkText>Политика конфиденциальности</S.DarkText>
          <S.Line> | </S.Line>
          <S.DarkText>Правила использования</S.DarkText>
        </Flex>
      </Flex>
    </S.Footer>
  );
};

export default Footer;
