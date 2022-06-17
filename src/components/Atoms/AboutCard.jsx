import styled from 'styled-components';
import Text from './Text';

const StyledAboutCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 20px;
  border: 1px solid #e2e2e2;
  background: none;
`;

const AboutCard = (props) => {
  return (
    <StyledAboutCard>
      {props.icon}
      <Text color="#252525" fontFamily="Manrope" fontWeight="400" fontSize="16px" textAlign="center" textTransform="uppercase" margin="58.67px 0 0 0">
        {props.title}
      </Text>
      <Text color="#252525" fontFamily="Manrope" fontWeight="300" fontSize="13px" textAlign="center" margin="24px 0 0 0">
        {props.description}
      </Text>
      {/* <Text color="#191919" fontFamily="Mont" fontWeight="600" fontSize="13px" textAlign="center" decLine="1px solid #191919" margin="auto 0 0 0" textTransform="uppercase" cursor="pointer">
        Подробнее
      </Text> */}
    </StyledAboutCard>
  );
};

export default AboutCard;
