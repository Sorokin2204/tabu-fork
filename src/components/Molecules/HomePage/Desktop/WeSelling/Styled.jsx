import styled from 'styled-components';
import Image from 'assets/img/weSelling.png';
import { sizes } from 'sizes';

export const Wrapper = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 110px 0 110px 162px;
  jsutify-content: center;

  background-image: url(${Image});
  background-repeat: no-repeat;
  background-position: 610px 15px;
  background-size: 770px;

  @media (max-width: ${sizes.mobile}px) {
    background-size: 500px;
    padding: 40px 22px 254px;
    background-position: left 110px top 250px;
  }
`;

export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  text-transform: uppercase;
  color: #191919;

  @media (max-width: ${sizes.mobile}px) {
    font-size: 32px;
    width: 255px;
  }
`;

export const Description = styled.div`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin-top: 32px;
  max-width: 548px;

  color: #191919;

  @media (max-width: ${sizes.mobile}px) {
    font-size: 12px;
    line-height: 24px;
    max-width: 280px;
    margin-top: 24px;
  }
`;

export const ButtonBlock = styled.div`
  margin-top: 48px;
  @media (max-width: ${sizes.mobile}px) {
    margin-top: 44px;
  }
`;
