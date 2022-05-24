import FormInput from 'components/Molecules/Form/FormInput/FormInput';
import { useSelector } from 'react-redux';
import * as S from './Styled';

const SellerBlock = (props) => {
  const isMobile = useSelector((state) => state.app.isMobile);
  return (
    <S.Wrapper>
      <S.Title>Продавец</S.Title>
      <S.Inputs>
        <FormInput
          label="Имя"
          placeholder={'Введите имя'}
          value={props.name}
          setValue={props.setName}
          style={{
            marginTop: isMobile ? '0px' : '41px',
          }}
        />
        <FormInput
          label="Фамилия"
          placeholder={'Введите фамилию'}
          value={props.surname}
          setValue={props.setSurname}
          style={{
            marginTop: isMobile ? '34px' : '41px',
          }}
        />
        <FormInput
          label="Телефон"
          placeholder={'Введите телефон'}
          value={props.phone}
          setValue={props.setPhone}
          style={{
            marginTop: isMobile ? '34px' : '41px',
          }}
        />
        <FormInput
          label="Регион"
          placeholder={'Введите регион'}
          value={props.region}
          setValue={props.setRegion}
          style={{
            marginTop: isMobile ? '34px' : '41px',
          }}
        />
        <FormInput
          label="Город"
          placeholder={'Введите город'}
          value={props.city}
          setValue={props.setCity}
          style={{
            marginTop: isMobile ? '34px' : '41px',
          }}
        />
        <FormInput
          label="Улица"
          placeholder={'Введите улицу'}
          value={props.street}
          setValue={props.setStreet}
          style={{
            marginTop: isMobile ? '34px' : '41px',
          }}
        />
        <FormInput
          label="Номер дома"
          placeholder={'Введите номер дома'}
          value={props.homeNumber}
          setValue={props.setHomeNumber}
          style={{
            marginTop: isMobile ? '34px' : '41px',
          }}
        />
        <FormInput
          label="Квартира"
          placeholder={'Введите номер квартиры'}
          value={props.apartNumber}
          setValue={props.setApartNumber}
          style={{
            marginTop: isMobile ? '34px' : '41px',
          }}
        />
      </S.Inputs>
    </S.Wrapper>
  );
};

export default SellerBlock;
