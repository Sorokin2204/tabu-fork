import React from 'react';
import * as S from './Styled';
import RightArrow from 'assets/svg/right-arrow.svg';
import LeftArrow from 'assets/svg/left-arrow.svg';
const Pagination = ({ style, pages, currentPage, onPageClick }) => {
  return (
    <S.Wrapper style={style}>
      <S.List>
        <S.Next
          disabled={currentPage === 1}
          onClick={() => {
            if (currentPage !== 1) {
              onPageClick(currentPage - 1);
            }
          }}>
          <img src={LeftArrow} />
        </S.Next>
        {Array(pages)
          .fill()
          .map((val, i) => (
            <S.Item
              active={currentPage === i + 1}
              onClick={() => {
                if (currentPage !== i + 1) {
                  onPageClick(i + 1);
                }
              }}>
              {i + 1}
            </S.Item>
          ))}
        <S.Next
          disabled={pages == currentPage}
          onClick={() => {
            if (pages !== currentPage) {
              onPageClick(currentPage + 1);
            }
          }}>
          <img src={RightArrow} />
          {/* Вперед */}
        </S.Next>
      </S.List>
    </S.Wrapper>
  );
};

export default Pagination;
