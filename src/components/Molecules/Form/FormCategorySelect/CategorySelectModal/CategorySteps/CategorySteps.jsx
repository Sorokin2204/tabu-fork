import { useSelector } from 'react-redux';
import * as S from './Styled';

const CategorySteps = ({ step, setStep, thirdCategories, secondCategories }) => {
  const isMobile = useSelector((state) => state.app.isMobile);
  return (
    <S.Wrapper>
      <S.Step
        onClick={() => {
          if (isMobile) {
            setStep(1);
          }
        }}>
        <S.StepCircle active={step >= 1 || !step}>01</S.StepCircle>
      </S.Step>
      <S.Line
        style={{
          ...(isMobile && { margin: '0 9px 0 17px' }),
        }}
      />

      <S.Step
        onClick={() => {
          if (isMobile && secondCategories) {
            setStep(2);
          }
        }}>
        <S.StepCircle active={step >= 2}>02</S.StepCircle>
      </S.Step>
      <S.Line
        style={{
          ...(isMobile && { margin: '0 17px 0 9px' }),
        }}
      />

      <S.Step>
        <S.StepCircle
          active={step >= 3}
          onClick={() => {
            if (isMobile && thirdCategories) {
              setStep(3);
            }
          }}>
          03
        </S.StepCircle>
      </S.Step>
    </S.Wrapper>
  );
};

export default CategorySteps;
