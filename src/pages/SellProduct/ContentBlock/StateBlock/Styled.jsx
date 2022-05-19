import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
`;

export const Title = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  /* identical to box height, or 28px */

  text-transform: uppercase;

  /* Tabu/Black */

  color: #191919;
`;

export const Variants = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Variant = styled.div`
  margin-top: 32px;

  &:nth-child(1) {
    margin-top: 56px;
  }
`;

export const VariantRow = styled.div`
  display: flex;
  align-items: center;
`;

export const VariantStatus = styled.div`
  display: flex;
  border: 1px solid #025b37;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const VariantStatusCircle = styled.div`
  background: #025b37;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

export const VariantTitle = styled.div`
  font-family: "Mont";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  color: #000000;
  margin-left: 20px;
`;

export const VariantDescription = styled.div`
  font-family: "Mont";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  /* or 20px */

  /* Tabu/Dark/Text-Gray */

  color: #717171;
  margin-left: 40px;
  margin-top: 12px;
`;

export const VariantTitle1 = styled.div``;
