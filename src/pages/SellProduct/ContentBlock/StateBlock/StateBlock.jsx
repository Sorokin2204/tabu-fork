import * as S from './Styled';

const StateBlock = ({ state, setState }) => {
  return (
    <S.Wrapper>
      <S.Title>Состояние</S.Title>
      <S.Variants>
        <S.Variant onClick={() => setState('new')}>
          <S.VariantRow>
            <S.VariantStatus active={state === 'new'}></S.VariantStatus>
            <S.VariantTitle>Новое - с биркой</S.VariantTitle>
          </S.VariantRow>
          <S.VariantDescription>Абсолютно новая вещь, которая ни разу не была в носке. Все фирменные бирки и упаковка прилагаются.</S.VariantDescription>
        </S.Variant>

        <S.Variant onClick={() => setState('great')}>
          <S.VariantRow>
            <S.VariantStatus active={state === 'great'}></S.VariantStatus>
            <S.VariantTitle>Отличное состояние</S.VariantTitle>
          </S.VariantRow>
          <S.VariantDescription>Вещь в прекрасном состоянии, без явных внешних следов носки и дефектов. К ней может быть приложен не весь комлект документов, а также отсутствовать фирменная упаковка. Допускаются небольшие внутренние дефекты.</S.VariantDescription>
        </S.Variant>

        <S.Variant onClick={() => setState('good')}>
          <S.VariantRow>
            <S.VariantStatus active={state === 'good'}></S.VariantStatus>
            <S.VariantTitle>Хорошее состояние</S.VariantTitle>
          </S.VariantRow>
          <S.VariantDescription>Вещь бывшая в употреблении, за которой хорошо ухаживали. Возможны небольшие деффекты в виде сколов, царапинок, дырочек и зацепок.</S.VariantDescription>
        </S.Variant>
      </S.Variants>
    </S.Wrapper>
  );
};

export default StateBlock;
