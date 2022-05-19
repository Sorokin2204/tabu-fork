import Footer from 'components/Molecules/Footer/Footer';
import Header from 'components/Molecules/Header/Desktop/Header';
import ProductModal from 'components/Molecules/Modals/ProductModal';
import { useDispatch } from 'react-redux';
import { hideModal } from 'redux/reducers/productReducer';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import MobileFooter from '../Molecules/Footer/Mobile/MobileFooter';
import MobileHeader from '../Molecules/Header/Mobile/MobileHeader';
import { sizes } from '../../sizes';
import { setCartProducts } from 'redux/reducers/cartReducer';
import RegModal from 'components/Molecules/Modals/RegModal/RegModal';
import LoginModal from 'components/Molecules/Modals/LoginModal/LoginModal';
import Search from 'components/Molecules/Search/Desktop/Search';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.app.isMobile);

  const showSearch = useSelector((state) => state.search.show);

  useEffect(() => {
    // set cart products
    dispatch(setCartProducts(JSON.parse(localStorage.getItem('cartProducts'))));
  }, []);

  return (
    <div>
      {showSearch ? <Search /> : ''}
      <RegModal />
      <LoginModal />
      {isMobile ? <MobileHeader /> : <Header />}
      {children}
      {isMobile ? <MobileFooter /> : <Footer />}
    </div>
  );
};

export default MainLayout;
