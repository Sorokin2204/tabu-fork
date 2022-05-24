import * as S from './Styled';
import Tab from './Tab/Tab';

const MobileHowExpand = (props) => {
  return (
    <S.Wrapper>
      <S.Title>Как работает сервис?</S.Title>
      <Tab title="Кто может продавать товары на площадке TAABU ?" description="Veniam sit laborum consequat ex minim laboris officia qui eu est duis est eiusmod." />
      <Tab title="Какие преимущества для продавцов ?" description="Veniam sit laborum consequat ex minim laboris officia qui eu est duis est eiusmod." />
      <Tab title="Как начать действовать сегодня, чтобы обойти своих конкурентов ?" description="Veniam sit laborum consequat ex minim laboris officia qui eu est duis est eiusmod." />
      <Tab title="Какие преимущества для покупателей ?" description="Veniam sit laborum consequat ex minim laboris officia qui eu est duis est eiusmod." />
    </S.Wrapper>
  );
};

export default MobileHowExpand;
