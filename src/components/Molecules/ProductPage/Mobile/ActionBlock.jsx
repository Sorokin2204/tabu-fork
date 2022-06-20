import styled from 'styled-components';
import AddFavoriteBtn from 'components/Molecules/AddFavoriteBtn';
import Flex from 'components/Atoms/Flex';
import Button from 'components/Atoms/Button';
import { setShareProduct } from 'redux/reducers/productReducer';
import { default_sizes } from 'components/helpers/sizes';
import SelectSize from 'components/Molecules/SelectSize/SelectSize';
import Text from 'components/Atoms/Text';
import { useDispatch, useSelector } from 'react-redux';
import Share from 'assets/svg/share.svg';
import Message from 'assets/svg/message.svg';
import { setIsDisableScroll, setShowSizesModal } from 'redux/reducers/appReducer';
import { useEffect, useState } from 'react';
import { setCartProducts } from '../../../../redux/reducers/cartReducer';
import { isWhatPercentOf } from 'utils/isWhatPercentOf';
import { currencyFormat } from 'utils/currencyFormat';
import { findInLocalCart, onClickAddToCart } from 'components/Molecules/Modals/ProductModal';

const Container = styled.div``;
const ButtonLink = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
  outline: none;
  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 13px;
  color: #717171;
  position: relative;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  & span {
    border-bottom: 1px solid #717171;
  }
  & img {
    margin-right: 8px;
  }
  /* & img {
    position: absolute;
    top: 0;
    left: 0;
  } */
  /* &::after {
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #717171;
  } */
`;
const ButtonLinkBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`;
const ActionBlock = () => {
  const dispatch = useDispatch();
  const opened_product = useSelector((state) => state.product.openedProduct);

  const isMobile = useSelector((state) => state.app.isMobile);
  const [addedToCart, setAddedToCard] = useState(false);
  const [activeSize, setActiveSize] = useState();
  const openTableSizes = () => {
    dispatch(setShowSizesModal(true));
  };

  const [inCart, setInCart] = useState(false);
  useEffect(() => {
    if (opened_product?.id) {
      setActiveSize(opened_product.size[0].id);

      setInCart(findInLocalCart(opened_product?.id));
    }
  }, [opened_product]);

  return (
    <Container>
      <Flex direction="column">
        <Text
          fontFamily="Gilroy"
          fontWeight="600"
          fontSize="14px"
          color="#717171"
          style={{
            ...(isMobile && {
              margin: '0 auto',
            }),
          }}>
          {!opened_product ? '' : opened_product.category ? opened_product.category.title : ''}
        </Text>

        <Text margin="32px 0 0 0" fontFamily="Gilroy" fontWeight="600" fontSize="14px" color="#191919" textTransform="uppercase">
          {opened_product ? opened_product.title : ''}
        </Text>
        <Text
          margin="19px 0 0 0"
          fontFamily="Mont"
          fontWeight="600"
          fontSize="12px"
          color="#191919"
          style={{
            ...(isMobile && {
              margin: '16px 0 0 0',
              fontSize: '14px',
            }),
          }}>
          {opened_product ? opened_product.description : ''}
        </Text>
        <Flex
          direction="row"
          margin="32px 0 0 0"
          style={{
            ...(isMobile && {
              margin: '24px 0 0 0',
            }),
          }}>
          <Text fontFamily="Gilroy" fontWeight="600" fontSize="16px" color="#191919">
            {opened_product ? currencyFormat(opened_product.price) : ''}
          </Text>
          {/* Скидка */}
          {opened_product?.old_price && (
            <>
              <Text margin="0 0 0 20px" fontFamily="Gilroy" fontWeight="400" fontSize="16px" color="#ababab" decoration="line-through">
                {currencyFormat(opened_product.old_price)}
              </Text>
              <Text margin="0 0 0 20px" fontFamily="Gilroy" fontWeight="400" fontSize="16px" color="#EE1616">
                {`${isWhatPercentOf(opened_product.price, opened_product.old_price)}%`}
              </Text>
            </>
          )}
        </Flex>
        <Flex margin="32px 0 0 0" direction="column" cursor="pointer">
          <Flex justify="space-between">
            <Text fontFamily="Gilroy" fontWeight="600" fontSize="14px" color="#191919" textTransform="uppercase" cursor="pointer">
              Размер
            </Text>
            <Text fontFamily="Gilroy" fontWeight="400" fontSize="12px" color="#191919" decLine="1px solid #191919" cursor="pointer" onClick={openTableSizes}>
              Таблица размеров
            </Text>
          </Flex>

          <SelectSize sizes={opened_product ? opened_product.size : ''} activeSize={activeSize} setActiveSize={setActiveSize} />
        </Flex>
        <Flex
          name="buttons"
          margin="32px 0 0 0"
          direction="column"
          style={{
            ...(isMobile && {
              margin: '40px 0 0 0',
            }),
          }}>
          <Button background="#F4F4F6" fontFamily="Mont" fontWeight="600" color="#717171" fontSize="14px" padding="14px 0" border="none" w100 onClick={() => onClickAddToCart(setInCart, opened_product?.id, activeSize)}>
            {inCart ? 'Добавлено в корзину' : 'Добавить в корзину'}
          </Button>
          <Button margin="12px 0 0 0" fontFamily="Mont" fontWeight="600" fontSize="14px" padding="14px 0" border="none" topGreen w100>
            Купить сейчас
          </Button>
          <ButtonLinkBox>
            <ButtonLink
              onClick={() => {
                dispatch(setIsDisableScroll(true));
                dispatch(setShareProduct({ link: '', showShare: true }));
              }}>
              <img src={Share} width={20} height={16} />
              <span> Поделиться</span>
            </ButtonLink>
            <ButtonLink>
              <img src={Message} width={18} height={18} />
              <span> Свяжитесь с нами</span>
            </ButtonLink>
          </ButtonLinkBox>
        </Flex>
        <AddFavoriteBtn button productId={opened_product.id} />
      </Flex>
    </Container>
  );
};

export default ActionBlock;
