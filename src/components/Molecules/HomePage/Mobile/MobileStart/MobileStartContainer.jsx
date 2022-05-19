import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MobileStart from './MobileStart';
import { useSelector } from 'react-redux';

const MobileStartContainer = () => {
  const ads = useSelector((state) => state.ads.ads);

  return (
    <>
      <Swiper loop="true" spaceBetween={100}>
        {ads
          ?.filter((x) => x.type === 1)
          ?.map((ad, i) => (
            <SwiperSlide key={i}>
              <MobileStart ad={ad} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default MobileStartContainer;
