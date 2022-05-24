import React from 'react';
import Grid from '../../../Atoms/Grid';
import First from 'assets/img/twoSections/1.png';
import Second from 'assets/img/twoSections/2.png';
import Text from '../../../Atoms/Text';
import ImageBlock from '../../../Atoms/ImageBlock';
import { useSelector } from 'react-redux';

const TwoSections = () => {
  const ads = useSelector((state) => state.ads.ads);
  const ad_left = ads?.filter((x) => x.type === 3)[0];
  const ad_right = ads?.filter((x) => x.type === 3)[1];

  return (
    <Grid columns="1fr 1fr" gap="0 32px" padding="120px 56px 94px 56px">
      <div style={{ display: 'grid', justifyItems: 'center' }}>
        <ImageBlock src={ad_left?.image} />
        <Text color="#191919" fontFamily="Mont" fontWeight="800" margin="20px 0 0 0" textAlign="center" fontSize="14px" textTransform="uppercase">
          {ad_left?.title}
        </Text>

        <Text color="#717171" fontFamily="Mont" fontWeight="600" margin="12px 0 0 0" textAlign="center" fontSize="14px" textTransform="uppercase" decLine="1px solid #717171" inlineGrid justifySelf="center" cursor="pointer">
          {ad_left?.helper_text}
        </Text>
      </div>
      <div style={{ display: 'grid', justifyItems: 'center' }}>
        <ImageBlock src={ad_right?.image} />
        <Text color="#191919" fontFamily="Mont" fontWeight="800" margin="20px 0 0 0" textAlign="center" fontSize="14px" textTransform="uppercase">
          {ad_right?.title}
        </Text>

        <Text color="#717171" fontFamily="Mont" fontWeight="600" margin="12px 0 0 0" textAlign="center" fontSize="14px" textTransform="uppercase" decLine="1px solid #717171" inlineGrid justifySelf="center" cursor="pointer">
          {ad_right?.helper_text}
        </Text>
      </div>
    </Grid>
  );
};

export default TwoSections;
