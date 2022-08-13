import styled from 'styled-components';
import Background from 'assets/img/startSell.png';
import Text from '../../../Atoms/Text';
import Button from '../../../Atoms/Button';
import { setShowRequestModal } from 'redux/reducers/appReducer';
import { useDispatch } from 'react-redux';

const StyledStartSell = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${(props) => props.img});

  height: 430px;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 80%;
`;

const StartSell = ({ title, text, btnText, img, style, onClick }) => {
  const dispatch = useDispatch();
  return (
    <StyledStartSell img={img} style={style}>
      <Wrapper>
        <Text color="#ffffff" fontFamily="Gilroy" fontWeight="700" fontSize="40px" textTransform="uppercase">
          {title}
        </Text>
        <Text color="#ffffff" margin="32px 0 0 0" fontFamily="Manrope" fontWeight="400" style={{ maxWidth: '548px' }}>
          {text}
        </Text>
        <Button onClick={() => onClick()} filled margin="48px 0 0 0" padding="14px 24px" fontSize="15px" fontWeight="400" fontFamily="Manrope">
          {btnText}
        </Button>
      </Wrapper>
    </StyledStartSell>
  );
};

export default StartSell;
