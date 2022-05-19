import * as S from "./Styled";
import { URL } from "config";
import { useDispatch, useSelector } from "react-redux";
import { setCartProducts } from "../../../../../../redux/reducers/cartReducer";
import { useEffect, useState } from "react";
import { sizes } from "../../../../../../sizes";

const CartProductCard = (props) => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    let copyCartProducts = cartProducts;
    copyCartProducts = copyCartProducts.filter((x) => x.id !== id);
    dispatch(setCartProducts());

    // Сохранение в localstorage
    localStorage.setItem("cartProducts", JSON.stringify(copyCartProducts));
    console.log(id);
  };

  return (
    <S.Card>
      <S.Profile>
        <S.ProfileMobile>
          <S.ProfileAvatar
            src={
              "https://s3-alpha-sig.figma.com/img/069d/4993/effb9b18f14255a7118da3477ecc84db?Expires=1649635200&Signature=RTys6vM4E9Xmg7hJjb3xWi24G8ux6STDBTGPxBIbZZ-7gsb8lNW75CuUnu~JGLTvhQ8QJPYcbxqbKxGMJn857jySEbOKhvvTbG6L7yyPfG7OoI3sTGkraJcfphAaLw90DQs~IdMqxAi-F72bLsBCebrIrLGbpOgmrDLHwCEYpYdenIf7vVYnaaSnzGYE8RJXneIzxd-OxMaE4qBWuS9cAiR93ot7l~-jiUw8ompgM9kt38cigyX0zavTwcJfkRVDmAMWNgyd-XlJt0zAMIvuDWGl6jR~QujBDWbLllk9aEaaZQl93hk77R79~WYR2weIgpOGDSEtpJN9QhQIKHjpLQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            }
          />
          <S.ProfileDetails>
            <S.ProfileName>{props.product?.seller?.first_name}</S.ProfileName>
            <S.ProfileRole>Частный продавец</S.ProfileRole>
          </S.ProfileDetails>
        </S.ProfileMobile>
        <svg
          onClick={() => deleteItem(props.product?.id)}
          width="10px"
          height="10px"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.88735 0.656579C10.0375 0.506378 10.0375 0.262853 9.88735 0.112651C9.73715 -0.0375504 9.49362 -0.0375504 9.34342 0.112651L5 4.45607L0.656579 0.112651C0.506378 -0.0375504 0.262853 -0.0375504 0.112651 0.112651C-0.0375504 0.262853 -0.0375504 0.506378 0.112651 0.656579L4.45607 5L0.112651 9.34342C-0.0375504 9.49362 -0.0375504 9.73715 0.112651 9.88735C0.262853 10.0375 0.506378 10.0375 0.656579 9.88735L5 5.54393L9.34342 9.88735C9.49362 10.0375 9.73715 10.0375 9.88735 9.88735C10.0375 9.73715 10.0375 9.49362 9.88735 9.34342L5.54393 5L9.88735 0.656579Z"
            fill="#717171"
          />
        </svg>
      </S.Profile>
      <S.DescriptionCol>
        <S.ProductImage
          src={
            URL +
            props.product?.images?.find((x) => x.main_image === true)?.image
          }
        />
        <S.DescBlock>
          <S.DescriptionTitle>{props.product?.title}</S.DescriptionTitle>
          <S.DescriptionText>
            {props?.product?.description?.length > 65
              ? props?.product?.description?.slice(0, 65) + " ..."
              : props?.product?.description}
          </S.DescriptionText>
          <S.PriceCol>${props.product?.price}</S.PriceCol>
          <S.Size>
            Размер:{" "}
            {props.product?.size?.filter((x) => x.selected === true)[0]?.title}
          </S.Size>
        </S.DescBlock>
      </S.DescriptionCol>
    </S.Card>
  );
};

export default CartProductCard;
