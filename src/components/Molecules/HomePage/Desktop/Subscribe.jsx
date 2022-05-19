import { useState } from "react";
import Button from "../../../Atoms/Button";
import Flex from "../../../Atoms/Flex";
import Input from "../../../Atoms/Form/Input";
import Radio from "../../../Atoms/Form/Radio";
import Text from "../../../Atoms/Text";
import styled from "styled-components";
import { sizes } from "../../../../sizes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  @media (max-width: ${sizes.mobile}px) {
    width: 100%;
    padding: 48px 25px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 0 89px 0;

  @media (max-width: ${sizes.mobile}px) {
    padding: 0px 0 0 0;
  }
`;

const Subscribe = () => {
  const [favorite, setFavorite] = useState("woman");
  const [email, setEmail] = useState("");

  const handleWomanChange = () => {
    setFavorite("woman");
  };

  const handleMenChange = () => {
    setFavorite("men");
  };

  return (
    <Wrapper>
      <Container name="Wrapper" width="30%" direction="column">
        <Text
          color="#191919"
          fontFamily="Gilroy"
          fontWeight="400"
          fontSize="32px"
          textAlign="center"
        >
          ПОДПИШИТЕСЬ НА РАССЫЛКУ И ПОЛУЧИТЕ СКИДКУ 10%
        </Text>
        <Text
          color="#191919"
          fontFamily="Manrope"
          fontWeight="400"
          fontSize="14px"
          textAlign="center"
          margin="20px 0 0 0"
        >
          Ранний доступ к распродаже, новости о специальных предложениях и
          подборки лучших новинок — для подписчиков рассылки.
        </Text>
        <Flex margin="40px 0 0 0" justify="center">
          <Radio
            label="Женщина"
            value={favorite === "woman"}
            onChange={handleWomanChange}
          />
          <Radio
            label="Мужчина"
            value={favorite === "men"}
            onChange={handleMenChange}
            margin="0 0 0 64px"
          />
        </Flex>
        <Flex margin="31px 0 0 0">
          <Input
            type="email"
            width="100%"
            label="Электронная почта"
            placeholder="Эл.почта"
            value={email}
            setValue={setEmail}
          />
        </Flex>
        <Button
          fontFamily="Gilroy"
          fontSize="14px"
          fontWeight="400"
          padding="11px 0"
          margin="20px 0 0 0"
          topGreen
        >
          Подписаться
        </Button>
        <Text
          fontFamily="Gilroy"
          fontSize="14px"
          fontWeight="400"
          color="#717171"
          textAlign="center"
          margin="32px 0 0 0"
        >
          Подписываясь на рассылку, вы соглашаетесь с этими документами:
          «Условиями пользования» и «Политикой конфиденциальности».
        </Text>
      </Container>
    </Wrapper>
  );
};

export default Subscribe;
