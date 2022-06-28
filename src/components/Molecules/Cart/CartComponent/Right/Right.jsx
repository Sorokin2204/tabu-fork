import * as S from './Styled';

const Right = () => {
  return (
    <S.Right>
      <S.TitleText marginTop="14px">ДАЛЬНЕЙШИЕ ШАГИ</S.TitleText>
      <br />
      <S.DefaultText> 1. Мы заберем товар у продавца и доставим его в наш центр контроля качества.</S.DefaultText>
      <S.DefaultText marginTop="19px"> 2. Наши эксперты проверят его на соответствие описанию и фотографиям, проведут проверку качества и подлинности. </S.DefaultText>
      <S.DefaultText marginTop="19px"> 3. Мы доставим товар на указанный вами адрес в течение 3х дней после проверки.</S.DefaultText>

      <S.TitleText marginTop="40px">ПОЧТОВЫЕ РАСХОДЫ</S.TitleText>
      <S.DefaultText marginTop="19px">Время и стоимость доставки могут варьироваться в зависимости от региона. </S.DefaultText>
      <S.TitleText marginTop="40px">НЕ удовлетворены?</S.TitleText>
      <S.DefaultText marginTop="19px">Если товар вам не подошел, вы всегда можете перепродать его на нашем вебсайте. </S.DefaultText>
    </S.Right>
  );
};

export default Right;
