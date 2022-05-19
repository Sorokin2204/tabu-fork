import MainLayout from "components/Layouts/MainLayout";
import Cart from "pages/Cart/Cart";
import CategoryPage from "pages/CategoryPage/CategoryPage";
import Ordering from "pages/Ordering/Ordering";
import ProductPage from "pages/ProductPage/ProductPage";
import ProfilePage from "pages/ProfilePages/ProfileBuyPage/ProfileBuyPage";
import ProfileSellPage from "pages/ProfilePages/ProfileSellPage/ProfileSellPage";
import ProfileWishListPage from "pages/ProfilePages/ProfileWishListPage/ProfileSalePage";
import SellProduct from "pages/SellProduct/SellProduct";
import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";

const routes = (isAuth) => [
  {
    path: "/",
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },
  {
    path: "/categories/:category_name",
    element: (
      <MainLayout>
        <CategoryPage />
      </MainLayout>
    ),
  },
  {
    path: "/products/:product_id",
    element: (
      <MainLayout>
        <ProductPage />
      </MainLayout>
    ),
  },
  {
    path: "/cart",
    element: (
      <MainLayout>
        <Cart />
      </MainLayout>
    ),
  },
  {
    path: "/sellproduct",
    element: (
      <MainLayout>
        <SellProduct />
      </MainLayout>
    ),
  },
  { path: "/ordering", element: <Ordering /> },

  {
    path: "/profile",
    element: isAuth ? (
      <MainLayout>
        <ProfilePage />{" "}
      </MainLayout>
    ) : (
      <Navigate to="/" />
    ),
  },
  {
    path: "/profile/sellitems",
    element: isAuth ? (
      <MainLayout>
        <ProfileSellPage />
      </MainLayout>
    ) : (
      <Navigate to="/" />
    ),
  },
  {
    path: "/profile/wishlist",
    element: isAuth ? (
      <MainLayout>
        <ProfileWishListPage />
      </MainLayout>
    ) : (
      <Navigate to="/" />
    ),
  },
];

export default routes;
