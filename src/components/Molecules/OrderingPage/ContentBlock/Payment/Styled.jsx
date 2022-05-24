import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;
  padding-bottom: 276px;
  align-items: center;
  @media (max-width: 1110px) {
    padding-bottom: 200px;
  }
  ${(props) =>
    props.active &&
    css`
      display: flex;
    `};
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #e5e5e5;
  margin-top: 72px;
  @media (max-width: 1110px) {
    margin-top: 56px;
  }
`;

export const TitleLine = styled.div`
  display: flex;
  margin-top: 32px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  text-transform: uppercase;
  color: #191919;
  @media (max-width: 1110px) {
    font-size: 14px;
  }
`;

export const Edit = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-decoration-line: underline;
  color: #000000;
  cursor: pointer;
  @media (max-width: 1110px) {
    font-size: 12px;
  }
`;

export const Ul = styled.ul`
  margin-top: 20px;
  width: 100%;
`;

export const Li = styled.li`
  margin-top: 4px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  margin-left: 15px;
  /* or 20px */

  color: #000000;

  @media (max-width: 1110px) {
    font-size: 12px;
  }
`;

export const Line2 = styled.div`
  width: 100%;
  height: 1px;
  background: #e5e5e5;
  margin-top: 40px;
  @media (max-width: 1110px) {
    margin-top: 32px;
  }
`;
