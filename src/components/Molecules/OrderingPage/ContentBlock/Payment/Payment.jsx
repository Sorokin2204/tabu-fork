import axios from 'axios';
import Button from 'components/Atoms/Button';
import { API_URL } from 'config';
import { useSelector } from 'react-redux';
import * as S from './Styled';

const Payment = ({ name, setName, surname, setSurname, phone, setPhone, email, setEmail, city, setCity, street, setStreet, homeNumber, setHomeNumber, apartNumber, setApartNumber, comment, setComment, setStep, active }) => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  const onPayClick = async () => {
    let product = cartProducts?.length && cartProducts[0];

    const token = localStorage.getItem('token');
    const data = {
      data: { product },
      id: product.id,
    };

    const response = await axios.post(`${API_URL}/products/${product.id}/purchase/`, data, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    document.location.href = response.data.payment_page_url;
  };
  const isMobile = useSelector((state) => state.app.isMobile);

  return (
    <S.Wrapper active={active}>
      <S.Line />
      <S.TitleLine>
        <S.Title>Информация о доставке</S.Title>
        <S.Edit onClick={() => setStep(1)}>Изменить</S.Edit>
      </S.TitleLine>
      <S.Ul>
        <S.Li>{name + ' ' + surname}</S.Li>
        <S.Li>{phone}</S.Li>
        <S.Li>{email}</S.Li>
        <S.Li>{city}</S.Li>
        <S.Li>{street}</S.Li>
        <S.Li>{homeNumber}</S.Li>
        <S.Li>{apartNumber}</S.Li>
        <S.Li>{comment}</S.Li>
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
