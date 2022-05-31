import styled from 'styled-components';
import AddIcon from 'assets/svg/close.svg';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 72px;
  align-items: center;
  width: 100%;
  @media (max-width: 1110px) {
    margin-top: 64px;
  }
`;

export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  text-transform: uppercase;
  color: #191919;
  @media (max-width: 1110px) {
    font-size: 14px;
    margin-right: auto;
  }
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
  width: 100%;
  padding: 0 16px;
  height: 50px;
  align-items: center;
  border: 1px solid #e5e5e5;
  margin-top: 32px;
`;

export const DetailsItemTitle = styled.div`
  font-family: 'Mont';
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

export const Form = styled.div`
  width: 100%;
  margin-top: 32px;
  @media (max-width: 1110px) {
    margin-top: 40px;
  }
`;
export const Add = styled.div`
  mask-image: url(${AddIcon});
  mask-size: 25px 25px;
  mask-repeat: no-repeat;
  background-color: #717171;
  width: 26px;
  height: 26px;
  box-sizing: border-box;
  transform: rotate(45deg) scale(0.8) translate(3%, -1%);
`;
export const InputClose = styled.div`
  cursor: pointer;
  top: 50%;
  right: 11px;
  position: absolute;
  mask-image: url(${AddIcon});
  mask-size: 22px 22px;
  mask-repeat: no-repeat;
  background-color: #717171;
  width: 22px;
  height: 22px;
  box-sizing: border-box;
  transform: translateY(-50%);
`;
export const InputWrapper = styled.div`
  position: relative;
  & + & {
    margin-top: 16px;
  }
`;
export const Input = styled.input`
  padding: 0 16px;
  height: 50px;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  outline: none;
  width: 100%;
  display: flex;
  align-items: center;

  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  &:focus {
    border: 1px solid #025b37;
  }
`;

export const Wrapper2 = styled.div``;
