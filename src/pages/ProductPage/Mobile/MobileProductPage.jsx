import * as S from './Styled';
import ProductImg from 'assets/img/products/4.png';
import RightBlock from '../../../components/Molecules/ProductPage/Mobile/RightBlock/RightBlock';
import Subscribe from '../../../components/Molecules/HomePage/Desktop/Subscribe';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { URL } from '../../../config';
import TableSizes from '../../../components/Molecules/TableSizes/TableSizes';
import ShareProduct from '../../../components/Molecules/CategoryPage/ShareProduct/ShareProduct';
import { setCartProducts } from '../../../redux/reducers/cartReducer';
import MobileSubscribe from 'components/Molecules/HomePage/Mobile/MobileSubscribe/MobileSubscribe';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const MobileProductPage = (props) => {
  const dispatch = useDispatch();
  const showSizesModal = useSelector((state) => state.app.showSizesModal);
  const showShare = useSelector((state) => state.product.shareProduct.showShare);
  const opened_product = useSelector((state) => state.product.openedProduct);

  return (
    <>
      {opened_product?.images && (
        <Swiper spaceBetween={40} id="swiper-product-page" modules={[Navigation, Pagination]} pagination={{ el: '.swiper-product-page-pagination' }} navigation={true}>
          {opened_product?.images.map((image) => (
            <SwiperSlide>
              <S.Image src={URL + image.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="swiper-product-page-pagination"></div>
      <S.Container {...props}>
        <TableSizes active={showSizesModal} />
        <ShareProduct active={showShare} />

        <RightBlock />
        <MobileSubscribe />
      </S.Container>
    </>
  );
};

export default MobileProductPage;
