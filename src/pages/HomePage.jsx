import Sales from 'components/Molecules/HomePage/Desktop/Sales';
import HowWorks from 'components/Molecules/HomePage/Desktop/HowWorks';
import NewProducts from 'components/Molecules/HomePage/Desktop/NewProducts';
import Instagram from 'components/Molecules/HomePage/Desktop/Instagram';
import Banners from 'components/Molecules/HomePage/Desktop/Banners';
import Trends from 'components/Molecules/HomePage/Desktop/Trends';
import TwoSections from 'components/Molecules/HomePage/Desktop/TwoSections';
import StartSell from 'components/Molecules/HomePage/Desktop/StartSell';
import Media from 'components/Molecules/HomePage/Desktop/Media';
import Advantages from 'components/Molecules/HomePage/Desktop/Advantages';
import Answers from 'components/Molecules/HomePage/Desktop/Answers';
import Subscribe from 'components/Molecules/HomePage/Desktop/Subscribe';
import { useEffect, useState } from 'react';
import { sizes } from '../sizes';
import MobileStart from '../components/Molecules/HomePage/Mobile/MobileStart/MobileStart';
import MobileHowWorks from '../components/Molecules/HomePage/Mobile/MobileHowWorks/MobileHowWorks';
import MobileNewProducts from '../components/Molecules/HomePage/Mobile/MobileNewProducts/MobileNewProducts';
import MobileBanners from '../components/Molecules/HomePage/Mobile/MobileBanners/MobileBanners';
import MobileNowInTrand from '../components/Molecules/HomePage/Mobile/MobileNowInTrand/MobileNowInTrand';
import MobileSections from '../components/Molecules/HomePage/Mobile/MobileTwoSections/MobileSections';
import MobileStartSale from 'components/Molecules/HomePage/Mobile/MobileStartSale/MobileStartSale';
import MobileMedia from 'components/Molecules/HomePage/Mobile/MobileMedia/MobileMedia';
import MobileCards from 'components/Molecules/HomePage/Mobile/MobileCards/MobileCards';
import MobileInstagram from 'components/Molecules/HomePage/Mobile/MobileInstagram/MobileInstagram';
import MobileHowExpand from 'components/Molecules/HomePage/Mobile/MobileHowExpand/MobileHowExpand';
import MobileSubscribe from 'components/Molecules/HomePage/Mobile/MobileSubscribe/MobileSubscribe';
import { useDispatch, useSelector } from 'react-redux';
import { getNewProducts, getTrends } from '../redux/actions/product';
import WeSelling from 'components/Molecules/HomePage/Desktop/WeSelling/WeSelling';
import StartContainer from 'components/Molecules/HomePage/Desktop/Start/StartContainer';
import MobileStartContainer from 'components/Molecules/HomePage/Mobile/MobileStart/MobileStartContainer';
import Request from 'components/Molecules/Modals/Request/Request';
import { getAds } from 'redux/actions/ads';

const HomePage = () => {
  const isMobile = useSelector((state) => state.app.isMobile);
  const dispatch = useDispatch();

  useEffect(() => {
    // get new products and trends
    dispatch(getNewProducts());
    dispatch(getTrends());

    // get ads
    dispatch(getAds());
  }, []);

  return (
    <div>
      <Request />
      {isMobile ? (
        <>
          <MobileStartContainer />
          <MobileHowWorks />
          <MobileNewProducts />
          <MobileBanners />
          <MobileNowInTrand />
          <MobileSections />
          <MobileStartSale />
          {/*<MobileMedia />*/}
          <MobileCards />
          <MobileInstagram />
          <WeSelling />
          <MobileHowWorks />
          <MobileHowExpand />
          <MobileSubscribe />
        </>
      ) : (
        <>
          <Sales />
          <StartContainer />
          <MobileHowWorks />
          <NewProducts />
          <Banners />
          <Trends />
          <TwoSections />
          <StartSell />
          {/*<Media />*/}
          <Advantages />
          <WeSelling />
          <MobileHowWorks />
          <Instagram />
          <Answers />
          <Subscribe />
        </>
      )}
    </div>
  );
};

export default HomePage;
