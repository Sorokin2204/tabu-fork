import styled, { css } from 'styled-components';
import Search from 'assets/svg/search.svg';

const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || 'auto'};
  max-width: 381px;
  @media (max-width: 1110px) {
    max-width: 244px;
  }
`;

const Label = styled.label`
  display: flex;
  width: 100%;
  font-family: 'Gilroy';
  font-weight: 400;
  font-size: 14px;
  color: #191919;
`;

const StyledInput = styled.input`
  display: flex;

  background-image: url(${Search});
  background-position: 8px center;
  background-repeat: no-repeat;

  margin: ${({ margin }) => margin || '20px 0 0 0'};
  padding: ${({ padding }) => padding || '10px 8px 10px 36px'};
  outline: none;
  border: 1px solid #d8d5d5;
  font-family: 'Gilroy';
  font-weight: 400;
  font-size: 12px;

  ::placeholder {
    color: #959494;
  }
`;

const SearchInput = (props) => {
  return (
    <Wrapper width={props.width}>
      <Label>{props.label}</Label>
      <StyledInput placeholder={props.placeholder} onChange={(event) => props.setValue(event.target.value)} value={props.value} {...props} />
    </Wrapper>
  );
};

export default SearchInput;
