import * as S from './Styled';

const StateBlock = ({ name, setValue, watch }) => {
  const value = watch(name);
  return (
    <S.Wrapper>
      <S.Title>Состояние</S.Title>
      <S.Variants>
        <S.Variant onClick={() => setValue(name, 0)}>
          <S.VariantRow>
            <S.VariantStatus active={value === 0}></S.VariantStatus>
            <S.VariantTitle>Новое - с биркой</S.VariantTitle>
          </S.VariantRow>
          <S.VariantDescription>Абсолютно новая вещь, которая ни разу не была в носке. Все фирменные бирки и упаковка прилагаются.</S.VariantDescription>
        </S.Variant>
        {/* <S.Variant onClick={() => setValue(name, 1)}>
          <S.VariantRow>
            <S.VariantStatus active={value === 1}></S.VariantStatus>
            <S.VariantTitle>Новое, без бирки</S.VariantTitle>
          </S.VariantRow>
          <S.VariantDescription>Абсолютно новая вещь, которая ни разу не была в носке. Бирок нет и наличие упаковки надо уточнять.</S.VariantDescription>
        </S.Variant> */}
        <S.Variant onClick={() => setValue(name, 2)}>
          <S.VariantRow>
            <S.VariantStatus active={value === 2}></S.VariantStatus>
            <S.VariantTitle>Отличное состояние</S.VariantTitle>
          </S.VariantRow>
          <S.VariantDescription>Вещь в прекрасном состоянии, без явных внешних следов носки и дефектов. К ней может быть приложен не весь комлект документов, а также отсутствовать фирменная упаковка. Допускаются небольшие внутренние дефекты.</S.VariantDescription>
        </S.Variant>

        <S.Variant onClick={() => setValue(name, 3)}>
          <S.VariantRow>
            <S.VariantStatus active={value === 3}></S.VariantStatus>
            <S.VariantTitle>Хорошее состояние</S.VariantTitle>
          </S.VariantRow>
          <S.VariantDescription>Вещь бывшая в употреблении, за которой хорошо ухаживали. Возможны небольшие деффекты в виде сколов, царапинок, дырочек и зацепок.</S.VariantDescription>
        </S.Variant>
      </S.Variants>
    </S.Wrapper>
  );
};

export default StateBlock;
