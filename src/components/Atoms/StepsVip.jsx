import styled from "styled-components";
import Text from "./Text";

const StyledSteps = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 80px;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NumberStep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  border-radius: 80px;
  min-width: 80px;
  min-height: 80px;
  max-width: 80px;
  max-height: 80px;
  margin-top: 56px;

  color: #191919;
  font-family: Gilroy;
  font-weight: 400;
  font-size: 24px;
`;

const StepsVip = () => {
  return (
    <>
      <StyledSteps>
        <Step>
          <NumberStep>01</NumberStep>
          <Text
            color="#191919"
            fontFamily="Gilroy"
            fontWeight="400"
            fontSize="20px"
            textAlign="center"
            textTransform="uppercase"
            margin="24px 0 0 0"
          >
            Оставьте заявку
          </Text>
          <Text
            color="#191919"
            fontFamily="Mont"
            fontWeight="600"
            fontSize="14px"
            textAlign="center"
            margin="24px 0 0 0"
          >
            Мы свяжемся с вами и заберем ваши вещи
          </Text>
        </Step>
        <Step>
          <NumberStep>02</NumberStep>
          <Text
            color="#191919"
            fontFamily="Gilroy"
            fontWeight="400"
            fontSize="20px"
            textAlign="center"
            textTransform="uppercase"
            margin="24px 0 0 0"
          >
            Доверьтесь нам
          </Text>
          <Text
            color="#191919"
            fontFamily="Mont"
            fontWeight="600"
            fontSize="14px"
            textAlign="center"
            margin="24px 0 0 0"
          >
            Наши эксперты подготовят, сфотографируют, установят цену, опубликуют
            ваши вещи в самом выгодном свете и продадут их
          </Text>
        </Step>
        <Step>
          <NumberStep>03</NumberStep>
          <Text
            color="#191919"
            fontFamily="Gilroy"
            fontWeight="400"
            fontSize="20px"
            textAlign="center"
            textTransform="uppercase"
            margin="24px 0 0 0"
          >
            Получите деньги
          </Text>
          <Text
            color="#191919"
            fontFamily="Mont"
            fontWeight="600"
            fontSize="14px"
            textAlign="center"
            margin="24px 0 0 0"
          >
            Как только ваши вещи будут проданы, мы перечислим вам ваши деньги
          </Text>
        </Step>
      </StyledSteps>
    </>
  );
};

export default StepsVip;
