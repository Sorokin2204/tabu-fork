import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from 'redux/actions/product';
import BreadCrumbs from 'components/Atoms/BreadCrumbs/BreadCrumbs';
import Flex from 'components/Atoms/Flex';
import Grid from 'components/Atoms/Grid';
import Hr from 'components/Atoms/Hr';
import * as S from './StyledCategory';
import Sidebar from 'components/Molecules/Sidebar/Sidebar';
import Card from 'components/Molecules/Card/Card';
import Tags from 'components/Molecules/Tags/Tags';
import { useEffect } from 'react';
import SelectText from 'components/Atoms/Form/SelectText';
import { URL } from 'config';
import { sizes } from '../../sizes';
import SortButtons from '../../components/Molecules/CategoryPage/SortButtons/SortButtons';
import MobileFilter from '../../components/Molecules/MobileFilter/MobileFilter';
import MobileSort from 'components/Molecules/MobileSort/MobileSort';
import ShareProduct from 'components/Molecules/CategoryPage/ShareProduct/ShareProduct';
import ProductModal from 'components/Molecules/Modals/ProductModal';
import { hideModal } from 'redux/reducers/productReducer';
import { setIsDisableScroll } from 'redux/reducers/appReducer';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const products = useSelector((state) => state.product.products);
  const showModal = useSelector((state) => state.product.showModal);
  const showShare = useSelector((state) => state.product.shareProduct.showShare);
  const optionsSort = [
    { id: 0, name: 'Сначала новые' },
    { id: 1, name: 'По убыванию цены' },
    {
      id: 2,
      name: 'По возрастанию цены',
    },
    { id: 3, name: 'По величине скидки' },
  ];
  const isMobile = useSelector((state) => state.app.isMobile);

  useEffect(() => {
    if (params.category_name === undefined) {
      dispatch(getProducts());
    } else {
      dispatch(getProductsByCategory(params.category_name));
    }
  }, []);

  return (
    <S.Wrapper>
      <ProductModal
        showModal={showModal}
        handleClose={() => {
          dispatch(hideModal());
          dispatch(setIsDisableScroll(false));
        }}
      />
      <ShareProduct active={showShare} />
      <MobileFilter />
      <MobileSort />

      <BreadCrumbs />
      <S.TitlePage>{params.category_name}</S.TitlePage>
      {!isMobile ? (
        <>
          <Flex margin="28px 0 0 0" width="100%" justify="end">
            <SelectText options={optionsSort} />
          </Flex>
          <Hr margin="0 0 0 0" color="#E5E5E5" />
        </>
      ) : (
        <SortButtons />
      )}

      {!isMobile ? (
        <Grid columns="270px 1fr" gap="0 32px" margin="34px 0 0 0">
          <Sidebar />
          <Flex direction="column">
            <Tags />
            <S.StyledProducts className="w100">
              {!products.results ? '' : products.results.map((product) => <Card key={product.id} product_id={product.id} title={product.title} description={product.description} price={product.price} product={product} img={URL + product.images[0].image} />)}
            </S.StyledProducts>
          </Flex>
        </Grid>
      ) : (
        <S.StyledProducts>{!products.results ? '' : products.results.map((product) => <Card key={product.id} product_id={product.id} title={product.title} description={product.description} price={product.price} img={URL + product.images[0].image} />)}</S.StyledProducts>
      )}
    </S.Wrapper>
  );
};

export default CategoryPage;
