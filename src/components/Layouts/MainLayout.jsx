import Footer from 'components/Molecules/Footer/Footer';
import Header from 'components/Molecules/Header/Desktop/Header';
import ProductModal from 'components/Molecules/Modals/ProductModal';
import { useDispatch } from 'react-redux';
import { hideModal, updateCountCart } from 'redux/reducers/productReducer';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import MobileFooter from '../Molecules/Footer/Mobile/MobileFooter';
import MobileHeader from '../Molecules/Header/Mobile/MobileHeader';
import { sizes } from '../../sizes';
import { setCartProducts } from 'redux/reducers/cartReducer';
import RegModal from 'components/Molecules/Modals/RegModal/RegModal';
import LoginModal from 'components/Molecules/Modals/LoginModal/LoginModal';
import Search from 'components/Molecules/Search/Desktop/Search';
import { useParams } from 'react-router-dom';
import LogoutModal from 'components/Molecules/ProfilePage/LogoutModal/LogoutModal';
import ResetPassModal from 'components/Molecules/Modals/ResetPassModal/ResetPassModal';
import ResetPassSuccessModal from 'components/Molecules/Modals/ResetPassSuccessModal/ResetPassSuccessModal';
import { getCategories } from 'redux/actions/categories';
import { getFavorites } from 'redux/actions/user';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.app.isMobile);
  const params = useParams();
  const showSearch = useSelector((state) => state.search.show);
  const categories = useSelector((state) => state.categories.categories);
  useEffect(() => {
    console.log(categories);
    // set cart products
    // dispatch(setCartProducts(JSON.parse(localStorage.getItem('cartProducts'))));
  }, []);
  useEffect(() => {
    dispatch(getCategories());
    dispatch(updateCountCart());
    dispatch(getFavorites(true));
  }, []);
  return (
    <div>
      {showSearch ? <Search /> : ''}
      <RegModal />
      <LoginModal />
      <ResetPassModal />
      <ResetPassSuccessModal />
      <LogoutModal />
      {isMobile ? <MobileHeader /> : <Header />}
      {children}
      {isMobile ? <MobileFooter /> : <Footer />}
    </div>
  );
};

export default MainLayout;
