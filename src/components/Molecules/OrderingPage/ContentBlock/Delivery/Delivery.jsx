import Button from 'components/Atoms/Button';
import Radio from 'components/Atoms/Form/Radio';
import FormInput from 'components/Molecules/Form/FormInput/FormInput';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from './Styled';

const Delivery = ({ name, setName, surname, setSurname, phone, setPhone, email, setEmail, city, setCity, street, setStreet, homeNumber, setHomeNumber, apartNumber, setApartNumber, comment, setComment, setStep, active }) => {
  const [error, setError] = useState('');

  const continueClick = () => {
    if (name === '' || surname === '' || phone === '' || email === '' || city === '' || street === '' || homeNumber === '' || apartNumber === '' || comment === '') {
      return setError('Заполните все поля');
    }

    // if all inputs done
    else {
      setStep(2);
      window.scrollTo(0, 0);
      setError('');
    }
  };
  const isMobile = useSelector((state) => state.app.isMobile);

  return (
    <S.Wrapper active={active}>
      <S.Form>
        <S.TitleForm>Контактная информация</S.TitleForm>
        <S.DescriptionForm>Пожалуйста, заполните все поля</S.DescriptionForm>
        <FormInput width="100%" value={name} setValue={setName} type="text" placeholder={'Введите имя'} label="Имя" />
        <FormInput width="100%" value={surname} setValue={setSurname} type="text" placeholder={'Введите фамилию'} label="Фамилия" />
        <FormInput width="100%" value={phone} setValue={setPhone} type="text" placeholder={'Введите телефон'} label="Телефон" />
        <FormInput width="100%" value={email} setValue={setEmail} type="text" placeholder={'Введите адрес эл.почты'} label="Адрес эл. почты" />
      </S.Form>

      <S.Form>
        <S.TitleForm>Адрес и регион доставки</S.TitleForm>
        <S.DescriptionForm>Пожалуйста, заполните все поля</S.DescriptionForm>
        <FormInput width="100%" value={city} setValue={setCity} type="text" placeholder={'Введите город'} label="Город" />
        <FormInput width="100%" value={street} setValue={setStreet} type="text" placeholder={'Введите улицу'} label="Улица" />
        <FormInput width="100%" value={homeNumber} setValue={setHomeNumber} type="text" placeholder={'Введите номер дома'} label="Номер дома" />
        <FormInput width="100%" value={apartNumber} setValue={setApartNumber} type="text" placeholder={'Введите квартиру'} label="Квартира" />
      </S.Form>

      <S.Form>
        <S.TitleForm>Комментарий к заказу</S.TitleForm>
        <S.Textarea placeholder="Ваш комментарий" value={comment} onChange={(e) => setComment(e.target.value)} />
      </S.Form>

      <S.Form padding="0 0 80px 0">
        <S.TitleForm>Способ оплаты</S.TitleForm>
        <S.Radios>
          <Radio onChange={() => {}} label="Банковские карты" value={true} />
        </S.Radios>
      </S.Form>

      {error && <S.Error>* {error}</S.Error>}

      <div
        style={{
          width: isMobile ? '100%' : '233px',
          marginTop: isMobile ? '40px' : '0',
          padding: isMobile ? '0 25px' : '0',
          boxSizing: 'border-box',
        }}>
        <Button onClick={continueClick} topGreen padding="14px 0" width="100%">
          Продолжить
        </Button>
      </div>
    </S.Wrapper>
  );
};

export default Delivery;
