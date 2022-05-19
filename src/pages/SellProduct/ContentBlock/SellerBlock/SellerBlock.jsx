import FormInput from "components/Molecules/Form/FormInput/FormInput";
import * as S from "./Styled";

const SellerBlock = (props) => {
  return (
    <S.Wrapper>
      <S.Title>Продавец</S.Title>
      <S.Inputs>
        <FormInput
          label="Имя"
          placeholder={"Введите имя"}
          value={props.name}
          setValue={props.setName}
        />
        <FormInput
          label="Фамилия"
          placeholder={"Введите фамилию"}
          value={props.surname}
          setValue={props.setSurname}
        />
        <FormInput
          label="Телефон"
          placeholder={"Введите телефон"}
          value={props.phone}
          setValue={props.setPhone}
        />
        <FormInput
          label="Регион"
          placeholder={"Введите регион"}
          value={props.region}
          setValue={props.setRegion}
        />
        <FormInput
          label="Город"
          placeholder={"Введите город"}
          value={props.city}
          setValue={props.setCity}
        />
        <FormInput
          label="Улица"
          placeholder={"Введите улицу"}
          value={props.street}
          setValue={props.setStreet}
        />
        <FormInput
          label="Номер дома"
          placeholder={"Введите номер дома"}
          value={props.homeNumber}
          setValue={props.setHomeNumber}
        />
        <FormInput
          label="Квартира"
          placeholder={"Введите номер квартиры"}
          value={props.apartNumber}
          setValue={props.setApartNumber}
        />
      </S.Inputs>
    </S.Wrapper>
  );
};

export default SellerBlock;
