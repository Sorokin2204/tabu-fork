import styled from "styled-components";
import Grid from "../../../Atoms/Grid";
import Text from "../../../Atoms/Text";
import ImageBlock from "../../../Atoms/ImageBlock";
import Vogue from "assets/img/Media/vogue.png";
import Cosmo from "assets/img/Media/cosmo.png";
import Village from "assets/img/Media/village.png";
import Marie from "assets/img/Media/marie.png";

const StyledMedia = styled.div`
  display: grid;
`;

const Wrapper = styled.div`
  display: grid;
  width: 80%;
  justify-self: center;
`;

const Media = () => {
  return (
    <StyledMedia>
      <Wrapper>
        <Text
          color="#191919"
          fontFamily="Gilroy"
          fontWeight="400"
          fontSize="32px"
          textAlign="center"
          margin="120px 0 0 0"
        >
          О нас пишут СМИ
        </Text>
        <Grid
          columns="1fr 1fr 1fr 1fr"
          margin="80px 0 0 0"
          padding="0 0 121px 0"
          gap="0 120px"
        >
          <ImageBlock src={Vogue} />
          <ImageBlock src={Cosmo} />
          <ImageBlock src={Village} />
          <ImageBlock src={Marie} />
        </Grid>
      </Wrapper>
    </StyledMedia>
  );
};

export default Media;
