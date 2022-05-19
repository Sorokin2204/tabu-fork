import React from "react";
import ArrowRight from "./Arrows/ArrowRight";
import ArrowLeft from "./Arrows/ArrowLeft";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/Card";
import styled from "styled-components";
import { URL } from "../../../config";

const Wrapper = styled.div`
  width: calc(100vw - 130px);
  padding: 40px 56px;
`;

const ProductsSlider = (props) => {
  const settings = {
    dots: false,
    arrows: true,
    speed: 300,
    infinite: true,
    slidesToShow: props.products?.results?.length > 3 ? 3 : 1,
    slidesToScroll: 1,
    variableWidth: true,

    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {props.products?.results?.map((product, i) => {
          return (
            <Card
              key={i}
              noHover
              img={
                URL +
                product.images?.filter((x) => x.main_image === true)[0]?.image
              }
              title={product?.title}
              description={product?.description}
              price={product?.price}
              product_id={product?.id}
            />
          );
        })}
      </Slider>
    </Wrapper>
  );
};

export default ProductsSlider;
