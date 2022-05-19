import ImageBlock from "components/Atoms/ImageBlock";
import * as S from "./Styled";
import Vogue from "assets/img/Media/vogue.png";
import Cosmo from "assets/img/Media/cosmo.png";
import Village from "assets/img/Media/village.png";
import Marie from "assets/img/Media/marie.png";
import Flex from "components/Atoms/Flex";
import Text from "components/Atoms/Text";

const MobileMedia = () => {
  return (
    <S.Wrapper>
      <S.Title>О нас пишут СМИ</S.Title>
      <Flex margin="40px 0 0 0" align="center" justify="center">
        <ImageBlock src={Vogue} />
        <ImageBlock src={Cosmo} margin="0 0 0 80px" />
      </Flex>
      <Flex align="center" margin="39px 0 0 0">
        <ImageBlock src={Village} />
        <ImageBlock src={Marie} margin="0 0 0 80px" />
      </Flex>
    </S.Wrapper>
  );
};

export default MobileMedia;
