import Expand from './Expand/Expand';
import * as S from './Styled';
import Delivery from 'assets/svg/product/Delivery.svg';
import Truck from 'assets/svg/product/Truck.svg';
import Safety from 'assets/svg/product/Safety.svg';
import Mail from 'assets/svg/product/Delivery.svg';
import Info from 'assets/svg/info.svg';
const Expands = () => {
  return (
    <S.Container>
      <S.Expands>
        <Expand Icon={Delivery} Name="Контроль качества" desc={`Для того чтобы покупатель мог убедиться в подлинности и качестве товара, каждый товар проходит экспертизу. Только после прохождения <b>четырех этапов</b> вещь пересылается покупателю.`} />
        <Expand
          Icon={Info}
          Name="Этапы экспертизы TAABU"
          desc={`
• Визуальная проверка на подлинность при модерации размещенных продавцом фотографий. Экспертная модерация заявленной цены.
• Экспертиза в офисе на подлинность, качество, соответствие заявленному описанию. При несоответствии, покупателю будет предложено купить товар по сниженной цене или отменить заказ.
• Предпродажная подготовка
• Фирменная упаковка TAABU
        `}
        />
        <Expand
          Icon={Truck}
          Name="Доставка и возврат"
          desc={`
Доставка по городу Алматы занимает до 7 дней. Доставка в другие города Казахстана может занять больше времени. 

Ваш заказ проходит несколько стадий логистики:
• Доставка в офис TAABU на экспертизу 
• Экспертиза TAABU и фирменная упаковка
• Доставка покупателю

У нас очень тщательно настроена и автоматизирована логистическая схема, которая требует определенных затрат. В итоге вы получаете быструю доставку по низкой цене.
Большую часть транспортных расходов TAABU берет на себя. Стоимость доставки может варьироваться в зависимости от региона.
Отслеживайте движение заказа в личном кабинете. 

        `}
        />
        <Expand
          Icon={Safety}
          Name="Безопасная сделка"
          desc={`
                   Мы работаем по системе «безопасная сделка» и используем проверенную систему <b>Paybox</b>, что гарантирует покупателю получение заказа, а продавцу – оплату:
<br>
<br>• Совершение покупки
<br>• Перевод средств на счет TAABU
<br>• Получение заказа покупателем
<br>• Списание средств со счета TAABU и перевод их продавцу
<br><br>
Перед отправкой каждое изделие проходит <b>экспертизу качества</b> и предпродажную подготовку.
        `}
        />
        <Expand
          Icon={Mail}
          Name="Помощь и поддержка"
          desc={`
Почта: <a href="mailto:info@taabu.kz">info@taabu.kz</a><br>
Пожалуйста, опишите ситуацию в деталях, чтобы мы смогли помочь вам ее решить как можно быстрее.<br>
<br>
Телефон: <a href="tel:+77068368442">+ 7 706 836 8442</a><br>
Клиентская служба принимает звонки с понедельника по пятницу, с 10:00 до 18:00 по Алматинскому времени.<br>

        `}
        />
      </S.Expands>
    </S.Container>
  );
};

export default Expands;
