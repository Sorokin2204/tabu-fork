import { Interweave } from 'interweave';
import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './Styled';
const Help = () => {
  const isMobile = useSelector((state) => state.app.isMobile);
  return (
    <>
      <S.Wrapper>
        <S.Inner>
          <S.Content>
            <S.Title>ПОМОЩЬ</S.Title>
            <S.Text>
              Почта: <S.TextLine href="mailto:info@taabu.kz">info@taabu.kz</S.TextLine>
            </S.Text>
            <S.Text style={{ marginBottom: isMobile ? '28px' : '30px' }}>
              По вопросам сотрудничества можете написать&nbsp;
              <S.TextLine href="mailto:info@taabu.kz">info@taabu.kz</S.TextLine>
            </S.Text>
            <S.Text>
              Телефон&nbsp;
              <S.TextLine href="tel:+77068368442">+ 7 706 836 8442</S.TextLine>
            </S.Text>
            <S.Text style={{ marginBottom: '30px' }}>Клиентская служба принимает звонки с понедельника по пятницу, с 10:00 до 18:00 по Алматинскому времени.</S.Text>
            <S.Text>
              Ответы на часто задаваемые вопросы можете посмотреть <S.TextLink href="/#faq-block">здесь</S.TextLink>
            </S.Text>
          </S.Content>
        </S.Inner>
      </S.Wrapper>
    </>
  );
};

export default Help;
