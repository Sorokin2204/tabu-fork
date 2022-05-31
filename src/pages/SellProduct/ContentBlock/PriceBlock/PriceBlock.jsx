import FormInput from 'components/Molecules/Form/FormInput/FormInput';
import * as S from './Styled';
const PriceBlock = ({ price, setPrice }) => {
  return (
    <S.Wrapper>
      <S.Title>Цена</S.Title>
      <S.Inputs>
        <FormInput value={price} setValue={setPrice} label={'Цена на сайте'} />
        <div>
          {' '}
          <FormInput
            placeholder="Введите электронную почту"
            name="old_price"
            rules={{
              required: { value: true, message: 'Обязательное поле' },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Неправильный формат почты',
              },
            }}
            label={'Новая цена'}
          />
          <S.Description>Если вы хотите, чтобы ваш товар продался быстрее, вы можете сделать на него скидку </S.Description>
        </div>
        <div>
          <FormInput style={{ marginTop: '30px' }} value={(price / 100) * 25} disabled label={'Ваша прибыль'} /> <S.Description style={{ fontSize: '14px', marginTop: '36px' }}>Комиссия составляет 25% </S.Description>
        </div>
      </S.Inputs>
    </S.Wrapper>
  );
};

export default PriceBlock;
