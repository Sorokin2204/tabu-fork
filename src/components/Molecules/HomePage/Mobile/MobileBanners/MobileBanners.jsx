import * as S from "./Styled";
import ImageBlock from "../../../../Atoms/ImageBlock";
import Ring from "assets/img/banners/2.png";
import { useSelector } from "react-redux";

const MobileBanners = () => {
  const ads = useSelector((state) => state.ads.ads);
  const ad = ads?.filter((x) => x.type === 2)[0];

  return (
    <S.Wrapper>
      <S.FirstImg src={ad?.image} />
      <S.Second>
        <S.Title>{ad?.title}</S.Title>
        <S.Description>{ad?.description}</S.Description>
        <S.Ring>
          <ImageBlock src={ad?.helper_image} />
        </S.Ring>
        <a href={ad?.link}>
          <S.Button>Посмотреть</S.Button>
        </a>
      </S.Second>
    </S.Wrapper>
  );
};

export default MobileBanners;
