import Flex from 'components/Atoms/Flex';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setOpenedProduct } from 'redux/reducers/productReducer';
import styled, { css } from 'styled-components';

export const StyledSize = styled.div`
  padding: 7px 16px 8px 16px;
  border-radius: 4px;
  font-family: Mont;
  font-size: 14px;
  text-transform: uppercase;
  margin-right: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  &:nth-child(1) {
    margin-left: 0;
  }
  border: ${(props) => (props.active ? '1px solid #191919' : '1px solid #e5e5e5')};
  color: ${(props) => (props.active ? '#191919' : '#717171')};
  /* ${(props) =>
    props.active === true &&
    css`
      border: 1px solid #191919;
      color: #191919;
    `} */
`;

const SelectSize = ({ sizes, activeSize, setActiveSize }) => {
  const opened_product = useSelector((state) => state.product.openedProduct);
  // const [sizes, setSizes] = useState([]);
  // const [now, setNow] = useState();
  // const [lastIndex, setLastIndex] = useState(null);

  // useEffect(() => {
  //   setSizes(props.sizes);
  // }, []);

  // const onSelect = (size, i) => {
  //   let copyOpenedProduct = opened_product;
  //   copyOpenedProduct.size[i].selected = true;

  //   setLastIndex(i);
  //   if (lastIndex !== null) {
  //     copyOpenedProduct.size[lastIndex].selected = false;
  //   }

  //   setOpenedProduct(copyOpenedProduct);
  //   setNow(size.title);
  // };

  return (
    <Flex margin="16px 0 0 0" style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
      {sizes?.map((size, i) => (
        <StyledSize key={i} onClick={() => setActiveSize(size.id)} active={activeSize === size.id}>
          {size.title}
        </StyledSize>
      ))}
    </Flex>
  );
};

export default SelectSize;
