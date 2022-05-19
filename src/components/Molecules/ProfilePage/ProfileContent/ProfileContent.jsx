import ProfileProducts from "../ProfileProducts/ProfileProducts";
import * as S from "./Styled";
import Tab from "./Tabs/Tab";
import Tabs from "./Tabs/Tabs";

const ProfileContent = () => {
  return (
    <S.Wrapper>
      <Tabs />
      <ProfileProducts />
    </S.Wrapper>
  );
};

export default ProfileContent;
