import * as S from './Styled';
import Text from '../../../../Atoms/Text';
import Tab from '../../../../Atoms/Tab';
import StepsMobile from '../../../../Atoms/StepsMobile';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const MobileHowWorks = () => {
  const [activeTab, setActiveTab] = useState('custumer');
  const isMobile = useSelector((state) => state.app.isMobile);
  return (
    <S.Wrapper>
      <Text
        color="#191919"
        fontFamily="Gilroy"
        fontWeight="400"
        fontSize="20px"
        textAlign="center"
        style={{
          fontSize: isMobile ? '20px' : '32px',
        }}>
        КАК РАБОТАЕТ СЕРВИС?
      </Text>
      <S.Tabs>
        <Tab active={activeTab === 'custumer'} onClick={() => setActiveTab('custumer')}>
          Для покупателей
        </Tab>
        <Tab active={activeTab === 'seller'} onClick={() => setActiveTab('seller')}>
          Для продавцов
        </Tab>
      </S.Tabs>
      <StepsMobile active={activeTab} />
    </S.Wrapper>
  );
};

export default MobileHowWorks;
