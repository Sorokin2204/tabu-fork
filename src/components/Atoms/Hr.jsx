import styled from 'styled-components';

const StyledHr = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  min-height: 1px;
  background-color: ${({ color }) => color || '#ABABAB'};
  margin: ${({ margin }) => margin || ''};
  padding: ${({ padding }) => padding || ''};
`;

const Hr = (props) => {
  return <StyledHr {...props} />;
};

export default Hr;
