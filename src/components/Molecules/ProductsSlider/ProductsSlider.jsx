import React from 'react';
import ArrowRight from './Arrows/ArrowRight';
import ArrowLeft from './Arrows/ArrowLeft';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../Card/Card';
import styled from 'styled-components';
import { URL } from '../../../config';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
const Wrapper = styled.div`
  width: calc(100vw - 130px);
  padding: 40px 56px;
`;

const ProductsSlider = (props) => {
  return (
    <Wrapper>
      <Swiper id="swiper-home-new-product" modules={[Navigation]} loop={true} spaceBetween={32} slidesPerView={3} navigation>
        {props.products?.results?.map((product, i) => {
          return (
            <SwiperSlide>
              <Card key={i} noHover img={URL + product.images?.filter((x) => x.main_image === true)[0]?.image} title={product?.title} description={product?.description} price={product?.price} product_id={product?.id} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

export default ProductsSlider;
