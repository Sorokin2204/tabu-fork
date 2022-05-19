import * as S from "./Styled";

const MobileStart = (props) => {
  return (
    <S.Wrapper {...props}>
      <S.Title>{props?.ad?.title}</S.Title>
      <S.SubTitle>{props?.ad?.helper_text}</S.SubTitle>
      <S.Image src={props?.ad?.image} />
      <S.Description>{props?.ad?.description}</S.Description>
      <S.Bottom>
        <S.Slides>
          <S.Slide />
        </S.Slides>
        <a href={props?.ad?.link} target="_blank">
          <S.Button>Посмотреть</S.Button>
        </a>
      </S.Bottom>
    </S.Wrapper>
  );
};

export default MobileStart;
