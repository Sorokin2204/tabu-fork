import Flex from '../Flex';
import Text from '../Text';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

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

const CheckBox = (props) => {
  const [value, setValue] = useState(false);
  const isMobile = useSelector((state) => state.app.isMobile);
  const toggleActive = () => {
    setValue(!value);
    props.onClick();
  };

  return (
    <CheckWrapper>
      <div onClick={toggleActive} className={`checkbox ${value ? 'checkbox-active' : ''} ${props.dark ? 'checkbox-dark' : ''}`}></div>
      {props.color && (
        <>
          <Flex margin="0 0 0 15px" radius="50%" width="20px" height="20px" background={props.color} />
          <Text color="#191919" fontFamily="Gilroy" fontSize="14px" fontWeight="400" margin="0 0 0 14px">
            {props.name}
          </Text>
        </>
      )}
      {!props.color && (
        <Text
          color="#191919"
          fontFamily="Gilroy"
          fontSize="14px"
          fontWeight="400"
          margin="0 0 0 14px"
          onClick={toggleActive}
          style={{
            cursor: 'pointer',
            userSelect: 'none',
            marginLeft: isMobile ? '8px' : '14px',
            fontSize: isMobile ? '12px' : '14px',
          }}>
          {props.name}
        </Text>
      )}
    </CheckWrapper>
  );
};

export default CheckBox;
