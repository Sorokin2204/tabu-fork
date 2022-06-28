import Guarante from 'components/Molecules/Guarante/Guarante';
import Steps from 'components/Molecules/Steps/Steps';
import React from 'react';
import * as S from './Styled';
import GuaranteImg from 'assets/img/guarante-how-to-sell.jpeg';
import StepsLeft from 'components/Molecules/StepsLeft/StepsLeft';
import Commission from 'components/Molecules/Guarante/Сommission/Сommission';
import { useLocation, useParams } from 'react-router-dom';
import { scrollToSection } from 'utils/scrollToSection';
import { useEffect } from 'react';
const HowToSell = () => {
  const steps = [
    { title: 'Опубликуйте товар', desc: 'Разместите фото на сайте TAABU. Максимально заполните все поля, чтобы быстрее продать свой товар.' },
    { title: 'Передайте Товар', desc: 'Перед передачей товара курьеру TAABU, постирайте, высушите и прогладьте его. Дополнительные затраты сервиса могут быть вычтены из вашей прибыли.' },

    { title: 'Получите выплату', desc: 'При подтверждении выплаты, мы просим вас указать расчетный счет и банковский идентификационный код, эти данные вы можете взять в личном кабинете своего онлайн банка.' },
  ];

  const guaranteList = [
    { title: 'Экспертиза фото', desc: 'Мы проверяем размер, состояние, стоимость и подлинность товара по фотографии продавца. ' },
    { title: 'Экспертиза в офисе', desc: 'После оформления заказа мы заберем товар у продавца, проверим его на подлинность, а затем отправим покупателю.' },
  ];
  const safeSteps = [{ title: 'Оплата покупки онлайн' }, { title: 'Перевод средств на счет TAABU' }, { title: 'Получение заказа после экспертизы TAABU' }, { title: 'Списание средств со счета TAABU и их перевод продавцу' }];

  const commision = [
    {
      title: 'Что включает в себя комиссия ',
      list: [
        ' Помощь и советы от наших специалистов по лучшему размещению и быстрой продаже вашего товара',
        'Проверка товара на подлинность и соответствие заявленным характеристикам перед отправкой новому владельцу',
        'Расходы по доставке товара',
        'Реклама и продвижение ресурса, чтобы ваши товары продавались как можно быстрее',
      ],
    },
    {
      title: 'Почему это выгодно ',
      list: ['  Вы не несете никаких затрат. Комиссия TAABU взымается только после доставки товара покупателю', 'Минимальное количество времени на размещение товара благодаря отзывчивому интерфейсу и советам TAABU по продаже товара', 'Все товары доставляются покупателю в фирменной упаковке TAABU'],
    },
  ];
  const { hash } = useLocation();
  useEffect(() => {
    scrollToSection();
  }, [hash]);
  return (
    <>
      <Steps steps={steps} mobLineHeight={'78%'} columns={'minmax(0,362px) minmax(0,398px) minmax(0,377px)'} title={'Как продавать? '} />
      <Guarante title={'Гарантия подлинности'} img={GuaranteImg} list={guaranteList} />
      <StepsLeft steps={safeSteps} title={'Безопасная сделка'} />
      <Commission title="Комиссия" caption={'Наша комиссия составляет 25% от стоимости товара'} list={commision} />
    </>
  );
};

export default HowToSell;
