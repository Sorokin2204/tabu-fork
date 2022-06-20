import styled from 'styled-components';
import Text from './Text';

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

const Steps = ({ activeTab }) => {
  return (
    <>
      {activeTab === 'customers' ? (
        <StyledSteps>
          <Step>
            <NumberStep>01</NumberStep>
            <Text color="#191919" fontFamily="Gilroy" fontWeight="400" fontSize="20px" textAlign="center" textTransform="uppercase" margin="24px 0 0 0">
              Выбор и оплата
            </Text>
            <Text color="#191919" fontFamily="Mont" fontWeight="600" fontSize="14px" textAlign="center" margin="24px 0 0 0">
              Выбрать и оплатить товар онлайн
            </Text>
          </Step>
          <Step>
            <NumberStep>02</NumberStep>
            <Text color="#191919" fontFamily="Gilroy" fontWeight="400" fontSize="20px" textAlign="center" textTransform="uppercase" margin="24px 0 0 0">
              Проверка качества
            </Text>
            <Text color="#191919" fontFamily="Mont" fontWeight="600" fontSize="14px" textAlign="center" margin="24px 0 0 0">
              Мы забираем товар у продавца и проверяем его у нашего специалиста. После проверки мы прикрепляем к посылке сертификат качества и подлинности TAABU
            </Text>
          </Step>
          <Step>
            <NumberStep>03</NumberStep>
            <Text color="#191919" fontFamily="Gilroy" fontWeight="400" fontSize="20px" textAlign="center" textTransform="uppercase" margin="24px 0 0 0">
              Доставка
            </Text>
            <Text color="#191919" fontFamily="Mont" fontWeight="600" fontSize="14px" textAlign="center" margin="24px 0 0 0">
              Курьер привозит посылку на указанный вами адрес в день отправки товара, после чего продавец получает оплату
            </Text>
          </Step>
        </StyledSteps>
      ) : (
        <StyledSteps>
          <Step>
            <NumberStep>01</NumberStep>
            <Text color="#191919" fontFamily="Gilroy" fontWeight="400" fontSize="20px" textAlign="center" textTransform="uppercase" margin="24px 0 0 0">
              Размещение
            </Text>
            <Text color="#191919" fontFamily="Mont" fontWeight="600" fontSize="14px" textAlign="center" margin="24px 0 0 0">
              Размещение товара: зарегистрироваться и выставить товар на продажу на нашем сайте
            </Text>
          </Step>
          <Step>
            <NumberStep>02</NumberStep>
            <Text color="#191919" fontFamily="Gilroy" fontWeight="400" fontSize="20px" textAlign="center" textTransform="uppercase" margin="24px 0 0 0">
              Проверка качества
            </Text>
            <Text color="#191919" fontFamily="Mont" fontWeight="600" fontSize="14px" textAlign="center" margin="24px 0 0 0">
              После того как покупатель внес оплату, мы забираем у вас товар. Наш специалист проверяет его состояние и подлинность. После проверки мы отправляем товар покупателю
            </Text>
          </Step>
          <Step>
            <NumberStep>03</NumberStep>
            <Text color="#191919" fontFamily="Gilroy" fontWeight="400" fontSize="20px" textAlign="center" textTransform="uppercase" margin="24px 0 0 0">
              Перевод денег
            </Text>
            <Text color="#191919" fontFamily="Mont" fontWeight="600" fontSize="14px" textAlign="center" margin="24px 0 0 0">
              Как только покупатель получил товар, мы переводим его оплату на вашу карту
            </Text>
          </Step>
        </StyledSteps>
      )}
    </>
  );
};

export default Steps;
