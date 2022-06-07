import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.div`
  padding: 24px 56px;
`;

export const BreadCrumb = styled.div`
  font-family: Mont;
  font-weight: 600;
  font-size: 14px;
  color: #ababab;
`;

export const TwoBlocks = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-gap: 0 59px;
  margin-top: 24px;
`;

export const ImagesBlock = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-column-gap: 20px;
`;

export const PreviewImages = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PreviewImage = styled.div`
  width: 60px;
  height: 75px;

  margin-top: 16px;

  background-image: url(${({ src }) => src || ''});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;

  &:nth-child(1) {
    margin-top: 0;
  }

  ${(props) =>
    props.active &&
    css`
      border: 1px solid #191919;
    `}
`;

export const MainImages = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubscribeBlock = styled.div`
  margin-top: 80px;
`;
