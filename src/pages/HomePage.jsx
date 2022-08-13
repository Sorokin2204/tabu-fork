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
import Background from 'assets/img/startSell.png';
import WeSellingImg from 'assets/img/weSelling2.png';

import { scrollToSection } from 'utils/scrollToSection';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useMediaQuery from 'utils/useMediaQuery';
import NotFound from 'components/NotFound/NotFound';
import { fbqViewPage } from 'utils/fbPixel';
import { setShowAuthModal, setShowRegModal, setShowRequestModal } from 'redux/reducers/appReducer';

const HomePage = () => {
  const { newProducts, trends } = useSelector((state) => state.product);
  const { ads } = useSelector((state) => state.ads);
  const params = useParams();
  const { hash } = useLocation();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.user.isAuth);
  useEffect(() => {
    if (newProducts.length !== 0 && trends.length !== 0 && ads.length !== 0) {
      scrollToSection();
    }
  }, [newProducts, trends, ads, hash]);

  const isMobile = useSelector((state) => state.app.isMobile);
  const dispatch = useDispatch();

  useEffect(() => {
    fbqViewPage();
    dispatch(getNewProducts());
    dispatch(getTrends());
    dispatch(getAds());
  }, []);
  const matches = useMediaQuery('(min-width: 560px)');
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
          <MobileStartSale
            onClick={() => {
              if (isAuth) {
                navigate('/sellproduct');
              } else {
                dispatch(setShowAuthModal(true));
                dispatch(setShowRegModal(true));
              }
            }}
            title={'Начните продавать'}
            text={'Продавая вещи, которые пылятся в гардеробе, вы не консервируете деньги у себя в шкафу, а зарабатываете на будущие покупки. На нашем сайте достаточно двух кликов, чтобы выставить свои вещи на продажу.'}
            btnText={'Продать товар'}
            img={Background}
          />
          {/*<MobileMedia />*/}
          <MobileCards />
          <MobileInstagram />
          <MobileStartSale
            onClick={() => dispatch(setShowRequestModal(true))}
            style={{ backgroundColor: '#000', backgroundSize: isMobile ? '40vw' : 'auto', backgroundRepeat: 'no-repeat', backgroundPosition: isMobile ? 'right 40px top 110px' : 'right 40px top 80px' }}
            title={'Сделаем всё за вас'}
            text={'Заберем ваши вещи. Подготовим, опубликуем и продадим. Переведем вам деньги.'}
            btnText={'Получить вип-сервис'}
            img={matches ? WeSellingImg : null}
          />
          {/* <WeSelling /> */}
          <MobileHowWorks vip />
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
          <StartSell
            onClick={() => {
              if (isAuth) {
                navigate('/sellproduct');
              } else {
                dispatch(setShowAuthModal(true));
                dispatch(setShowRegModal(true));
              }
            }}
            style={{
              backgroundSize: '105%',
              backgroundPosition: 'center 5%',
            }}
            title={'Начните продавать'}
            text={'Продавая вещи, которые пылятся в гардеробе, вы не консервируете деньги у себя в шкафу, а зарабатываете на будущие покупки. На нашем сайте достаточно двух кликов, чтобы выставить свои вещи на продажу.'}
            btnText={'Продать товар'}
            img={Background}
          />
          {/*<Media />*/}
          <Advantages />
          <StartSell
            onClick={() => dispatch(setShowRequestModal(true))}
            style={{ backgroundColor: '#000', backgroundRepeat: 'no-repeat', backgroundPosition: 'left 90% top 38px', height: '470px' }}
            title={'Сделаем всё за вас'}
            text={'Заберем ваши вещи. Подготовим, опубликуем и продадим. Переведем вам деньги.'}
            btnText={'Получить вип-сервис'}
            img={WeSellingImg}
          />
          {/* <WeSelling /> */}
          <MobileHowWorks vip />
          <Instagram />
          <Answers />
          <Subscribe />
        </>
      )}
    </div>
  );
};

export default HomePage;
