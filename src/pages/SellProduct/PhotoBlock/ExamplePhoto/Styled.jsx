import styled, { css } from 'styled-components';

export const ExamplePhoto = styled.div`
  width: 100%;
  height: auto;
  border-radius: 16px;
  margin-left: 20px;

  background-image: url(${(props) => props.src || ''});
  background-size: cover;
  background-position: center;

  width: 100%;
  height: 220px;
  @media (max-width: 1110px) {
    min-width: 156px;
    margin-left: 16px;
  }
`;
