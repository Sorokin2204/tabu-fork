import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import StartSlide from "./StartSlide";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { useSelector } from "react-redux";

export const StyledContainer = styled.div`
  padding: 80px 137px;
  display: flex;
  align-content: center;
  position: relative;
`;

export const ArrowLeft = styled.div`
  position: absolute;
  top: 50%;
  left: 56px;
  cursor: pointer;
`;

export const ArrowRight = styled.div`
  position: absolute;
  top: 50%;
  right: 56px;
  cursor: pointer;
`;

const StartContainer = () => {
  const swiperRef = useRef();
  const ads = useSelector((state) => state.ads.ads);

  return (
    <StyledContainer>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop="true"
        modules={[Navigation]}
        navigation
      >
        {ads
          ?.filter((x) => x.type === 1)
          ?.map((ad, i) => (
            <SwiperSlide key={i}>
              <StartSlide ad={ad} />
            </SwiperSlide>
          ))}
      </Swiper>

      <ArrowLeft onClick={() => swiperRef.current.slidePrev()}>
        <svg
          width={48}
          height={48}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={48} height={48} fill="white" fillOpacity="0.5" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.5655 15.8344C28.8779 16.1468 28.8779 16.6534 28.5655 16.9658L21.1312 24.4001L28.5655 31.8344C28.8779 32.1468 28.8779 32.6534 28.5655 32.9658C28.2531 33.2782 27.7465 33.2782 27.4341 32.9658L19.4341 24.9658C19.1217 24.6534 19.1217 24.1468 19.4341 23.8344L27.4341 15.8344C27.7465 15.522 28.2531 15.522 28.5655 15.8344Z"
            fill="#191919"
          />
        </svg>
      </ArrowLeft>

      <ArrowRight onClick={() => swiperRef.current.slideNext()}>
        <svg
          width={48}
          height={48}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x={48}
            y={48}
            width={48}
            height={48}
            transform="rotate(-180 48 48)"
            fill="white"
            fillOpacity="0.5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.4345 32.1656C19.1221 31.8532 19.1221 31.3466 19.4345 31.0342L26.8688 23.5999L19.4345 16.1656C19.1221 15.8532 19.1221 15.3466 19.4345 15.0342C19.7469 14.7218 20.2535 14.7218 20.5659 15.0342L28.5659 23.0342C28.8783 23.3466 28.8783 23.8532 28.5659 24.1656L20.5659 32.1656C20.2535 32.478 19.7469 32.478 19.4345 32.1656Z"
            fill="#191919"
          />
        </svg>
      </ArrowRight>
    </StyledContainer>
  );
};

export default StartContainer;
