import styled from "styled-components";

export const OrderBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 399px;
  background-color: #f9f9f9;
  height: auto;
  padding: 32px 56px 56px 35px;
  align-items: center;
`;

export const TitleBlock = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */

  text-transform: uppercase;

  color: #000000;
  width: 100%;
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
`;

export const Line = styled.div`
  width: 308px;
  height: 1px;
  background-color: #e5e5e5;
  margin-top: 86px;
`;

export const Container = styled.div`
  width: 90%;
`;

export const PriceItems = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 32px;
`;

export const PriceItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;

  &:nth-child(1) {
    margin-top: 0;
  }
`;

export const PriceItemName = styled.div`
  font-family: "Mont";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  /* identical to box height, or 17px */

  /* Tabu/Black */

  color: #191919;
`;

export const PriceItemNumber = styled.div`
  font-family: "Mont";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  /* identical to box height, or 17px */

  text-align: right;
  font-feature-settings: "tnum" on, "lnum" on;

  /* Tabu/Black */

  color: #191919;
`;

export const SumTitle = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  margin-top: 32px;
  color: #000000;
`;

export const AllPrice = styled.div`
  display: flex;
  margin-top: 25px;
  justify-content: space-between;
`;

export const AllPriceName = styled.div`
  font-family: "Mont";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  text-transform: uppercase;

  /* Tabu/Black */

  color: #191919;
`;

export const AllPriceNumber = styled.div`
  font-family: "Mont";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 140%;
  /* identical to box height, or 17px */

  text-align: right;
  text-transform: uppercase;
  font-feature-settings: "tnum" on, "lnum" on;

  /* Tabu/Black */

  color: #191919;
`;

export const AllPriceLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  margin-top: 32px;
`;

export const TitleBlock2 = styled.div``;
