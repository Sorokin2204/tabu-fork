import { Interweave } from 'interweave';
import React from 'react';
import * as S from './Styled';
const StepsLeft = ({ steps, title }) => {
  return (
    <>
      <S.Wrapper name="safe-block">
        <S.Title>{title}</S.Title>
        <S.StepList>
          {steps?.map((step, i) => (
            <S.StepItem>
              <S.StepCircle>{`0${i + 1}`}</S.StepCircle>
              <S.StepTitle>{step.title}</S.StepTitle>
            </S.StepItem>
          ))}
        </S.StepList>
      </S.Wrapper>
    </>
  );
};

export default StepsLeft;
