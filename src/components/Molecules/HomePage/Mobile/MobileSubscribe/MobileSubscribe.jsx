import { useState } from 'react';
import Button from 'components/Atoms/Button';
import Flex from 'components/Atoms/Flex';
import Input from 'components/Atoms/Form/Input';
import Radio from 'components/Atoms/Form/Radio';
import Text from 'components/Atoms/Text';

const MobileSubscribe = () => {
  const [favorite, setFavorite] = useState('woman');
  const [email, setEmail] = useState('');

  const handleWomanChange = () => {
    setFavorite('woman');
  };

  const handleMenChange = () => {
    setFavorite('men');
  };

  return (
    <Flex padding="48px 25px" justify="center">
      <Flex name="Wrapper" width="100%" direction="column">
        <Text
          color="#191919"
          fontFamily="Gilroy"
          fontWeight="400"
          fontSize="20px"
          textAlign="center"
          style={{
            maxWidth: '245px',
            margin: '0 auto',
          }}>
          ПОДПИШИТЕСЬ НА РАССЫЛКУ И ПОЛУЧИТЕ СКИДКУ 10%
        </Text>
        <Text
          color="#191919"
          fontFamily="Manrope"
          fontWeight="400"
          fontSize="14px"
          textAlign="center"
          margin="20px 0 0 0"
          style={{
            maxWidth: '234px',
            margin: '16px auto 0 auto',
          }}>
          Ранний доступ к распродаже, новости о специальных предложениях и подборки лучших новинок — для подписчиков рассылки.
        </Text>
        <Flex margin="24px 0 0 0" justify="center">
          <Radio label="Женщина" value={favorite === 'woman'} onChange={handleWomanChange} />
          <Radio label="Мужчина" value={favorite === 'men'} onChange={handleMenChange} margin="0 0 0 32px" />
        </Flex>
        <Flex
          margin="31px auto 0 auto"
          style={{
            maxWidth: '326px',
            width: '100%',
          }}>
          <Input
            type="email"
            width="100%"
            label="Электронная почта"
            placeholder="Эл.почта"
            value={email}
            setValue={setEmail}
            style={{
              margin: '0 auto !important',
              maxWidth: '326px',
              width: '100%',
            }}
          />
        </Flex>
        <Button
          fontFamily="Gilroy"
          fontSize="14px"
          fontWeight="400"
          padding="10px 0 12px 0"
          margin="20px 0 0 0"
          topGreen
          style={{
            margin: '16px  auto 0 auto',
            width: '100%',
            maxWidth: '326px',
          }}>
          Подписаться
        </Button>
        <Text fontFamily="Gilroy" fontSize="14px" fontWeight="400" color="#717171" textAlign="center" margin="32px 0 0 0" style={{ maxWidth: '326px', margin: '32px auto 0 auto' }}>
          Подписываясь на рассылку, вы соглашаетесь с этими документами: «Условиями пользования» и «Политикой конфиденциальности».
        </Text>
      </Flex>
    </Flex>
  );
};

export default MobileSubscribe;
