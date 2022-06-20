import styled, { css } from 'styled-components';
import product4 from 'assets/img/products/4.png';
import Flex from 'components/Atoms/Flex';
import Text from 'components/Atoms/Text';
import SelectSize from '../SelectSize/SelectSize';
import { default_sizes } from 'components/helpers/sizes';
import Button from 'components/Atoms/Button';
import Share from 'assets/svg/share.svg';
import Message from 'assets/svg/message.svg';
import DivImage from 'components/Atoms/DivImage';
import AddFavoriteBtn from '../AddFavoriteBtn';
import closeModal from 'assets/svg/closeModal.svg';
import { useDispatch, useSelector } from 'react-redux';
import { URL } from 'config';
import { hideModal, setShareProduct, updateCountCart } from 'redux/reducers/productReducer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCartProducts } from 'redux/reducers/cartReducer';
import { setIsDisableScroll } from 'redux/reducers/appReducer';
import { isWhatPercentOf } from 'utils/isWhatPercentOf';
import { addToCart } from 'utils/addToCart';
import { removeFromCart } from 'utils/removeFromCart';
import { store } from 'redux/reducers';
import { currencyFormat } from 'utils/currencyFormat';

export const StyledWrapper = styled.div`
  position: fixed;
  justify-content: center;
  display: flex;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.32);
  z-index: 10;
  top: 0;
  left: 0;

  visibility: ${(props) => (props.showModal ? 'inherit' : 'hidden')};
  opacity: ${(props) => (props.showModal ? 1 : 0)};
  transition: 0.3s;
`;

export const WrapperModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 760px;
  min-width: 760px;
  align-self: center;
  justify-content: center;
  z-index: 100;
  visibility: ${(props) => (props.showModal ? 'inherit' : 'hidden')};
  opacity: ${(props) => (props.showModal ? 1 : 0)};
  transition: 0.3s;
`;

export const StyledModal = styled.div`
  background-color: #fff;
  width: 100%;
  max-height: calc(100vh - 40px);
  overflow: overlay;
`;

export const GridModal = styled.div`
  display: grid;
  grid-template-columns: 411px 349px;
  width: 760px;
`;

export const CloseBlock = styled.div`
  position: absolute;
  top: 6px;
  right: -50px;
`;

export const CloseImg = styled.img`
  cursor: pointer;
