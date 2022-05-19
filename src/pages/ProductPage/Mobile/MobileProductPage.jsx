import * as S from './Styled'
import ProductImg from 'assets/img/products/4.png'
import RightBlock from "../../../components/Molecules/ProductPage/Mobile/RightBlock/RightBlock";
import Subscribe from "../../../components/Molecules/HomePage/Desktop/Subscribe";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {URL} from "../../../config";
import TableSizes from "../../../components/Molecules/TableSizes/TableSizes";
import ShareProduct from "../../../components/Molecules/CategoryPage/ShareProduct/ShareProduct";
import {setCartProducts} from "../../../redux/reducers/cartReducer";

const MobileProductPage = (props) => {
    const dispatch = useDispatch();
    const showSizesModal = useSelector((state) => state.app.showSizesModal);
    const showShare = useSelector((state) => state.product.shareProduct.showShare);
    const opened_product = useSelector((state) => state.product.openedProduct);

    return (
        <S.Container {...props}>
            <TableSizes active={showSizesModal}/>
            <ShareProduct active={showShare}/>
            <S.ImagesBlock>
                <S.Image src={URL + opened_product?.images?.filter(x => x.main_image === true)[0]?.image}/>
                <S.Slides>
                    <S.Slide active/>
                </S.Slides>

            </S.ImagesBlock>
            <RightBlock/>
            <Subscribe/>
        </S.Container>
    );
};

export default MobileProductPage;