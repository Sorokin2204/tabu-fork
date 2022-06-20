import { Interweave } from 'interweave';
import React from 'react';
import * as S from './Styled';
const Steps = ({ steps, title, columns, mobLineHeight }) => {
  return (
    <>
      <S.Wrapper name="how-to-block">
        <S.Title>{title}</S.Title>
        <S.StepList
          mobLineHeight={mobLineHeight}
          style={{
            gridTemplateColumns: columns ?? 'repeat(3,1fr)',
          }}>
          {steps?.map((step, i) => (
            <S.StepItem>
              <S.StepCircle>{`0${i + 1}`}</S.StepCircle>
              <S.StepTitle>{step.title}</S.StepTitle>
              <S.StepDesc>{step.desc}</S.StepDesc>
            </S.StepItem>
          ))}
        </S.StepList>
      </S.Wrapper>
    </>
  );
};

export default Steps;
