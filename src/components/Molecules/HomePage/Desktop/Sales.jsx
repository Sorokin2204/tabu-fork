import styled from 'styled-components';
import Banner from 'assets/img/sales.png';
import Text from 'components/Atoms/Text';
import { useSelector } from 'react-redux';

const StyledSales = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 194px;
  background: url(${Banner});
  background-position: center;
  padding: 0 52px;
`;

const Title = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;

  font-family: Gilroy;
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => (props.withDesc ? '48px' : '30px')};
  text-transform: uppercase;

  color: #ffffff;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 46px;
`;

const Sales = () => {
  const ads = useSelector((state) => state.ads.ads);

  const typeAd = ads.filter((x) => x.type === 4)[0] || {};

  return (
    <StyledSales>
      <Title withDesc={typeAd?.description}>{typeAd?.title}</Title>
      <Details>
        {typeAd?.description && (
          <Text fontFamily="Gilroy" fontSize={'32px'} textTransform="uppercase" fontWeight="600" color="#ffffff">
            {typeAd?.description}
          </Text>
        )}
        <a href={typeAd?.link}>
          <Text fontFamily="Gilroy" fontSize={'20px'} textTransform="uppercase" fontWeight="600" decLine="underline" color="#ffffff" margin="32px 0 0 0" cursor="pointer" decLine="1px solid #fff">
            {typeAd?.helper_text}
          </Text>
        </a>
      </Details>
    </StyledSales>
  );
};

export default Sales;
