import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MobileStart from './MobileStart';
import { useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const MobileStartContainer = () => {
  const ads = useSelector((state) => state.ads.ads);

  return (
    <>
      {ads && (
        <Swiper spaceBetween={40} pagination={true} modules={[Pagination]} id="swiper-home-main">
          {ads
            ?.filter((x) => x.type === 1)
            ?.map((ad, i) => (
              <>
                <SwiperSlide>
                  <MobileStart ad={ad} />
                </SwiperSlide>
                <SwiperSlide>
                  <MobileStart ad={ad} />
                </SwiperSlide>
                <SwiperSlide>
                  <MobileStart ad={ad} />
                </SwiperSlide>
              </>
            ))}
        </Swiper>
      )}
    </>
  );
};

export default MobileStartContainer;
