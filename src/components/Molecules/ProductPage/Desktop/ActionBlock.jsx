import styled from "styled-components";
import AddFavoriteBtn from "components/Molecules/AddFavoriteBtn";
import Flex from "components/Atoms/Flex";
import Button from "components/Atoms/Button";
import { setShareProduct } from "redux/reducers/productReducer";
import { default_sizes } from "components/helpers/sizes";
import SelectSize from "components/Molecules/SelectSize/SelectSize";
import Text from "components/Atoms/Text";
import { useDispatch, useSelector } from "react-redux";
import Share from "assets/svg/share.svg";
import Message from "assets/svg/message.svg";
import { setShowSizesModal } from "redux/reducers/appReducer";
import {setCartProducts} from "../../../../redux/reducers/cartReducer";
import {useEffect, useState} from "react";

const Container = styled.div``;

const ActionBlock = () => {
  const dispatch = useDispatch();
  const opened_product = useSelector((state) => state.product.openedProduct);
  const [addedToCart, setAddedToCard] = useState(false);

  const openTableSizes = () => {
    dispatch(setShowSizesModal(true));
  };

  const addToCart = () => {
    let cartProductsArray =
        JSON.parse(localStorage.getItem("cartProducts")) || [];

    // Если в корзине есть товар удалить его
    if (cartProductsArray.filter((x) => x.id === opened_product.id).length) {
      cartProductsArray = cartProductsArray.filter(
          (x) => x.id !== opened_product.id
      );
      localStorage.setItem("cartProducts", JSON.stringify(cartProductsArray));

      dispatch(setCartProducts(cartProductsArray));
      setAddedToCard(false);
    }

    // Если в корзине нет товара добавить его
    else {
      cartProductsArray.push(opened_product);
      localStorage.setItem("cartProducts", JSON.stringify(cartProductsArray));

      dispatch(setCartProducts(cartProductsArray));
      setAddedToCard(true);
    }
  };

  useEffect(() => {
    if (opened_product.id) {
      let cartProductsArray =
          JSON.parse(localStorage.getItem("cartProducts")) || [];

      if (cartProductsArray.filter((x) => x.id === opened_product.id).length) {
        setAddedToCard(true);
      } else {
        setAddedToCard(false);
      }
    }
  }, [opened_product]);

  return (
    <Container>
      <Flex direction="column">
        <Text
          fontFamily="Gilroy"
          fontWeight="600"
          fontSize="12px"
          color="#717171"
        >
          {!opened_product
            ? ""
            : opened_product.category
            ? opened_product.category.title
            : ""}
        </Text>

        <Text
          margin="32px 0 0 0"
          fontFamily="Gilroy"
          fontWeight="600"
          fontSize="14px"
          color="#191919"
          textTransform="uppercase"
        >
          {opened_product ? opened_product.title : ""}
        </Text>
        <Text
          margin="19px 0 0 0"
          fontFamily="Mont"
          fontWeight="600"
          fontSize="12px"
          color="#191919"
          textTransform="uppercase"
        >
          {opened_product ? opened_product.description : ""}
        </Text>
        <Flex direction="row" margin="32px 0 0 0">
          <Text
            fontFamily="Gilroy"
            fontWeight="600"
            fontSize="14px"
            color="#191919"
          >
            {opened_product ? "$ " + opened_product.price : ""}
          </Text>
          {/* Скидка */}
          {/* <Text
          margin="0 0 0 20px"
          fontFamily="Gilroy"
          fontWeight="600"
          fontSize="14px"
          color="#ababab"
          decoration="line-through"
        >
          $1 815
        </Text>
        <Text
          margin="0 0 0 20px"
          fontFamily="Gilroy"
          fontWeight="600"
          fontSize="14px"
          color="#EE1616"
        >
          -40%
        </Text> */}
        </Flex>
        <Flex margin="32px 0 0 0" direction="column" cursor="pointer">
          <Flex justify="space-between">
            <Text
              fontFamily="Gilroy"
              fontWeight="600"
              fontSize="12px"
              color="#191919"
              textTransform="uppercase"
              cursor="pointer"
            >
              Размер:
            </Text>
            <Text
              fontFamily="Gilroy"
              fontWeight="400"
              fontSize="12px"
              color="#191919"
              decLine="1px solid #191919"
              cursor="pointer"
              onClick={openTableSizes}
            >
              Таблица размеров
            </Text>
          </Flex>

          <SelectSize sizes={default_sizes} />
        </Flex>
        <Flex name="buttons" margin="32px 0 0 0" direction="column">
          <Button
            background="#F4F4F6"
            fontFamily="Mont"
            fontWeight="600"
            color="#717171"
            fontSize="14px"
            padding="16px 0"
            border="none"
            w100
            onClick={() => addToCart()}
          >
            {addedToCart ? "Добавлено в корзину" : "Добавить в корзину"}
          </Button>
          <Button
            margin="12px 0 0 0"
            fontFamily="Mont"
            fontWeight="600"
            fontSize="14px"
            padding="16px 0"
            border="none"
            topGreen
            w100
          >
            Купить сейчас
          </Button>
          <Button
            onClick={() =>
              dispatch(setShareProduct({ link: "", showShare: true }))
            }
            alignCenter
            background="#ffffff"
            fontFamily="Mont"
            fontWeight="600"
            color="#717171"
            fontSize="14px"
            padding="16px 0"
            border="1px solid #e5e5e5"
            margin="15px 0 0 0"
            w100
          >
            <img src={Share} />
            <Flex margin="0 0 0 8.42px">Поделиться</Flex>
          </Button>
          <Button
            alignCenter
            background="#ffffff"
            fontFamily="Mont"
            fontWeight="600"
            color="#717171"
            fontSize="14px"
            padding="16px 0"
            border="1px solid #e5e5e5"
            margin="12px 0 0 0"
            w100
          >
            <img src={Message} />
            <Flex margin="0 0 0 8.42px">Свяжитесь с нами</Flex>
          </Button>
        </Flex>
        <AddFavoriteBtn />
      </Flex>
    </Container>
  );
};

export default ActionBlock;
