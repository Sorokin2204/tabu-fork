import Guarante from 'components/Molecules/Guarante/Guarante';
import Steps from 'components/Molecules/Steps/Steps';
import React, { useEffect } from 'react';
import * as S from './Styled';
import GuaranteImg from 'assets/img/guarante-how-to-sell.jpeg';
import StepsLeft from 'components/Molecules/StepsLeft/StepsLeft';
import { scrollToSection } from 'utils/scrollToSection';
import { useLocation, useParams } from 'react-router-dom';
const HowToBuy = () => {
  const { hash } = useLocation();
  const steps = [
    { title: 'Оформите заказ', desc: 'Оформите заказ используя безопасную сделку,  где у каждого продавца нужно оплачивать и  оформлять заказ отдельно.' },
    { title: 'Экспертиза', desc: 'После подтверждения и отгрузки заказа от   продавца, он попадает на экспертизу в TAABU,  где проходит проверку на подлинность и  соответствие описанию продавца.' },

    { title: 'Ожидайте товар', desc: 'Вы можете отслеживать доставку товара в  личном кабинете.' },
  ];

  const guaranteList = [
    { title: 'Экспертиза фото', desc: 'Мы проверяем размер, состояние, стоимость и подлинность товара по фотографии продавца. ' },
    { title: 'Экспертиза в офисе', desc: 'После оформления заказа мы заберем товар у продавца, проверим его на подлинность, а затем отправим покупателю.' },
  ];
  const safeSteps = [{ title: 'Оплата покупки онлайн' }, { title: 'Перевод средств на счет TAABU' }, { title: 'Получение заказа после экспертизы TAABU' }, { title: 'Списание средств со счета TAABU и их перевод продавцу' }];

  useEffect(() => {
    scrollToSection();
  }, [hash]);
  return (
    <>
      <Steps steps={steps} mobLineHeight={'85%'} columns={'minmax(0,362px) minmax(0,356px) minmax(0,338px)'} title={'Как покупать'} />
      <Guarante title={'Гарантия подлинности'} img={GuaranteImg} list={guaranteList} />
      <StepsLeft steps={safeSteps} title={'Безопасная сделка'} />
    </>
  );
};

export default HowToBuy;
