import Flex from 'components/Atoms/Flex';
import Grid from 'components/Atoms/Grid';
import Text from 'components/Atoms/Text';
import * as S from './Styled';
import { Youtube, Instagram, Telegram, Whatsapp, Facebook, TikTok } from 'components/Atoms/Icons/Social';
import { useNavigate } from 'react-router-dom';
import { footerData } from './Mobile/MobileFooter';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <S.Footer>
      <Flex>
        <Flex columns="1fr 1fr 1fr 1fr 1fr" gap="0 80px" style={{ justifyContent: 'space-between', width: '100%' }}>
          {footerData?.map((item) => (
            <Flex direction="column">
              <S.TitleColumn>{item?.title}</S.TitleColumn>
              <Flex margin="40px 0 0 0" direction="column">
                {item?.list?.map((itemFooter) => (
                  <S.TextColumn href={itemFooter.link}>{itemFooter.name}</S.TextColumn>
                ))}
              </Flex>
            </Flex>
          ))}

          <Flex direction="column">
            <S.TitleColumn>Cвязаться с нами</S.TitleColumn>
            <Flex margin="51.33px 0 0 0">
              <Flex>
                <a href="https://vm.tiktok.com/ZMNh6dkEs/" target="_blank">
                  <TikTok />
                </a>
              </Flex>
              <Flex margin="0 0 0 20px">
                <a href="https://www.instagram.com/taabu.kz/" target="_blank">
                  <Instagram />
                </a>
              </Flex>
              <Flex margin="0 0 0 20px">
                <a href="https://t.me/taabukz" target="_blank">
                  <Telegram />
                </a>
              </Flex>
              <Flex margin="0 0 0 20px">
                {' '}
                <a href="https://wa.me/87068368442" target="_blank">
                  <Whatsapp />
                </a>
              </Flex>
              <Flex margin="0 0 0 20px">
                {' '}
                <a href="https://www.facebook.com/Taabu-105695948854173" target="_blank">
                  <Facebook />
                </a>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex align="center" justify="space-between" margin="78px 0 0 0">
        <S.DarkText>© 2022 TAABU. Все права защищены .</S.DarkText>
        <Flex>
          <S.DarkText href={process.env.PUBLIC_URL + '/info/pdf/politika-konfidencialnosti.pdf'} target={'_blank'}>
            Публичная оферта и Политика конфиденциальности
          </S.DarkText>
          <S.Line> | </S.Line>
          <S.DarkText href={process.env.PUBLIC_URL + '/info/pdf/terms-of-use.pdf'} target={'_blank'}>
            Правила пользования
          </S.DarkText>
        </Flex>
      </Flex>
    </S.Footer>
  );
};

export default Footer;