`;
export const findInLocalCart = (productId) => {
  let cartProductsArray = JSON.parse(localStorage.getItem('cart')) || [];

  if (cartProductsArray.filter((x) => x.id === productId).length) {
    return true;
  } else {
    return false;
  }
};

export const onClickAddToCart = (setInCart, productId, productSize) => {
  const findProductInCart = findInLocalCart(productId);
  if (findProductInCart) {
    removeFromCart(productId);
  } else {
    addToCart(productId, productSize);
  }
  store.dispatch(updateCountCart());
  setInCart(findInLocalCart(productId));
};
const ProductModal = (props) => {
  const opened_product = useSelector((state) => state.product.openedProduct);
  const { products, getFavoritesData, getFavoritesLoading, addFavoriteLoading, removeFavoriteLoading } = useSelector((state) => state.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inCart, setInCart] = useState(false);
  const [activeSize, setActiveSize] = useState();
  const showModal = props.showModal;
  const handleClose = props.handleClose;

  useEffect(() => {
    if (opened_product?.id) {
      setInCart(findInLocalCart(opened_product?.id));
      setActiveSize(opened_product?.size[0].id);
    }
  }, [opened_product]);

  const onClickShare = () => {
    dispatch(hideModal());
    dispatch(setShareProduct({ link: '', showShare: true }));
  };

  // const addToCart = () => {
  //   let cartProductsArray = JSON.parse(localStorage.getItem('cartProducts')) || [];

  //   // Если в корзине есть товар удалить его
  //   if (cartProductsArray.filter((x) => x.id === opened_product.id).length) {
  //     cartProductsArray = cartProductsArray.filter((x) => x.id !== opened_product.id);
  //     localStorage.setItem('cartProducts', JSON.stringify(cartProductsArray));

  //     dispatch(setCartProducts(cartProductsArray));
  //     setAddedToCard(false);
  //   }

  //   // Если в корзине нет товара добавить его
  //   else {
  //     cartProductsArray.push(opened_product);
  //     localStorage.setItem('cartProducts', JSON.stringify(cartProductsArray));

  //     dispatch(setCartProducts(cartProductsArray));
  //     setAddedToCard(true);
  //   }
  // };

  return (
    <>
      <StyledWrapper showModal={showModal} onClick={handleClose}></StyledWrapper>

      <WrapperModal showModal={showModal}>
        <CloseBlock>
          <CloseImg onClick={handleClose} src={closeModal} />
        </CloseBlock>
        <StyledModal>
          <GridModal>
            {opened_product.images ? <DivImage style={{ backgroundSize: 'contain' }} backgroundSize={'cover'} src={URL + opened_product.images[0].image} /> : ''}

            <Flex direction="column" padding="20px 20px 0 20px">
              <Text fontFamily="Gilroy" fontWeight="600" fontSize="12px" color="#717171">
                {!opened_product ? '' : opened_product.category ? opened_product.category.title : ''}
              </Text>

              <Text margin="32px 0 0 0" fontFamily="Gilroy" fontWeight="600" fontSize="14px" color="#191919" textTransform="uppercase">
                {opened_product ? opened_product.title : ''}
              </Text>
              <Text margin="19px 0 0 0" fontFamily="Mont" fontWeight="600" fontSize="12px" color="#191919" textTransform="uppercase">
                {opened_product ? opened_product.description : ''}
              </Text>
              <Flex direction="row" margin="32px 0 0 0">
                <Text fontFamily="Gilroy" fontWeight="600" fontSize="14px" color="#191919">
                  {opened_product ? currencyFormat(opened_product.price) : ''}
                </Text>
                <Text margin="0 0 0 20px" fontFamily="Gilroy" fontWeight="400" fontSize="14px" color="#ababab" decoration="line-through">
                  {`${currencyFormat(opened_product.old_price)}`}
                </Text>
                <Text margin="0 0 0 20px" fontFamily="Gilroy" fontWeight="400" fontSize="14px" color="#EE1616">
                  {`${isWhatPercentOf(opened_product.price, opened_product.old_price)}%`}
                </Text>
              </Flex>
              <Flex margin="32px 0 0 0" direction="column" cursor="pointer">
                <Text fontFamily="Gilroy" fontWeight="600" fontSize="12px" color="#191919" textTransform="uppercase" cursor="pointer">
                  Размер:
                </Text>
                <SelectSize sizes={opened_product ? opened_product.size : ''} activeSize={activeSize} setActiveSize={setActiveSize} />
              </Flex>
              <Flex name="buttons" margin="32px 0 0 0" direction="column">
                <Button background="#F4F4F6" fontFamily="Mont" fontWeight="600" color="#717171" fontSize="14px" padding="16px 0" border="none" w100 onClick={() => onClickAddToCart(setInCart, opened_product?.id, activeSize)}>
                  {inCart ? 'Добавлено в корзину' : 'Добавить в корзину'}
                </Button>
                <Button margin="12px 0 0 0" fontFamily="Mont" fontWeight="600" fontSize="14px" padding="16px 0" border="none" topGreen w100>
                  Купить сейчас
                </Button>
                <Button onClick={onClickShare} alignCenter background="#ffffff" fontFamily="Mont" fontWeight="600" color="#717171" fontSize="14px" padding="16px 0" border="1px solid #e5e5e5" margin="15px 0 0 0" w100>
                  <img src={Share} />
                  <Flex margin="0 0 0 8.42px">Поделиться</Flex>
                </Button>
                <Button alignCenter background="#ffffff" fontFamily="Mont" fontWeight="600" color="#717171" fontSize="14px" padding="16px 0" border="1px solid #e5e5e5" margin="12px 0 0 0" w100>
                  <img src={Message} />
                  <Flex margin="0 0 0 8.42px">Свяжитесь с нами</Flex>
                </Button>
              </Flex>
              <AddFavoriteBtn productId={opened_product.id} />
            </Flex>
          </GridModal>
          <Flex w100 padding="19px 0" justify="center">
            <Text
              color="#191919"
              fontFamily="Gilroy"
              fontWeight="400"
              fontSize="14px"
              decLine="1px solid #191919"
              cursor="pointer"
              onClick={() => {
                navigate(`/products/${opened_product.id}`);
                handleClose();
              }}
              style={{ textTransform: 'uppercase' }}>
              Подробнее
            </Text>
          </Flex>
        </StyledModal>
      </WrapperModal>
    </>
  );
};

export default ProductModal;
