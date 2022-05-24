import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Delivery from './Delivery/Delivery';
import Payment from './Payment/Payment';
import Steps from './Steps/Steps';
import * as S from './Styled';

const ContentBlock = () => {
  const [step, setStep] = useState(1);

  // contact information
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  // adress and region
  const [city, setCity] = useState();
  const [street, setStreet] = useState();
  const [homeNumber, setHomeNumber] = useState();
  const [apartNumber, setApartNumber] = useState();

  const [comment, setComment] = useState();

  return (
    <S.ContentBlock>
      <S.Header>
        <Link to="/">
          <S.HeaderLogo src={'/img/logo.png'} alt="" />
        </Link>
      </S.Header>
      <Steps step={step} setStep={setStep} />
      <S.Container>
        <Delivery
          name={name}
          setName={setName}
          surname={surname}
          setSurname={setSurname}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          city={city}
          setCity={setCity}
          street={street}
          setStreet={setStreet}
          homeNumber={homeNumber}
          setHomeNumber={setHomeNumber}
          apartNumber={apartNumber}
          setApartNumber={setApartNumber}
          comment={comment}
          setComment={setComment}
          setStep={setStep}
          active={step === 1 && true}
        />
        <Payment
          name={name}
          setName={setName}
          surname={surname}
          setSurname={setSurname}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          city={city}
          setCity={setCity}
          street={street}
          setStreet={setStreet}
          homeNumber={homeNumber}
          setHomeNumber={setHomeNumber}
          apartNumber={apartNumber}
          setApartNumber={setApartNumber}
          comment={comment}
          setComment={setComment}
          setStep={setStep}
          active={step === 2 && true}
        />
      </S.Container>
    </S.ContentBlock>
  );
};

export default ContentBlock;
