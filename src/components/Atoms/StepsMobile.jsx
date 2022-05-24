import styled from 'styled-components';
import Text from './Text';
import Flex from './Flex';
import { useSelector } from 'react-redux';
import VideoPrev from 'assets/img/steps-prev.png';
import PlayIcon from 'assets/svg/play.svg';
import { useState } from 'react';
const StyledSteps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StepsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;
  padding-right: 56px;
  margin-top: 63px;
  grid-template-rows: 422px;
  @media (max-width: 1110px) {
    padding-right: 26px;

    grid-template-columns: 1fr;
    margin-top: 0px;
    grid-template-rows: auto;
  }
`;

const StepsVideo = styled.div`
  height: 100%;
  position: relative;
  @media (max-width: 1110px) {
    display: none;
  }
`;
const StepsIframe = styled.iframe`
  border: none;
`;

const StepsVideoPreview = styled.div`
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const StepsVideoPlay = styled.button`
  width: 74px;
  height: 74px;
  border-radius: 50%;
  border: 3px solid #fff;
  background: rgba(75, 75, 75, 0.15);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s;
  &:active,
  &:focus {
    outline: none !important;
    border: 3px solid #fff !important;
  }
  &:hover {
    transform: translate(-50%, -50%) scale(130%);
  }
  &::after {
    content: '';
    display: block;
    width: 36px;
    height: 33px;
    background-image: url(${PlayIcon});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 100% 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;

  padding: 0 0 0 56px;
  margin-top: 50px;

  &:nth-child(1) {
    margin-left: 0;
    margin-top: 0px;
  }

  @media (max-width: 1110px) {
    margin-top: 24px;
    padding: 0 0 0 26px;
    &:nth-child(1) {
      margin-left: 0;
      margin-top: 32px;
    }
  }
`;

const NumberStep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  color: #191919;
  font-family: Gilroy;
  font-weight: 400;
  border-radius: 80px;

  min-width: 80px;
  min-height: 80px;
  max-width: 80px;
  max-height: 80px;
  font-size: 24px;

  @media (max-width: 1110px) {
    min-width: 56px;
    min-height: 56px;
    max-width: 56px;
    max-height: 56px;
    font-size: 20px;
  }
