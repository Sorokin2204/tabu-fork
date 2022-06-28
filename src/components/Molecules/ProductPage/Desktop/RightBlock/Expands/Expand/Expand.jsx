import { Interweave } from 'interweave';
import { useState } from 'react';
import * as S from './Styled';

const Expand = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <S.Expand onClick={() => setOpen(!open)}>
      <S.ExpandContainer>
        <S.Left>
          <S.Icon>
            <img src={props.Icon} alt="" />
          </S.Icon>
          <S.ExpandName>{props.Name}</S.ExpandName>
        </S.Left>
        <S.ExpandIcon>
          {open ? (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 14L12 10L16 14" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 10L12 14L8 10" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </S.ExpandIcon>
      </S.ExpandContainer>
      {open ? (
        <S.TextBox>
          <Interweave
            style={{
              fontFamily: 'Mont',
            }}
            content={props.desc}></Interweave>
        </S.TextBox>
      ) : (
        ''
      )}
    </S.Expand>
  );
};

export default Expand;
