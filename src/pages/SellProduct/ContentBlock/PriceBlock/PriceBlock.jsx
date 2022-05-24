import FormInput from 'components/Molecules/Form/FormInput/FormInput';
import * as S from './Styled';
const PriceBlock = ({ price, setPrice }) => {
  return (
    <S.Wrapper>
      <S.Title>Цена</S.Title>
      <S.Inputs>
        <FormInput value={price} setValue={setPrice} label={'Цена на сайте'} />
        <FormInput value={(price / 100) * 25} disabled label={'Ваша прибыль'} />
      </S.Inputs>
      <S.Description>Комиссия составляет от 15 до 25% в зависимости от стоимости товара</S.Description>
    </S.Wrapper>
  );
};

export default PriceBlock;
