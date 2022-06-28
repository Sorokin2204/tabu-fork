import FormInput from 'components/Molecules/Form/FormInput/FormInput';
import * as S from './Styled';
const PriceBlock = ({ register, errors, watch, control }) => {
  const price = watch('price');
  return (
    <S.Wrapper>
      <S.Title>Цена</S.Title>
      <S.Inputs>
        <FormInput
          control={control}
          type="price"
          placeholder=""
          register={register}
          name="price"
          rules={{
            required: { value: true, message: 'Заполните цену' },
          }}
          errors={errors}
          label={'Цена на сайте'}
        />
        <div>
          <FormInput
            control={control}
            type="price"
            placeholder=""
            register={register}
            name="old_price"
            rules={{
              required: { value: false },
            }}
            errors={errors}
            label={'Новая цена'}
          />
          <S.Description>Если вы хотите, чтобы ваш товар продался быстрее, вы можете сделать на него скидку </S.Description>
        </div>
        <div>
          <FormInput style={{ marginTop: '30px' }} value={price ? '₸ ' + Math.floor((price.replace(/[^0-9.]/g, '') / 100) * 75) : ''} disabled label={'Ваша прибыль'} /> <S.Description style={{ fontSize: '14px', marginTop: '36px' }}>Комиссия составляет 25% </S.Description>
        </div>
      </S.Inputs>
    </S.Wrapper>
  );
};

export default PriceBlock;
