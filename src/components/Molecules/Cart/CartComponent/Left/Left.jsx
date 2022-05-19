import {useSelector} from "react-redux";
import CartProductCard from "./CartProductCard/CartProductCard";
import Order from "./Order/Order";
import * as S from "./Styled";
import {useEffect, useState} from "react";
import {sizes} from "../../../../../sizes";
import MobileCartProductCard from "./CartProductCard/MobileCartProductCard";

const Left = () => {
    const cartProducts = useSelector((state) => state.cart.cartProducts);
    const isMobile = useSelector((state) => state.app.isMobile);

    return (<S.Container>
            <S.FirstCont>
                <S.Header>
                    <S.Head>ТОВАР</S.Head>
                    <S.Head>ОПИСАНИЕ</S.Head>
                    <S.Head>ЦЕНА</S.Head>
                </S.Header>
                <S.Cards>
                    {isMobile ?
                        cartProducts?.map((product, i) => (
                            <MobileCartProductCard key={i} product={product}/>
                        ))
                        :
                        cartProducts?.map((product, i) => (
                            <CartProductCard key={i} product={product}/>
                        ))
                    }
                </S.Cards>
            </S.FirstCont>
            <Order/>
            <S.Line/>
        </S.Container>);
};

export default Left;
