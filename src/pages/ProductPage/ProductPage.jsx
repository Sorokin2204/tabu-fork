import ImageBlock from 'components/Atoms/ImageBlock';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from 'redux/actions/product';
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

const ProductPage = (props) => {
  const [selectedImage, setSelectedImage] = useState([]);
  const isMobile = useSelector((state) => state.app.isMobile);

  const dispatch = useDispatch();
  const params = useParams();
  const openedProduct = useSelector((state) => state.product.openedProduct);
  const showSizesModal = useSelector((state) => state.app.showSizesModal);
  const showShare = useSelector((state) => state.product.shareProduct.showShare);

  useEffect(() => {
    if (params.product_id !== undefined) {
      dispatch(getProductById(params.product_id));
    }
  }, []);

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

  return (
    <>
      {' '}
      {!isMobile ? (
        <S.Container {...props}>
          <TableSizes active={showSizesModal} />
          <ShareProduct active={showShare} />
          <S.BreadCrumb>Главная / Для нее / Новинки / Толстовка</S.BreadCrumb>

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
      )}
    </>
  );
};

export default ProductPage;
