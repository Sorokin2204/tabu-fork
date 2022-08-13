import { Cards, CardsWrapper } from './Styled';
import Grid from 'components/Atoms/Grid';
import DivImage from 'components/Atoms/DivImage';
import Text from 'components/Atoms/Text';
import InstImage1 from 'assets/img/instagram/1.png';
import InstImage2 from 'assets/img/instagram/2.png';
import InstImage3 from 'assets/img/instagram/3.png';
import InstImage4 from 'assets/img/instagram/4.png';
import InstImage5 from 'assets/img/instagram/5.png';
import InstImage6 from 'assets/img/instagram/6.png';
import FavoriteIcon from 'components/Atoms/Icons/FavoriteIcon';
import BlackInstIcon from 'components/Atoms/Icons/BlackInstIcon';
import WhiteInstIcon from 'components/Atoms/Icons/WhiteInstIcon';
import { useSelector } from 'react-redux';

const MobileInstagram = () => {
  const ads = useSelector((state) => state.ads.ads);
  const ad = ads?.filter((x) => x.type === 5);
  return (
    <Grid padding="48px 0 0">
      <Text color="#191919" fontFamily="Gilroy" fontWeight="400" fontSize="20px" textAlign="center" textTransform="uppercase">
        Наш инстаграм
      </Text>
      <CardsWrapper>
        <Cards>
          <Grid name="Left" columns="2fr 1fr" gap="2px">
            <DivImage backgroundSize="cover" src={ad[0]?.image} onClick={() => window.open(ad[0]?.link, '_blank')}>
              <div style={{ margin: '9.82px 0 0 9.82px' }}>
                <BlackInstIcon />
              </div>
            </DivImage>
            <Grid gap="2px">
              <DivImage backgroundSize="cover" src={ad[1]?.image} onClick={() => window.open(ad[1]?.link, '_blank')}>
                <div style={{ margin: '9.82px 0 0 9.82px' }}>
                  <WhiteInstIcon />
                </div>
              </DivImage>
              <DivImage backgroundPosition="center 0%" backgroundSize="cover" src={ad[2]?.image} onClick={() => window.open(ad[2]?.link, '_blank')}>
                <div style={{ margin: '9.82px 0 0 9.82px' }}>
                  <WhiteInstIcon />
                </div>
              </DivImage>
            </Grid>
          </Grid>
          <Grid name="Right" columns="2fr 1fr" gap="2px">
            <DivImage backgroundSize="cover" src={ad[3]?.image} onClick={() => window.open(ad[3]?.link, '_blank')}>
              <div style={{ margin: '9.82px 0 0 9.82px' }}>
                <WhiteInstIcon />
              </div>
            </DivImage>
            <Grid gap="2px">
              <DivImage backgroundSize="cover" src={ad[4]?.image} onClick={() => window.open(ad[4]?.link, '_blank')}>
                <div style={{ margin: '9.82px 0 0 9.82px' }}>
                  <BlackInstIcon />
                </div>
              </DivImage>
              <DivImage backgroundSize="cover" src={ad[5]?.image} onClick={() => window.open(ad[5]?.link, '_blank')}>
                <div style={{ margin: '9.82px 0 0 9.82px' }}>
                  <WhiteInstIcon />
                </div>
              </DivImage>
            </Grid>
          </Grid>
        </Cards>
      </CardsWrapper>
    </Grid>
  );
};

export default MobileInstagram;
