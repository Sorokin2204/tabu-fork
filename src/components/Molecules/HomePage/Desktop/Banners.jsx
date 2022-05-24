import styled from 'styled-components';
import Grid from '../../../Atoms/Grid';
import Men from 'assets/img/banners/1.png';
import Ring from 'assets/img/banners/2.png';
import Text from '../../../Atoms/Text';
import ImageBlock from '../../../Atoms/ImageBlock';
import DivImage from '../../../Atoms/DivImage';
import { useSelector } from 'react-redux';

const StyledBanners = styled.div`
  padding: 120px 56px 144px 56px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  padding: 80px 57px 80px 57px;
`;

const Banners = () => {
  const ads = useSelector((state) => state.ads.ads);
  const ad = ads?.filter((x) => x.type === 2)[0];

  return (
    <StyledBanners>
      <Grid columns="2fr 1fr" gap="0 31px">
        <DivImage backgroundSize={'cover'} src={ad?.image} alt="" />
        <Right>
          <Text color="#191919" fontFamily="Mont" fontWeight="700" fontSize="32px" textAlign="center">
            {ad?.title}
          </Text>
          <Text margin="32px 0 0 0" color="#191919" fontFamily="Mont" fontWeight="600" fontSize="16px" textAlign="center">
            {ad?.description}
          </Text>
          <Grid margin="97px 0 0 0">
            <ImageBlock src={ad?.helper_image} alt="" />
          </Grid>
          <a href={ad?.link}>
            <Text margin="90px 0 0 0" cursor="pointer" color="#191919" fontFamily="Gilroy" fontWeight="400" fontSize="20px" textAlign="center" decLine="1px solid #191919" textTransform="uppercase">
              Посмотреть
            </Text>
          </a>
        </Right>
      </Grid>
    </StyledBanners>
  );
};

export default Banners;
