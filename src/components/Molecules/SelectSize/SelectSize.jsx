import Flex from "components/Atoms/Flex";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { setOpenedProduct } from "redux/reducers/productReducer";
import styled, { css } from "styled-components";

export const StyledSize = styled.div`
  padding: 11px 16px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-family: Mont;
  font-size: 14px;
  color: #717171;
  margin-left: 16px;

  &:nth-child(1) {
    margin-left: 0;
  }

  ${(props) =>
    props.active === true &&
    css`
      border: 1px solid #191919;
      color: #191919;
    `}
`;

const SelectSize = (props) => {
  const opened_product = useSelector((state) => state.product.openedProduct);
  const [sizes, setSizes] = useState([]);
  const [now, setNow] = useState();
  const [lastIndex, setLastIndex] = useState(null);

  useEffect(() => {
    setSizes(props.sizes);
  }, []);

  const onSelect = (size, i) => {
    let copyOpenedProduct = opened_product;
    copyOpenedProduct.size[i].selected = true;

    setLastIndex(i);
    if (lastIndex !== null) {
      copyOpenedProduct.size[lastIndex].selected = false;
    }

    setOpenedProduct(copyOpenedProduct);
    setNow(size.title);
  };

  return (
    <Flex margin="16px 0 0 0">
      {opened_product
        ? opened_product.size
          ? opened_product.size.map((size, i) => (
              <StyledSize
                key={i}
                onClick={() => onSelect(size, i)}
                active={now === size.title}
              >
                {size.title}
              </StyledSize>
            ))
          : ""
        : ""}
    </Flex>
  );
};

export default SelectSize;
