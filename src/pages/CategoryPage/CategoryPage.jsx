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
import { setBreadcrumbs, setIsDisableScroll } from 'redux/reducers/appReducer';
import { setPageCategory } from 'redux/reducers/categoriesReducer';
import { resetFilters, setCategoryOptions, setTypeSort } from 'redux/reducers/filterOptionsReducer';
import { getCategoryBySlug } from 'redux/actions/categories';
import Loading from 'components/Loading/Loading';
import NotFound from 'components/NotFound/NotFound';
export const optionsSort = [
  { slug: 'created_at', name: 'Сначала новые' },
  { slug: '-price', name: 'По убыванию цены' },
  {
    slug: 'price',
    name: 'По возрастанию цены',
  },
  { slug: 'discount', name: 'По величине скидки' },
];
const CategoryPage = () => {
  const dispatch = useDispatch();
  const { category_name } = useParams();
  const breadcrumbs = useSelector((state) => state.app.breadcrumbs);
  const { products, productsLoading } = useSelector((state) => state.product);
  const showModal = useSelector((state) => state.product.showModal);
  const showShare = useSelector((state) => state.product.shareProduct.showShare);

  const isMobile = useSelector((state) => state.app.isMobile);

  // useEffect(() => {
  //   if (params.category_name === undefined) {
  //     dispatch(getProducts());
  //   } else {
  //     dispatch(getProductsByCategory(params.category_name));
  //   }
  // }, []);
  const { main_category, categories, category, pageCategory, pageCategoryError, pageCategoryLoading } = useSelector((state) => state.categories);

  // useEffect(() => {
  //   if (categories.length !== 0) {
  //     dispatch(setPageCategory(categories[1].children[0]));
  //   }
  // }, [categories]);
  // useEffect(() => {
  //   if (pageCategory) {
  //     dispatch(getProductsByCategory({ categoryOptions: [pageCategory] }));
  //     dispatch(setCategoryOptions(pageCategory?.children));
  //   }
  // }, [pageCategory]);
  useEffect(() => {
    if (pageCategory) {
      const bread = ['Главная'];
      if (pageCategory?.oneParent?.title) {
        bread.push(pageCategory?.oneParent?.title);
      }
      if (pageCategory?.twoParent?.title) {
        bread.push(pageCategory?.twoParent?.title);
      }
      if (pageCategory.title) {
        bread.push(pageCategory.title);
      }
      dispatch(setBreadcrumbs(bread));
      dispatch(resetFilters());

      dispatch(getProductsByCategory());

      dispatch(setCategoryOptions(pageCategory?.children));
    }

    // dispatch(getCategoryBySlug(category_name));
    // dispatch(setBreadcrumbs(['Главная', main_category?.title, category_name]));
  }, [pageCategory]);

  useEffect(() => {
    if (categories.length !== 0) {
      dispatch(getCategoryBySlug(category_name));
    }
  }, [category_name, categories]);

  // useEffect(() => {
  //   dispatch(getCategoryBySlug(params?.category_name));
  //   // dispatch(setCategory(category));
  //   dispatch(setBreadcrumbs(['Главная', main_category?.title, params?.category_name]));
  // }, [category, params, main_category]);

  return !pageCategory && (pageCategoryLoading || productsLoading) ? (
    <S.CatalogLoading>
      <Loading relative />
    </S.CatalogLoading>
  ) : pageCategoryError ? (
    <>
      <NotFound title={pageCategoryError?.message ?? 'Страница не найдена'} />
    </>
  ) : pageCategory ? (
    <S.Wrap>
      <S.Wrapper>
        <ProductModal
          showModal={showModal}
          handleClose={() => {
            dispatch(hideModal());
            dispatch(setIsDisableScroll(false));
          }}
        />
        <ShareProduct active={showShare} />
        {/* <MobileFilter /> */}
        <MobileSort />

        <BreadCrumbs list={breadcrumbs} />
        <S.TitlePage>{pageCategory?.title}</S.TitlePage>
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

        {/* {!isMobile ? ( */}
        <Grid
          columns="270px 1fr"
          gap="0 32px"
          margin="34px 0 0 0"
          style={{
            gridTemplateColumns: isMobile ? '1fr' : '270px 1fr',
          }}>
          <Sidebar />
          <Flex direction="column" style={{ position: 'relative' }}>
            <Tags />
            <S.StyledProducts className="w100">
              {products.length === 0 || productsLoading || pageCategoryLoading ? (
                <></>
              ) : products?.results?.length === 0 ? (
                <S.ProductsNotFound>Товаров не найдено</S.ProductsNotFound>
              ) : (
                products.results.map((product) => <Card key={product.id} product_id={product.id} title={product.title} description={product.description} price={product.price} product={product} img={URL + product.images[0].image} />)
              )}
              {(pageCategoryLoading || productsLoading) && (
                <Loading
                  relative
                  style={{
                    top: '240px',
                  }}
                />
              )}
            </S.StyledProducts>
          </Flex>
        </Grid>
        {/* ) : (
          <S.StyledProducts>
            {products?.results?.length === 0 || products.length === 0 ? (
              <S.ProductsNotFound>Товаров не найдено</S.ProductsNotFound>
            ) : (
              products.results.map((product) => <Card key={product.id} product_id={product.id} title={product.title} description={product.description} price={product.price} img={URL + product.images[0].image} />)
            )}{' '}
            {pageCategoryLoading && <Loading relative style={{ right: '0px', top: '0' }} />}
          </S.StyledProducts>
        )} */}
      </S.Wrapper>
    </S.Wrap>
  ) : (
    <S.CatalogLoading>
      <Loading relative />
    </S.CatalogLoading>
  );
};

export default CategoryPage;
