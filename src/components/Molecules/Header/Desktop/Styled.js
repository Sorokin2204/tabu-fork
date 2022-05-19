import styled, { css } from 'styled-components';

export const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
  height: 80px;
  padding: 0 56px;
  background-color: #ffffff;
  color: #000000;
`;

export const Categories = styled.div`
  display: flex;
  align-items: center;
`;

export const Category = styled.div`
  font-family: 'Mont';
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  margin-left: 24px;
  cursor: pointer;
  color: #717171;

  &:nth-child(1) {
    margin-left: 0;
  }

  ${(props) =>
    props.active &&
    css`
      color: #191919;
      font-weight: 700;
    `}
`;

export const Logo = styled.div`
  display: grid;
  justify-self: center;
  align-content: center;

  cursor: pointer;
  font-family: Gilroy;
  font-weight: 600;
  font-size: 40px;

  color: #000000;
`;

export const UserBlock = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: end;
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  margin-left: 37px;
  cursor: pointer;
  position: relative;
  height: 40px;
  width: 40px;
  z-index: 100;
`;

export const Favorite = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  cursor: pointer;
  z-index: 100;
  margin-right: -104px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 34.31px;
  font-family: 'Mont';
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
`;

export const OpenedProfileWrapper = styled.div`
  position: relative;
  width: 254px;
  margin-left: 16px;
`;

export const OpenedProfile = styled.div`
  position: absolute;
  top: -28px;
  width: 254px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  z-index: 99;
`;

export const ProfileBlock = styled.div`
  position: relative;
  display: flex;
`;

export const CartNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 14px;
  height: 14px;

  color: #fff;
  background: #191919;
  font-size: 8px;
  font-weight: 700;
  font-family: 'Mont';

  position: absolute;
  right: 14px;
  top: 1px;

  border-radius: 50%;
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9;
  bottom: 0;
  left: 0;
  height: 400px;
  background: #191919;
  opacity: 0.8;
`;
