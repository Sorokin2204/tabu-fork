import styled from 'styled-components';
import { css } from 'styled-components';
import { sizes } from '../../../../../../sizes';

export const Card = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  grid-template-columns: 29% 53% 18%;
  border-bottom: 1px solid #e5e5e5;
  padding: 24px 0;

  ${(props) =>
    props.profile &&
    css`
      padding: 40px 0;
    `}

  @media (max-width: ${sizes.mobile}px) {
    display: grid;
    padding-bottom: 0px;
    position: relative;
    width: calc(100% - 48px);
    padding: 24px;
    width: calc(100% - 48px);
    grid-template-columns: auto;
  }
`;

export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 24px;
  padding-left: 16px;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  @media (max-width: ${sizes.mobile}px) {
    justify-content: space-between;
  }
`;

export const ProfileMobile = styled.div`
  display: flex;
  align-items: start;
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
  background-image: url(${({ src }) => src || ''});
  background-size: cover;
  background-position: center;
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
  margin-top: 24px;
  width: 140px;
  height: 175px;
  background-image: url(${({ src }) => src || ''});
  background-size: cover;
  background-position: center;

  @media (max-width: ${sizes.mobile}px) {
    margin-top: 0px;
  }
`;

export const DescriptionCol = styled.div`
  display: grid;
  margin-top: 56px;
  grid-template-columns: 1fr 32%;

  @media (max-width: ${sizes.mobile}px) {
    margin-top: 25px;
    grid-template-columns: min-content 154px;
  }
`;

export const DescBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 24px;
  @media (max-width: ${sizes.mobile}px) {
    margin-left: 14px;
    padding-right: 0px;
  }
`;

export const DescriptionTitle = styled.div`
  font-family: Gilroy;
  font-weight: 600;
  font-size: 14px;
  color: #191919;
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

export const SizeBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: auto;
  padding: 0px 20px;
  height: 37px;

  font-family: Mont;
  font-weight: 600;
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
    margin-top: 16px;
  }
`;

export const PriceCol = styled.div`
  margin-top: 66px;
  font-family: Gilroy;
  font-weight: 600;
  font-size: 12px;
  color: #191919;

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
