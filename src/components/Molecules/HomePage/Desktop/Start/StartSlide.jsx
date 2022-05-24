import Grid from '../../../../Atoms/Grid';
import Text from '../../../../Atoms/Text';
import RightImg from 'assets/img/start.png';
import startProduct from 'assets/img/startProduct.png';
import Hr from '../../../../Atoms/Hr';
import MoreButton from '../../../../Atoms/MoreButton';
import ImageBlock from '../../../../Atoms/ImageBlock';
import DivImage from 'components/Atoms/DivImage';

const StartSlide = ({ ad }) => {
  return (
    <Grid w100 columns="1fr 1fr" gap={'0 69px'}>
      <div>
        <Text color="#191919" fontFamily="Gilroy" fontWeight="400" fontSize="72px">
          {ad?.title}
        </Text>

        <Text color="#025B37" fontFamily="Gilroy" fontWeight="400" fontSize="20px" margin="50px 0 0 0">
          {ad?.helper_text}
        </Text>
        <Hr margin="25px 0 0 0" />
        <Grid columns="1fr 1fr" gap="0 52px" margin="48px 0 0 0">
          <ImageBlock src={ad?.helper_image} alt="" />
          <Grid alignContent="center">
            <div>
              <Text color="#191919" fontFamily="Gilroy" fontWeight="600" fontSize="14px">
                {ad?.description}
              </Text>
              <MoreButton margin="66px 0 0 0" link={ad?.link}>
                посмотреть
              </MoreButton>
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid justifyItems="end">
        <DivImage width="100%" height="auto" src={ad?.image} alt="" />
      </Grid>
    </Grid>
  );
};

export default StartSlide;
