import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as S from './Styled';

const MobileSections = () => {
  const ads = useSelector((state) => state.ads.ads);
  const ad_left = ads?.filter((x) => x.type === 3)[0];
  const ad_right = ads?.filter((x) => x.type === 3)[1];
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Block href={ad_left?.link}>
        <S.Title>{ad_left?.title}</S.Title>
        <S.Description>{ad_left?.helper_text}</S.Description>
        <S.Image src={ad_left?.image} />
      </S.Block>
      <S.Block href={ad_right?.link}>
        <S.Title>{ad_right?.title}</S.Title>
        <S.Description>{ad_right?.helper_text}</S.Description>
        <S.Image src={ad_right?.image} />
      </S.Block>
    </S.Wrapper>
  );
};

export default MobileSections;
