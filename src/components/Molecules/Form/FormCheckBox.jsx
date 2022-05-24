import styled from 'styled-components';
import Flex from 'components/Atoms/Flex';
import Text from 'components/Atoms/Text';

const CheckWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-top: 16px;

  &:nth-child(1) {
    margin-top: 0;
  }
`;

const FormCheckBox = (props) => {
  return (
    <CheckWrapper onClick={props.onClick}>
      <div className={`checkbox ${props.selected === props.name ? 'checkbox-active' : ''}`}></div>
      {props.color && (
        <>
          <Flex margin="0 0 0 15px" radius="50%" width="20px" height="20px" background={props.color} />
          <Text color="#191919" fontFamily="Gilroy" fontSize="14px" fontWeight="400" margin="0 0 0 14px" style={{ userSelect: 'none', cursor: 'pointer' }}>
            {props.name}
          </Text>
        </>
      )}
      {!props.color && (
        <Text color="#191919" fontFamily="Gilroy" fontSize="14px" fontWeight="400" margin="0 0 0 14px" style={{ userSelect: 'none', cursor: 'pointer' }}>
          {props.name}
        </Text>
      )}
    </CheckWrapper>
  );
};

export default FormCheckBox;
