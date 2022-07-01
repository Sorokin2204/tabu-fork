import styled from 'styled-components';
import { css } from 'styled-components';
import { sizes } from '../../../../../../sizes';
export const CardWrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;
`;
export const Card = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  grid-template-columns: ${(props) => (props.type === 'cart' ? '29% 53% 18%' : props.type === 'favorite' ? '30% 42% 28%' : 'minmax(164px,25%) 42% auto')};

  max-width: 840px;
  padding: ${(props) => (props.type === 'cart' ? '24px 0' : '40px 0 32px 0')};

  @media (max-width: ${sizes.mobile}px) {
    display: grid;
    padding-bottom: 0px;
    border-bottom: 1px solid #e5e5e5;
    position: relative;
    max-width: none;
    padding: ${(props) => (props.type === 'cart' ? '24px' : '32px 25px 22px 25px')};
    width: auto;
    grid-template-columns: auto;
  }
`;

export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.type === 'cart' ? '0 16px 0 24px' : '0')};
`;

export const Profile = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  @media (max-width: ${sizes.mobile}px) {
    grid-column: 1/3;
    justify-content: space-between;
  }
`;

export const ProfileMobile = styled.div`
  display: flex;
  align-items: start;
`;
export const MobileClose = styled.div`
  @media (max-width: ${sizes.mobile}px) {
    margin-left: auto;
    ${(props) => (props.type === 'favorite' ? ' margin-bottom: 32px;' : 'margin-bottom: 0px;')};
  }
`;
export const MobileProfile = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
  justify-content: space-between;
`;

export const ProfileAvatar = styled.div`
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  border-radius: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ src }) => src || ''});
  background-position: center;
  background-position: 54% 48%;
  ${({ empty }) =>
    empty &&
    css`
      background-color: #f9f9f9;
      background-size: 75%;
    `}
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-left: 16px;
`;

export const ProfileName = styled.div`
  font-family: Gilroy;
  font-weight: 600;
  font-size: 12px;
  color: #191919;
`;

export const ProfileRole = styled.div`
  font-family: Mont;
  font-weight: 600;
  font-size: 12px;
  color: #717171;
  margin-top: 4px;
  white-space: nowrap;
`;

export const ProductImage = styled.div`
  margin-top: ${(props) => (props.type === 'cart' ? '24px' : '0')};
  width: 140px;
  height: 175px;
  background-image: url(${({ src }) => src || ''});
  background-size: cover;
  background-position: center;
  background-color: #f4f4f6;
  @media (max-width: ${sizes.mobile}px) {
    margin-top: 0px;
  }
`;

export const DescriptionCol = styled.div`
  display: grid;
  margin-top: ${(props) => (props.type === 'cart' ? '56px' : '0')};
  grid-template-columns: minmax(220px, 1fr) minmax(95px, auto);

  @media (max-width: ${sizes.mobile}px) {
    grid-column: 1/3;
    margin-top: ${(props) => (props.type === 'cart' ? '25px' : '0')};
    grid-template-columns: min-content auto;
  }
`;

export const DescBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-right: 18px;
  max-width: 190px;
  /* min-width: ${(props) => (props.type === 'cart' ? '0' : '300px')}; */
  @media (max-width: ${sizes.mobile}px) {
    margin-left: 14px;
    padding-right: 0px;
  }
`;

export const DescriptionTitle = styled.div`
  font-family: Gilroy;
  font-weight: 600;
  font-size: 14px;
  max-width: 250px;
  cursor: pointer;
  color: ${(props) => (props.type === 'favorite' ? '#025B37' : '#191919')};
  text-transform: uppercase;
`;

export const DescriptionText = styled.div`
  font-family: Mont;
  font-weight: 600;
  font-size: 12px;
  color: #191919;
  margin-top: 16px;
  @media (max-width: ${sizes.mobile}px) {
    margin-top: 12px;
  }
`;
export const Btns = styled.div`
  grid-column: 1/3;
  display: grid;
  margin-top: auto;
  grid-template-rows: 42px;
  grid-template-columns: 156px 156px;
  column-gap: 18px;
  @media (max-width: ${sizes.mobile}px) {
    margin-top: 20px;
  }
`;
export const SizeBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -45px;
  margin-right: auto;
  padding: 8px 16px;
  height: min-content;
  max-height: 75px;
  font-family: Mont;
  font-weight: 500;
  font-size: 14px;
  color: #717171;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  color: #717171;
`;

export const Size = styled.div`
  margin-top: 12px;

  font-family: Mont;
  font-weight: 600;
  font-size: 12px;
  color: #717171;
  height: auto;
  width: auto;
  @media (max-width: ${sizes.mobile}px) {
    max-width: 170px;
    margin-top: 16px;
  }
`;
export const OldPrice = styled.div`
  font-family: Gilroy;
  font-weight: 400;
  font-size: 12px;
  color: #ababab;
  text-decoration: line-through;
  white-space: nowrap;
`;
export const Price = styled.div`
  font-family: Gilroy;
  font-weight: 600;
  font-size: 12px;
  color: #191919;
  margin-right: 12px;
  margin-left: ${(props) => (props.type === 'favorite' ? '0' : 'auto')};
  white-space: nowrap;

  ${(props) =>
    props.type !== 'favorite' &&
    ` @media (max-width: 1300px) {
    margin: 0;
    margin-bottom: 4px;
  }`}
`;
export const PriceCol = styled.div`
  margin-top: ${(props) => (props.type === 'cart' ? '66px' : '0')};
  display: flex;
  align-items: center;
  margin-right: ${(props) => (props.type === 'favorite' ? '0' : '70px')};
  ${(props) =>
    props.type !== 'favorite' &&
    `@media (max-width: 1300px) {
    margin-right: 20px;
    margin-left: auto;
    flex-direction: column;
    width: min-content;
  }`}

  @media (max-width: ${sizes.mobile}px) {
    margin-top: 12px;
  }
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 35px;
  right: 14px;
  width: 10px;
  height: 10px;
  cursor: pointer;
  & svg {
    position: absolute;
  }
  /* mask-size: contain; */

  /* background-color: #717171; */
`;
