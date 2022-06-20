import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  padding: 64px 56px 154px 56px;
  margin: 0 auto;
  @media (max-width: 1110px) {
    padding: 28px 26px 56px 26px;
  }
`;
export const Title = styled.div`
  padding-left: 20px;
  display: flex;
  justify-content: center;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;
  margin: 0 auto;
  margin-bottom: 80px;
  @media (max-width: 1110px) {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #191919;
    margin-bottom: 30px;
  }
`;
export const StepList = styled.div`
  display: grid;
  grid-gap: 56px;
  justify-content: space-between;
  position: relative;
  &::before {
    content: '';
    display: block;
    width: 70%;
    height: 2px;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #025b37;
    position: absolute;
    justify-content: start;
    z-index: 1;
  }

  @media (max-width: 1110px) {
    grid-template-columns: minmax(0, 325px) !important;
    justify-content: center;
    max-width: 325px;
    margin: 0 auto;
    grid-gap: 24px;
    &::before {
      width: 2px;
      height: ${(props) => props.mobLineHeight ?? '0%'};
      top: 0px;
      left: 27.5px;
      transform: translateX(0%);
    }
  }
`;
export const StepItem = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1110px) {
    display: grid;
    max-width: 325px;
    align-items: start;
    justify-content: center;
  }
`;
export const StepCircle = styled.div`
  width: 80px;
  height: 80px;
  background: #025b37;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 130%;
  color: #ffffff;
  margin-bottom: 20px;
  @media (max-width: 1110px) {
    font-size: 20px;
    width: 56px;
    height: 56px;
    grid-column: 1/2;
    grid-row: 1/3;
    margin-right: 16px;
  }
`;
export const StepTitle = styled.div`
  color: #191919;
  margin-bottom: 12px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  text-transform: uppercase;
  @media (max-width: 1110px) {
    font-size: 14px;
    grid-column: 2/3;
    grid-row: 1/2;
    margin-bottom: 6px;
  }
`;
export const StepDesc = styled.div`
  color: #191919;
  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  @media (max-width: 1110px) {
    grid-column: 2/3;
    grid-row: 2/3;
    text-align: left;
    font-size: 12px;
  }
`;
