import * as S from "./Styled";

const Right = () => {
  return (
    <S.Right>
      <S.TitleText marginTop="14px">ДАЛЬНЕЙШИЕ ШАГИ</S.TitleText>

      <S.DefaultText marginTop="19px">Ваш товар будет :</S.DefaultText>
      <S.DefaultText>
        1. Отправлен продавцом в наш центр контроля и проверки подлинности
        (за исключением случаев, когда товар уже есть на складе или отправлен
        через Direct Shipping).
      </S.DefaultText>
      <S.DefaultText marginTop="19px">
        2. Контролируется и проверяется нашими экспертами (если только товар
        не отправляется через прямую доставку).
      </S.DefaultText>
      <S.DefaultText marginTop="19px">3. Отправлен вам!</S.DefaultText>
      <S.DefaultText marginTop="19px">
        Если вы выбрали опцию Direct Shipping, ваш товар будет отправлен
        непосредственно на ваш адрес, без проверки Tabu.
      </S.DefaultText>
      <S.DefaultText marginTop="19px">
        Если вы выбрали вариант Экспресс-доставки, ваш товар уже находится
        на складе Tabu и будет доставлен в течение 2-5 дней.
      </S.DefaultText>

      <S.TitleText marginTop="40px">ПОЧТОВЫЕ РАСХОДЫ</S.TitleText>

      <S.DefaultText marginTop="19px">
        Доставка UPS, DHL, Fedex или Colissimo.
      </S.DefaultText>

      <S.TitleText marginTop="40px">ДОСТАВКА</S.TitleText>

      <S.DefaultText marginTop="19px">
        Вашему продавцу будет предложено быстро отправить ваш товар. Мы
        постараемся, чтобы сроки доставки были как можно короче. Если вы купили
        товар у доверенного или экспертного продавца, у него есть 5 дней на
        отправку.
      </S.DefaultText>

      <S.TitleText marginTop="40px">НЕ удовлетворены?</S.TitleText>

      <S.DefaultText marginTop="19px">
        Перерегистрируйте свой товар в течение 72 часов! Это просто и без
        комиссии.
      </S.DefaultText>
    </S.Right>
  );
};

export default Right;
