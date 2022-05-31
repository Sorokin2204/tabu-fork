import styled, { css } from 'styled-components';

const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || 'auto'};
`;

const Label = styled.label`
  display: flex;
  width: 100%;
  font-family: 'Gilroy';
  font-weight: 400;
  font-size: 14px;
  color: ${({ error }) => (error ? '#D51313' : '#191919')};
`;

const StyledInput = styled.input`
  display: flex;

  margin: ${({ margin }) => margin || '20px 0 0 0'};
  outline: none;
  border: 1px solid #d8d5d5;
  padding: 12px 16px;
  font-family: 'Gilroy';
  font-weight: 400;
  font-size: 13px;

  @media (max-width: 1110px) {
    margin-top: 16px;
  }
`;

const Input = (props) => {
  return (
    <Wrapper width={props.width} style={props.style}>
      <Label error={props.errors?.[props.name]?.message}>{props.errors?.[props.name]?.message ?? props.label}</Label>
      <StyledInput autoComplete="off" placeholder={props.placeholder} onChange={(event) => props.setValue(event.target.value)} value={props.value} {...(props.register && { ...props.register(props.name, { ...(props.rules && props.rules) }) })} />
    </Wrapper>
  );
};

export default Input;