`;

const StepsMobile = ({ active }) => {
  const [showVideoTabFirst, setShowVideoTabFirst] = useState(false);
  const [showVideoTabSecond, setShowVideoTabSecond] = useState(false);
  const isMobile = useSelector((state) => state.app.isMobile);
  return (
    <>
      {active == 'custumer' ? (
        <StepsWrapper>
          <StyledSteps>
            <Step>
              <NumberStep>01</NumberStep>
              <Flex direction={'column'} margin={'0 0 0 16px'} justify={'center'}>
                <Text
                  color="#191919"
                  fontFamily="Gilroy"
                  fontWeight="400"
                  fontSize="14px"
                  textTransform="uppercase"
                  style={{
                    fontSize: isMobile ? '14px' : '20px',
                  }}>
                  Выбор и оплата
                </Text>
                <Text
                  color="#191919"
                  fontFamily="Mont"
                  fontWeight="600"
                  fontSize="12px"
                  margin="8px 0 0 0"
                  style={{
                    fontSize: isMobile ? '12px' : '14px',
                    margin: isMobile ? '8px 0 0 0' : '12px 0 0 0',
                  }}>
                  Выбрать и оплачивать товар можно посредством сайта или в нашем мобильном приложении для операционных систем Android и iOS
                </Text>
              </Flex>
            </Step>

            <Step>
              <NumberStep>02</NumberStep>
              <Flex direction={'column'} margin={'0 0 0 16px'} justify={'center'}>
                <Text
                  color="#191919"
                  fontFamily="Gilroy"
                  fontWeight="400"
                  fontSize="14px"
                  textTransform="uppercase"
                  style={{
                    fontSize: isMobile ? '14px' : '20px',
                  }}>
                  Проверка подлинности
                </Text>
                <Text
                  color="#191919"
                  fontFamily="Mont"
                  fontWeight="600"
                  fontSize="12px"
                  margin="8px 0 0 0"
                  style={{
                    fontSize: isMobile ? '12px' : '14px',
                    margin: isMobile ? '8px 0 0 0' : '12px 0 0 0',
                  }}>
                  Мы забираем товар у продавца и проверяем его у нашего эксперта. После мы прикрепляем к посылке сертификат подлинности и качества
                </Text>
              </Flex>
            </Step>

            <Step>
              <NumberStep>03</NumberStep>
              <Flex direction={'column'} margin={'0 0 0 16px'} justify={'center'}>
                <Text
                  color="#191919"
                  fontFamily="Gilroy"
                  fontWeight="400"
                  fontSize="14px"
                  textTransform="uppercase"
                  style={{
                    fontSize: isMobile ? '14px' : '20px',
                  }}>
                  Отправка товара
                </Text>
                <Text
                  color="#191919"
                  fontFamily="Mont"
                  fontWeight="600"
                  fontSize="12px"
                  margin="8px 0 0 0"
                  style={{
                    fontSize: isMobile ? '12px' : '14px',
                  }}>
                  После проверки курьер привозит посылку к вам домой или в офис в течение 3-х рабочих дней. За доставкой можно следить в личном кабинете
                </Text>
              </Flex>
            </Step>
          </StyledSteps>
          <StepsVideo>
            {showVideoTabFirst ? (
              <StepsIframe id="existing-iframe-example" width="100%" height="100%" src={'https://www.youtube.com/embed/fJ9rUzIMcZQ?autoplay=1&mute=1&enablejsapi=1'} frameborder="0"></StepsIframe>
            ) : (
              <StepsVideoPreview
                style={{
                  backgroundImage: `url(${VideoPrev})`,
                }}>
                <StepsVideoPlay onClick={() => setShowVideoTabFirst(true)}></StepsVideoPlay>
              </StepsVideoPreview>
            )}
          </StepsVideo>
        </StepsWrapper>
      ) : active == 'seller' ? (
        <StepsWrapper>
          <StyledSteps>
            <Step>
              <NumberStep>01</NumberStep>
              <Flex direction={'column'} margin={'0 0 0 16px'} justify={'center'}>
                <Text
                  color="#191919"
                  fontFamily="Gilroy"
                  fontWeight="400"
                  fontSize="14px"
                  textTransform="uppercase"
                  style={{
                    fontSize: isMobile ? '14px' : '20px',
                  }}>
                  Выбор и оплата продавцов
                </Text>
                <Text
                  color="#191919"
                  fontFamily="Mont"
                  fontWeight="600"
                  fontSize="12px"
                  margin="8px 0 0 0"
                  style={{
                    fontSize: isMobile ? '12px' : '14px',
                    margin: isMobile ? '8px 0 0 0' : '12px 0 0 0',
                  }}>
                  Выбрать и оплачивать товар можно посредством сайта или в нашем мобильном приложении для операционных систем Android и iOS
                </Text>
              </Flex>
            </Step>

            <Step>
              <NumberStep>02</NumberStep>
              <Flex direction={'column'} margin={'0 0 0 16px'} justify={'center'}>
                <Text
                  color="#191919"
                  fontFamily="Gilroy"
                  fontWeight="400"
                  fontSize="14px"
                  textTransform="uppercase"
                  style={{
                    fontSize: isMobile ? '14px' : '20px',
                  }}>
                  Проверка подлинности продавцов
                </Text>
                <Text
                  color="#191919"
                  fontFamily="Mont"
                  fontWeight="600"
                  fontSize="12px"
                  margin="8px 0 0 0"
                  style={{
                    fontSize: isMobile ? '12px' : '14px',
                    margin: isMobile ? '8px 0 0 0' : '12px 0 0 0',
                  }}>
                  Мы забираем товар у продавца и проверяем его у нашего эксперта. После мы прикрепляем к посылке сертификат подлинности и качества
                </Text>
              </Flex>
            </Step>

            <Step>
              <NumberStep>03</NumberStep>
              <Flex direction={'column'} margin={'0 0 0 16px'} justify={'center'}>
                <Text
                  color="#191919"
                  fontFamily="Gilroy"
                  fontWeight="400"
                  fontSize="14px"
                  textTransform="uppercase"
                  style={{
                    fontSize: isMobile ? '14px' : '20px',
                  }}>
                  Отправка товара продавцов
                </Text>
                <Text
                  color="#191919"
                  fontFamily="Mont"
                  fontWeight="600"
                  fontSize="12px"
                  margin="8px 0 0 0"
                  style={{
                    fontSize: isMobile ? '12px' : '14px',
                  }}>
                  После проверки курьер привозит посылку к вам домой или в офис в течение 3-х рабочих дней. За доставкой можно следить в личном кабинете
                </Text>
              </Flex>
            </Step>
          </StyledSteps>
          <StepsVideo>
            {showVideoTabSecond ? (
              <StepsIframe id="existing-iframe-example" width="100%" height="100%" src={'https://www.youtube.com/embed/fJ9rUzIMcZQ?autoplay=1&mute=1&enablejsapi=1'} frameborder="0"></StepsIframe>
            ) : (
              <StepsVideoPreview
                style={{
                  backgroundImage: `url(${VideoPrev})`,
                }}>
                <StepsVideoPlay onClick={() => setShowVideoTabSecond(true)}></StepsVideoPlay>
              </StepsVideoPreview>
            )}
          </StepsVideo>
        </StepsWrapper>
      ) : (
        ''
      )}
    </>
  );
};

export default StepsMobile;
