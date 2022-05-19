import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 72px;
  align-items: center;
  width: 100%;
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

export const DetailsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  width: 100%;
`;

export const DetailsItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 32px);
  padding: 0 16px;
  height: 50px;
  align-items: center;
  border: 1px solid #e5e5e5;
  margin-top: 32px;
`;

export const DetailsItemTitle = styled.div`
  font-family: "Mont";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* Tabu/Black */

  color: #191919;
`;

export const DetailsDelete = styled.div`
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 32px;
`;

export const Input = styled.input`
  padding: 0 16px;
  height: 50px;
  border: 1px solid #e5e5e5;
  outline: none;
  width: calc(100% - 32px);
  display: flex;
  align-items: center;

  &:focus {
    border: 1px solid #025b37;
  }
`;

export const Wrapper2 = styled.div``;
