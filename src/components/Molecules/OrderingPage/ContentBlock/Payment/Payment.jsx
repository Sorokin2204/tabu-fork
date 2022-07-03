import axios from 'axios';
import Button from 'components/Atoms/Button';
import { API_URL } from 'config';
import { useDispatch, useSelector } from 'react-redux';
import { ordering } from 'redux/actions/cart';
import * as S from './Styled';

const Payment = ({ setStep, active, values, data }) => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const dispatch = useDispatch();
  const onPayClick = async () => {
    // dispatch(ordering(data))
    const postData = {
      size_variation_ids: JSON.parse(localStorage.getItem('cart'))?.map((item) => item?.size?.id),
      f_name: data.name,
      l_name: data.surname,
      phone: data.phone,
      email: data.email,
      city: data.city,
      street: data.street,
      number_of_house: data.house,
      number_of_apartament: parseInt(data.flat),
      comment: data.comment,
    };
    console.log(postData);
    dispatch(ordering(postData));
    // document.location.href = response.data.payment_page_url;
  };
  const isMobile = useSelector((state) => state.app.isMobile);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <S.Wrapper active={active}>
      <S.Line />
      <S.TitleLine>
        <S.Title>Информация о доставке</S.Title>
        <S.Edit onClick={() => setStep(1)}>Изменить</S.Edit>
      </S.TitleLine>
      <S.Ul>
        <S.Li>{`${capitalizeFirstLetter(values?.name)} ${capitalizeFirstLetter(values?.surname)}`}</S.Li>
        <S.Li>{values?.phone}</S.Li>
        <S.Li>{values?.email}</S.Li>
        <S.Li>{`${values?.region}, ${values?.city}`}</S.Li>
        <S.Li>{`ул.${values?.street}, д.${values?.house}, кв.${values?.flat}`}</S.Li>
        <S.Li>{values?.comment}</S.Li>
      </S.Ul>
      <S.Line2 />
      <Button
        onClick={onPayClick}
        topGreen
        padding="14px 0"
        style={{
          width: '100%',
          marginTop: isMobile ? '80px' : '150px',
        }}>
        Продолжить
      </Button>
    </S.Wrapper>
  );
};

export default Payment;
