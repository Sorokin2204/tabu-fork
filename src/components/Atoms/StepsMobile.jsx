import styled from "styled-components";
import Text from "./Text";
import Flex from "./Flex";

const StyledSteps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Step = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;

  padding: 0 26px;
  margin-top: 24px;

  &:nth-child(1) {
    margin-left: 0;
    margin-top: 32px;
  }
`;

const NumberStep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  border-radius: 80px;
  min-width: 56px;
  min-height: 56px;
  max-width: 56px;
  max-height: 56px;

  color: #191919;
  font-family: Gilroy;
  font-weight: 400;
  font-size: 20px;
`;

const StepsMobile = () => {
  return (
    <StyledSteps>
      <Step>
        <NumberStep>01</NumberStep>
        <Flex direction={"column"} margin={"0 0 0 16px"} justify={"center"}>
          <Text
            color="#191919"
            fontFamily="Gilroy"
            fontWeight="400"
            fontSize="14px"
            textTransform="uppercase"
          >
            Выбор и оплата
          </Text>
          <Text
            color="#191919"
            fontFamily="Mont"
            fontWeight="600"
            fontSize="12px"
            margin="8px 0 0 0"
          >
            Выбрать и оплачивать товар можно посредством сайта или в нашем
            мобильном приложении для операционных систем Android и iOS
          </Text>
        </Flex>
      </Step>

      <Step>
        <NumberStep>02</NumberStep>
        <Flex direction={"column"} margin={"0 0 0 16px"} justify={"center"}>
          <Text
            color="#191919"
            fontFamily="Gilroy"
            fontWeight="400"
            fontSize="14px"
            textTransform="uppercase"
          >
            Проверка подлинности
          </Text>
          <Text
            color="#191919"
            fontFamily="Mont"
            fontWeight="600"
            fontSize="12px"
            margin="8px 0 0 0"
          >
            Мы забираем товар у продавца и проверяем его у нашего эксперта.
            После мы прикрепляем к посылке сертификат подлинности и качества
          </Text>
        </Flex>
      </Step>

      <Step>
        <NumberStep>03</NumberStep>
        <Flex direction={"column"} margin={"0 0 0 16px"} justify={"center"}>
          <Text
            color="#191919"
            fontFamily="Gilroy"
            fontWeight="400"
            fontSize="14px"
            textTransform="uppercase"
          >
            Отправка товара
          </Text>
          <Text
            color="#191919"
            fontFamily="Mont"
            fontWeight="600"
            fontSize="12px"
            margin="8px 0 0 0"
          >
            После проверки курьер привозит посылку к вам домой или в офис
            в течение 3-х рабочих дней. За доставкой можно следить в личном
            кабинете
          </Text>
        </Flex>
      </Step>
    </StyledSteps>
  );
};

export default StepsMobile;
