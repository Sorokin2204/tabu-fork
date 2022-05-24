import styled from 'styled-components';
import Image1 from 'assets/img/banners/1.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 25px 16px 25px;
`;

export const FirstImg = styled.div`
  height: 60vw;
  width: 100%;
  background-image: url(${({ src }) => src || ''});
  background-size: cover;
  background-repeat: no-repeat;

  background-position-y: 80%;
`;

export const Second = styled.div`
  margin-top: 14px;
  padding: 40px 29px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  font-family: Mont;
  font-size: 20px;
  color: #191919;
  font-weight: 700;
`;
export const Description = styled.div`
  font-family: Mont;
  font-size: 12px;
  color: #191919;
  font-weight: 600;
  margin-top: 16px;
  text-align: center;
`;
export const Ring = styled.div`
  width: 35vw;
  min-width: 220px;

  height: auto;
  margin-top: 56px auto 0 auto;
`;
export const Button = styled.div`
  font-family: Gilroy;
  font-size: 14px;
  color: #191919;
  font-weight: 400;
  margin-top: 53px;
  border-bottom: 1px solid #191919;
  text-transform: uppercase;
`;
export const Description1 = styled.div``;
