import styled from 'styled-components';
import Text from '../Text';

const Label = styled.label`
  display: flex;
  align-items: center;
  margin: ${({ margin }) => margin || '0'};
  cursor: pointer;
  user-select: none;
`;

const Radio = (props) => {
  return (
    <Label {...props}>
      <input className="real-radio-btn" type="radio" checked={props.value} onChange={props.onChange} />
      <span className="custom-radio-btn" />
      <Text color="#191919" fontFamily="Gilroy" fontWeight="400" fontSize="14px" textAlign="center" cursor="pointer">
        {' '}
        {props.label}
      </Text>
    </Label>
  );
};

export default Radio;
