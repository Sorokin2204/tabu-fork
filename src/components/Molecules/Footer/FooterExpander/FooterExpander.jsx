import React, { useState } from 'react';
import * as S from './Styled';
const FooterExpander = ({ title, list }) => {
  const [openContent, setOpenContent] = useState(false);
  return (
    <>
      <S.Category>
        <S.CategoryHead onClick={() => setOpenContent(!openContent)}>
          <S.CategoryName>{title}</S.CategoryName>
          <S.CategoryExpand open={openContent}>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1L5 5L1 1" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </S.CategoryExpand>
        </S.CategoryHead>
        {openContent && (
          <S.CategoryContent>
            {list?.map((item) => (
              <S.CategoryLink href={item?.link ?? '#'}>{item?.name}</S.CategoryLink>
            ))}
          </S.CategoryContent>
        )}
      </S.Category>
    </>
  );
};

export default FooterExpander;
