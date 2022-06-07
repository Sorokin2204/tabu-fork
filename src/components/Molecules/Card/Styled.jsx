import { sizes } from 'sizes';
import styled from 'styled-components';

export const StyledCard = styled.div`
  display: grid;
  position: relative;
  cursor: pointer;
  max-width: 360px;
  padding: ${({ padding }) => padding || ''};

  @media (max-width: 1110px) {
    grid-template-rows: 156px auto;
  }
`;

export const Details = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1110px) {
    margin-top: 8px;
  }
`;

export const ImageBlock = styled.div`
  display: grid;
  height: 300px;
  justify-items: center;
  /* padding-top: 25px; */
  background-image: url(${({ src }) => src || ''});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #f4f4f6;
  @media (max-width: ${sizes.mobile}px) {
    height: 156px;
    padding-top: 0px;
  }
`;

export const HoverImageBlock = styled.div`
  display: grid;
  height: 300px;
  justify-items: center;

  @media (max-width: ${sizes.mobile}px) {
    height: 150px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const FavoriteIcon = styled.div`
  display: grid;
  justify-self: end;
  position: absolute;
  z-index: 2;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const HoverFavoriteIcon = styled.button`
  display: grid;
  justify-self: end;
  position: absolute;
  z-index: 2;
  margin: 20px 20px 0 0;
  cursor: pointer;
  margin-top: 20px;
  background-color: transparent;
  border: none;
  outline: none;
`;
