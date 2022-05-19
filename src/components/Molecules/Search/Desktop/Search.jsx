import TopHeader from 'components/Molecules/Header/Desktop/TopHeader/TopHeader';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowSearch } from 'redux/reducers/searchReducer';
import { sizes } from 'sizes';
import Categories from './Categories/Categories';
import Header from './Header/Header';
import Input from './Input/Input';
import Products from './Products/Products';
import * as S from './Styled';
import Tabs from './Tabs/Tabs';

const Search = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.app.isMobile);

  return (
    <>
      <S.Wrapper>
        <S.Block>
          {isMobile ? '' : <TopHeader />}
          <Header onClose={() => dispatch(setShowSearch(false))} />
          <Input />
          <Tabs />
          {/* <Categories /> */}
          <Products />
        </S.Block>
        <S.Background onClick={() => dispatch(setShowSearch(false))} />
      </S.Wrapper>
    </>
  );
};

export default Search;
