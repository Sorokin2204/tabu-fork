import React, { useEffect, useState } from 'react';
import Text from '../../Atoms/Text';
import * as S from './Styled';
import styled from 'styled-components';
import Grid from 'components/Atoms/Grid';
import Button from 'components/Atoms/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenedProduct, showModal } from 'redux/reducers/productReducer';
import { sizes } from '../../../sizes';
import { useNavigate } from 'react-router-dom';
import Flex from 'components/Atoms/Flex';
import { setIsDisableScroll, setShowAuthModal, setShowRegModal } from 'redux/reducers/appReducer';
import { addFavorite } from 'redux/actions/product';

export const HoverWrapper = styled.div`
  position: relative;
`;
export const HoverCard = styled.div`
  position: absolute;
  left: -25px;
  top: -25px;
  z-index: 3;
  width: ${({ width }) => width || ''};
  height: auto;
  padding: 24px 22px;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  box-sizing: border-box;

  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const Card = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.products);
  const [hover, setHover] = useState(false);
  const [widthHoverBlock, setWidthHoverBlock] = useState();
  const isMobile = useSelector((state) => state.app.isMobile);
  const isAuth = useSelector((state) => state.user.isAuth);
  const onHover = () => {
    const cardWidth = document.getElementsByClassName('card')[0].offsetWidth;
    setWidthHoverBlock(cardWidth * 1.14);
    setHover(true);
  };

  const onClickView = () => {
    const targetProduct = products.results.find((x) => x.id === props.product_id);
    dispatch(setOpenedProduct(targetProduct));
    dispatch(showModal());
    dispatch(setIsDisableScroll(true));
  };

  return (
    <S.StyledCard
      {...props}
      onClick={() => {
        if (isMobile) {
          navigate(`/products/${props?.product_id}`);
        }
      }}
      className="card"
      onMouseEnter={onHover}
      onMouseLeave={() => setHover(false)}>
      {!props.noHover && hover && !isMobile && (
        <HoverWrapper>
          <HoverCard width={`${widthHoverBlock}px`}>
            <Grid>
              <S.HoverFavoriteIcon
                onClick={() => {
                  if (isAuth) {
                    dispatch(addFavorite(props?.product?.id));
                  } else {
                    dispatch(setShowAuthModal(true));
                    dispatch(setShowRegModal(true));
                  }
                }}>
                <svg width={20} height={18} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 5.50003C19 11.7444 10.0004 17 10.0004 17C10.0004 17 1 11.6667 1 5.51268C1 3.00003 3 1.00003 5.5 1.00003C8 1.00003 10 4.00003 10 4.00003C10 4.00003 12 1.00003 14.5 1.00003C17 1.00003 19 3.00003 19 5.50003Z"
                    stroke="#191919"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </S.HoverFavoriteIcon>
            </Grid>

            <S.ImageBlock src={props.img} />
            <S.Details>
              <Flex direction="column" width="80%">
                <Text name="name" color="#191919" fontFamily="Mont" fontWeight="600" fontSize="12px">
                  {props.title ? props.title : ''}
                </Text>
                <Text name="desc" color="#717171" margin="6px 0 0 0" fontFamily="Mont" fontWeight="400" fontSize="12px">
                  {props.description?.length > 65 ? props.description.slice(0, 65) + ' ...' : props.description}
                </Text>
                <Text name="size" color="#717171" margin="6px 0 0 0" fontFamily="Mont" fontWeight="400" fontSize="12px">
                  {props?.product?.size?.length && `UE ${props?.product?.size[0].title}`}
                </Text>
              </Flex>
              <Flex direction="column" justify="start" align="end">
                <Text color="#191919" fontFamily="Mont" fontWeight="600" fontSize="12px">
                  {props.price ? '$ ' + props.price : ''}
                </Text>

                <Text color="#ABABAB" fontFamily="Mont" fontWeight="600" fontSize="12px" decoration="line-through">
                  {props?.product?.old_price && '$ ' + props?.product?.old_price}
                </Text>
              </Flex>
            </S.Details>
            <Button dark_filled width="100%" fontFamily="Mont" fontWeight="600" fontSize="12px" margin="8px 0 0 0" onClick={onClickView}>
              ПРОСМОТР
            </Button>
          </HoverCard>
        </HoverWrapper>
      )}

      {!isMobile && (
        <S.FavoriteIcon
          onClick={() => {
            if (isAuth) {
              dispatch(addFavorite(props?.product?.id));
            } else {
              dispatch(setShowAuthModal(true));
              dispatch(setShowRegModal(true));
            }
          }}>
          <svg width={20} height={18} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 5.50003C19 11.7444 10.0004 17 10.0004 17C10.0004 17 1 11.6667 1 5.51268C1 3.00003 3 1.00003 5.5 1.00003C8 1.00003 10 4.00003 10 4.00003C10 4.00003 12 1.00003 14.5 1.00003C17 1.00003 19 3.00003 19 5.50003Z"
              stroke="#191919"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </S.FavoriteIcon>
      )}

      <S.ImageBlock onClick={() => console.log(props?.img)} src={props?.img} />

      <S.Details>
        <Flex direction="column" width="80%">
          <Text color="#191919" fontFamily="Mont" fontWeight="600" fontSize="12px" onClick={() => navigate(`/products/${props?.product_id}`)} cursor="pointer">
            {props.title ? props.title : ''}
          </Text>
          <Text
            color="#717171"
            fontFamily="Mont"
            fontWeight="400"
            fontSize="12px"
            style={{
              marginTop: isMobile ? '4px' : '6px',
            }}>
            {props.description?.length > 65 ? props.description.slice(0, 65) + ' ...' : props.description}
          </Text>
          {props?.product?.size?.length && (
            <Text
              name="size"
              color="#717171"
              fontFamily="Mont"
              fontWeight="400"
              fontSize="12px"
              style={{
                marginTop: isMobile ? '4px' : '6px',
              }}>
              {props?.product?.size?.length && `UE ${props?.product?.size[0].title}`}
            </Text>
          )}

          {isMobile ? (
            <Text color="#191919" fontFamily="Mont" fontWeight="600" fontSize="12px" margin={'6px 0 0 0'}>
              {props.price ? '$ ' + props.price : ''}
            </Text>
          ) : (
            ''
          )}
        </Flex>
        {!isMobile ? (
          <Flex direction="column" justify="start" align="end">
            <Text color="#191919" fontFamily="Mont" fontWeight="600" fontSize="12px">
              {props.price ? '$ ' + props.price : ''}
            </Text>

            <Text color="#ABABAB" fontFamily="Mont" fontWeight="600" fontSize="12px" decoration="line-through">
              {props?.product?.old_price && '$ ' + props?.product?.old_price}
            </Text>
          </Flex>
        ) : (
          ''
        )}
      </S.Details>
    </S.StyledCard>
  );
};

export default Card;
