import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 130px 39px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  flex-direction: column;
`;
export const Title = styled.div`
  font-family: Gilroy;
  width: 80%;
  font-weight: 700;
  font-size: 32px;
  color: #fff;
  text-transform: uppercase;
  max-width: 255px;
`;
export const Description = styled.div`
  font-family: Manrope;
  font-weight: 400;
  font-size: 12px;
  color: #fff;
  margin-top: 24px;
  max-width: 255px;
  line-height: 24px;
`;
export const Wrapper1 = styled.div``;
