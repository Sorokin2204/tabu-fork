import { useSelector } from 'react-redux';
import ProfileProducts from '../ProfileProducts/ProfileProducts';
import * as S from './Styled';
import Tab from './Tabs/Tab';
import Tabs from './Tabs/Tabs';

const ProfileContent = ({ tabs, title, wishlist }) => {
  const isMobile = useSelector((state) => state.app.isMobile);
  return (
    <S.Wrapper>
      {(isMobile || wishlist) && <S.Title wishlist={wishlist}>{title}</S.Title>}
      {tabs && tabs?.length !== 0 && <Tabs tabs={tabs} />}

      <ProfileProducts />
    </S.Wrapper>
  );
};

export default ProfileContent;
