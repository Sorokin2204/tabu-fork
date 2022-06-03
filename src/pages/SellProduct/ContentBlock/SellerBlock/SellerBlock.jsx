import FormInput from 'components/Molecules/Form/FormInput/FormInput';
import { useSelector } from 'react-redux';
import * as S from './Styled';

const SellerBlock = ({ control, errors, register }) => {
  const isMobile = useSelector((state) => state.app.isMobile);
  return (
    <S.Wrapper>
      <S.Title>Продавец</S.Title>
      <S.Inputs>
        <FormInput
          label="Телефон"
          placeholder="Введите ваш номер телефона"
          type="phone"
          control={control}
          name="phone_number"
          errors={errors}
          rules={{
            required: { value: true, message: 'Заполните телефон' },
          }}
          style={{
            marginTop: isMobile ? '34px' : '41px',
          }}
        />
        <FormInput
          label="Регион"
          placeholder={'Введите регион'}
          register={register}
          name="region"
          rules={{
            required: { value: true, message: 'Заполните регион' },
          }}
          errors={errors}
          style={{
            marginTop: isMobile ? '34px' : '41px',
          }}
        />
        <FormInput
          label="Город"
          placeholder={'Введите город'}
          register={register}
          name="city"
          rules={{
            required: { value: true, message: 'Заполните город' },
          }}
          errors={errors}
          style={{
            marginTop: isMobile ? '34px' : '41px',
          }}
        />
        <FormInput
          label="Улица"
          placeholder={'Введите улицу'}
          register={register}
          name="street"
          rules={{
            required: { value: true, message: 'Заполните улицу' },
          }}
          errors={errors}
          style={{
            marginTop: isMobile ? '34px' : '41px',
          }}
        />
        <FormInput
          type="number"
          control={control}
          label="Номер дома"
          placeholder={'Введите номер дома'}
          register={register}
          name="number_of_house"
          rules={{
            required: { value: true, message: 'Заполните номер дома' },
          }}
          errors={errors}
          style={{
            marginTop: isMobile ? '34px' : '41px',
          }}
        />
        <FormInput
          type="number"
          control={control}
          label="Квартира"
          placeholder={'Введите номер квартиры'}
          register={register}
          name="number_of_flat"
          rules={{
            required: { value: true, message: 'Заполните номер квартиры' },
          }}
          errors={errors}
          style={{
            marginTop: isMobile ? '34px' : '41px',
          }}
        />
      </S.Inputs>
    </S.Wrapper>
  );
};

export default SellerBlock;
