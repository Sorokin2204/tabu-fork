import ImageBlock from 'components/Atoms/ImageBlock';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById, setOpenedProductCategory } from 'redux/actions/product';
import * as S from './Styled';
import { URL } from 'config';
import * as $ from 'jquery';
import ActionBlock from '../../components/Molecules/ProductPage/Desktop/ActionBlock';
import ShareProduct from 'components/Molecules/CategoryPage/ShareProduct/ShareProduct';
import RightBlock from '../../components/Molecules/ProductPage/Desktop/RightBlock/RightBlock';
import Subscribe from 'components/Molecules/HomePage/Desktop/Subscribe';
import TableSizes from 'components/Molecules/TableSizes/TableSizes';
import { sizes } from '../../sizes';
import MobileProductPage from './Mobile/MobileProductPage';
import BreadCrumbs from 'components/Atoms/BreadCrumbs/BreadCrumbs';
import { setBreadcrumbs } from 'redux/reducers/appReducer';
import Loading from 'components/Loading/Loading';
import NotFound from 'components/NotFound/NotFound';

const ProductPage = (props) => {
  const [selectedImage, setSelectedImage] = useState([]);
  const isMobile = useSelector((state) => state.app.isMobile);
  const categories = useSelector((state) => state.categories.categories);

  const dispatch = useDispatch();
  const { product_id } = useParams();
  const { openedProduct, openedProductLoading, openedProductError } = useSelector((state) => state.product);
  const showSizesModal = useSelector((state) => state.app.showSizesModal);
  const showShare = useSelector((state) => state.product.shareProduct.showShare);
  // useEffect(() => {
  //   if (categories?.length !== 0 && Object.keys(openedProduct).length !== 0) {
  //     console.log(openedProduct?.category);
  //     // dispatch(setOpenedProductCategory(openedProduct?.category, categories));
  //   }
  // }, [categories, openedProduct]);
  useEffect(() => {
    if (Object.keys(openedProduct).length !== 0) {
      const bread = ['Главная'];
      if (openedProduct?.category?.oneParent?.title) {
        bread.push(openedProduct?.category?.oneParent?.title);
      }
      if (openedProduct?.category?.twoParent?.title) {
        bread.push(openedProduct?.category?.twoParent?.title);
      }
      if (openedProduct?.category.title) {
        bread.push(openedProduct?.category.title);
      }
      dispatch(setBreadcrumbs(bread));
    }
  }, [openedProduct]);
  useEffect(() => {
    if (product_id !== undefined && categories?.length !== 0) {
      dispatch(getProductById(product_id));
    }
  }, [product_id, categories]);

  useEffect(() => {
    if (openedProduct.images) {
      setSelectedImage(openedProduct.images[0].image);
    }
  }, [openedProduct]);

  const scrollTo = (id) => {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(`#${id}`).offset().top,
      },
      300,
    );
  };

  const onPreviewClick = (image) => {
    scrollTo(image.id + 'mainImage');

    setSelectedImage(image.image);
  };

  const breadcrumbs = useSelector((state) => state.app.breadcrumbs);

  return (
    <>
      {!openedProductLoading && Object.keys(openedProduct).length !== 0 ? (
        !isMobile ? (
          <S.Container {...props}>
            <TableSizes active={showSizesModal} />
            <ShareProduct active={showShare} />
            <BreadCrumbs list={breadcrumbs} />

            <S.TwoBlocks>
              <S.ImagesBlock>
                <S.PreviewImages>
                  {openedProduct ? (openedProduct.images ? openedProduct.images.map((image, i) => <S.PreviewImage key={i} active={selectedImage === image.image ? true : false} id={image.id + 'previewImage'} src={URL + image.image} onClick={() => onPreviewClick(image)} />) : '') : ''}
                </S.PreviewImages>
                <S.MainImages>
                  {/* Вывод остальных картинок */}
                  {openedProduct ? (openedProduct.images ? openedProduct.images.map((image, i) => <ImageBlock key={i} id={image.id + 'mainImage'} src={URL + image.image} />) : '') : ''}
                </S.MainImages>
              </S.ImagesBlock>
              <RightBlock />
            </S.TwoBlocks>
            <S.SubscribeBlock>
              <Subscribe />
            </S.SubscribeBlock>
          </S.Container>
        ) : (
          <MobileProductPage />
        )
      ) : openedProductLoading ? (
        <div style={{ height: '600px' }}>
          {' '}
          <Loading />
        </div>
      ) : !openedProductLoading && openedProductError ? (
        <NotFound title={'Товар не найден'} />
      ) : (
        <div style={{ height: '600px' }}>
          <Loading />
        </div>
      )}
    </>
  );
};

export default ProductPage;
