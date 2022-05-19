import Button from "components/Atoms/Button";
import CartComponent from "components/Molecules/Cart/CartComponent/CartComponent";
import EmptyCart from "components/Molecules/Cart/EmptyCart/EmptyCart";
import { useSelector } from "react-redux";
import * as S from "./Styled";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  return <>{cartProducts?.length ? <CartComponent /> : <EmptyCart />}</>;
};

export default Cart;
