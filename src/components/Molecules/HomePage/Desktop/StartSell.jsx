import styled from 'styled-components';
import Background from 'assets/img/startSell.png';
import Text from '../../../Atoms/Text';
import Button from '../../../Atoms/Button';

const StyledStartSell = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${Background});
  background-size: 105%;
  background-position: center 5%;
  width: 100%;
  height: 430px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 80%;
`;

const StartSell = () => {
  return (
    <StyledStartSell>
      <Wrapper>
        <Text color="#ffffff" fontFamily="Gilroy" fontWeight="700" fontSize="40px" textTransform="uppercase">
          Начните продавать
        </Text>
        <Text color="#ffffff" margin="32px 0 0 0" fontFamily="Manrope" fontWeight="400">
          Продавая вещи, которые пылятся у вас в шкафу, вы зарабатываете на <br /> будущие покупки. На нашем сайте достаточно двух кликов, чтобы
          <br />
          выставить свои вещи на продажу. продажу.
        </Text>
        <Button filled margin="48px 0 0 0" padding="14px 24px" fontSize="15px" fontWeight="400" fontFamily="Manrope">
          Продать товар
        </Button>
      </Wrapper>
    </StyledStartSell>
  );
};

export default StartSell;
