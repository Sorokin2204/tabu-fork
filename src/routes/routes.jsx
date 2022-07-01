import MainLayout from 'components/Layouts/MainLayout';
import Cart from 'pages/Cart/Cart';
import CategoryPage from 'pages/CategoryPage/CategoryPage';
import Ordering from 'pages/Ordering/Ordering';
import ProductPage from 'pages/ProductPage/ProductPage';
import ProfilePage from 'pages/ProfilePages/ProfileBuyPage/ProfileBuyPage';
import ProfileOrderListPage from 'pages/ProfilePages/ProfileOrderListPage/ProfileOrderListPage';
import ProfileSellPage from 'pages/ProfilePages/ProfileSellPage/ProfileSellPage';
import ProfileWishListPage from 'pages/ProfilePages/ProfileWishListPage/ProfileWishListPage';

import SellProduct from 'pages/SellProduct/SellProduct';
import SellProductMain from 'pages/SellProduct/SellProductMain';
import { Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import { v4 as uuidv4 } from 'uuid';
import HowToBuy from 'components/HowToBuy/HowToBuy';
import HowToSell from 'components/HowToSell/HowToSell';
import AboutUs from 'components/AboutUs/AboutUs';
const routes = (isAuth, isMobile) => [
  {
    path: '/',
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },
  {
    path: '/about-us',
    element: (
      <MainLayout>
        <AboutUs />
      </MainLayout>
    ),
  },
  {
    path: '/how-to-buy',
    element: (
      <MainLayout>
        <HowToBuy />
      </MainLayout>
    ),
  },
  {
    path: '/how-to-sell',
    element: (
      <MainLayout>
        <HowToSell />
      </MainLayout>
    ),
  },
  {
    path: '/categories/:category_name',
    element: (
      <MainLayout>
        <CategoryPage />
      </MainLayout>
    ),
  },
  {
    path: '/products/:product_id',
    element: (
      <MainLayout>
        <ProductPage />
      </MainLayout>
    ),
  },
  {
    path: '/cart',
    element: (
      <MainLayout>
        <Cart />
      </MainLayout>
    ),
  },
  {
    path: '/sellproduct/:product_id',
    element: isAuth ? (
      <MainLayout>
        <SellProductMain key={1} />
      </MainLayout>
    ) : (
      <Navigate to="/" />
    ),
  },
  {
    path: '/sellproduct',
    element: isAuth ? (
      <MainLayout>
        <SellProductMain key={0} />
      </MainLayout>
    ) : (
      <Navigate to="/" />
    ),
  },
  { path: '/ordering', element: isAuth ? <Ordering /> : <Navigate to="/" /> },

  {
    path: '/profile',
    element: isAuth ? (
      isMobile ? (
        <MainLayout>
          <ProfilePage />
        </MainLayout>
      ) : (
        <Navigate to="/profile/sellitems" />
      )
    ) : (
      <Navigate to="/" />
    ),
  },
  {
    path: '/profile/sellitems',
    element: isAuth ? (
      <MainLayout>
        <ProfileSellPage />
      </MainLayout>
    ) : (
      <Navigate to="/" />
    ),
  },
  {
    path: '/profile/wishlist',
    element: isAuth ? (
      <MainLayout>
        <ProfileWishListPage />
      </MainLayout>
    ) : (
      <Navigate to="/" />
    ),
  },
  {
    path: '/profile/orders',
    element: isAuth ? (
      <MainLayout>
        <ProfileOrderListPage />
      </MainLayout>
    ) : (
      <Navigate to="/" />
    ),
  },
];

export default routes;
