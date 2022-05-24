import * as S from './Styled';

const Steps = ({ step, setStep }) => {
  return (
    <S.Wrapper>
      <S.Step onClick={() => setStep(1)}>
        <S.StepCircle active>01</S.StepCircle>
        <S.StepName>Доставка</S.StepName>
      </S.Step>
      <S.Line />

      <S.Step onClick={() => setStep(2)}>
        <S.StepCircle active={step === 2 && true}>02</S.StepCircle>
        <S.StepName>Оплата</S.StepName>
      </S.Step>
      <S.Line />

      <S.Step>
        <S.StepCircle>03</S.StepCircle>
        <S.StepName>Отправка</S.StepName>
      </S.Step>
    </S.Wrapper>
  );
};

export default Steps;
