import Why from 'components/Molecules/AboutUsPage/Why/Why';
import React, { useEffect } from 'react';
import WeSelling from 'assets/img/about-us.png';
import Invoice from 'components/Molecules/AboutUsPage/Invoice/Invoice';
import TaabuImg from 'assets/img/logo-green.png';
import BagSchema from 'assets/img/bag-schema.png';

import Mission from 'components/Molecules/AboutUsPage/Mission/Mission';
import Guarante from 'components/Molecules/AboutUsPage/Guarante/Guarante';
import Help from 'components/Molecules/AboutUsPage/Help/Help';
import { scrollToSection } from 'utils/scrollToSection';
const whyData = {
  title: 'Почему TAABU?',
  desc: `Мы верим, что на каждую хорошую вещь всегда найдется свой хозяин.

Табу в переводе с казахского языка значит “найти” или “находка” и это как раз то, для чего предназначается наша компания.

TAABU - это первый онлайн сервис для покупки и перепродажи брендовых вещей в Казахстане. Здесь любой желающий может не только продать свои вещи быстро и самостоятельно, но и купить качественную вещь категории люкс по выгодной цене с 100% гарантией аутентичности. Мы превращаем покупку подержанных вещей в высококачественный, прозрачный, и легкий процесс.`,
  img: WeSelling,
};

const invoiceData = {
  title: 'TAABU приглашает вас заботиться о природе вместе с нами',
  desc: 'Тенденция приобретать pre-loved вещи происходит от стремления к экологически устойчивой моде. По всему миру платформы подобные TAABU уже обрели популярность среди ценителей высококачественной и модной одежды, будь то редкий винтаж или новинки. Second-hand потребление способствует сохранению огромного количества воды и может значительно сократить выброс вредных газов в мир вокруг нас. Экологически устойчивая мода - это будущее. Вы готовы помочь нам воплотить мечты в реальность здесь и сейчас?',
};
const missionData = {
  title: 'Наша миссия',
  desc: `Наша главная миссия - развитие цикличной моды в Казахстане.

Подобные сервисы зачастую не предоставляют контроля над процессом, прозрачности, гарантии подлинности. С TAABU все иначе - мы заботимся о потребностях и комфорте клиентов, делаем процесс приятным и легким для наших пользователей.`,
  img: TaabuImg,
};
const guaranteData = {
  title: 'ГАРАНТИИ ОТ TAABU',
  desc: `Перед отправкой товара покупателю, эксперты TAABU тщательно проверяют каждую вещь на подлинность и соответствие описанию. Мы используем профессиональный прибор аутентификации Entrupy и имеем специалистов в сфере люксовой одежды, чтобы вы получали только оригинальный продукт. 

После прохождения экспертизы мы прикрепляем к посылке сертификат подлинности и качества от TAABU.  `,
  img: BagSchema,
};
const AboutUs = () => {
  useEffect(() => {
    scrollToSection();
  }, []);

  return (
    <>
      <Why {...whyData} />
      <Invoice {...invoiceData} />
      <Mission {...missionData} />
      <Guarante {...guaranteData} />
      <Help />
    </>
  );
};

export default AboutUs;
