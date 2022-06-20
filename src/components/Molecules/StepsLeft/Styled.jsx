import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  padding: 64px 56px 256px 56px;
  margin: 0 auto;
  @media (max-width: 1110px) {
    padding: 38px 16px 172px 16px;
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
    margin-bottom: 30px;
  }
`;
export const StepList = styled.div`
  display: grid;
  grid-gap: 56px;
  grid-template-columns: repeat(4, minmax(auto, 271px));
  justify-content: space-between;
  position: relative;
  &::before {
    content: '';
    display: block;
    width: 83%;
    height: 2px;
    top: 30px;
    left: 0;
    background-color: #025b37;
    position: absolute;
    z-index: 1;
  }

  @media (max-width: 1110px) {
    grid-template-columns: 1fr;
    grid-gap: 34px;
    max-width: 343px;
    margin: 0 auto;
    &::before {
      width: 2px;
      height: 83%;
      top: 4px;
      left: 23px;
    }
  }
`;
export const StepItem = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: start;
  @media (max-width: 1110px) {
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
  }
`;
export const StepCircle = styled.div`
  width: 60px;
  height: 60px;
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
    width: 46px;
    height: 46px;
    min-width: 46px;
    min-height: 46px;
    margin-bottom: 0px;
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
    margin-left: 10px;

    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    margin-bottom: 0px;
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
`;
