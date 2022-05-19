import * as S from "./Styled";

const CategorySteps = ({ step, setStep }) => {
  return (
    <S.Wrapper>
      <S.Step>
        <S.StepCircle active>01</S.StepCircle>
      </S.Step>
      <S.Line />

      <S.Step>
        <S.StepCircle active={step >= 2 && true}>02</S.StepCircle>
      </S.Step>
      <S.Line />

      <S.Step>
        <S.StepCircle active={step === 3 && true}>03</S.StepCircle>
      </S.Step>
    </S.Wrapper>
  );
};

export default CategorySteps;
