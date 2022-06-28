import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 56px;
`;

export const Title = styled.div`
  text-transform: uppercase;
  font-family: Gilroy;
  font-weight: 600;
  font-size: 16px;
  color: #191919;
  margin-bottom: 38px;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;

  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ src }) => src || ''});
  background-position: center;

  ${({ empty }) =>
    empty &&
    css`
      background-color: #f9f9f9;
      background-size: 75%;
    `}
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

export const Name = styled.div`
  font-family: Gilroy;
  font-size: 18px;
  font-weight: 600;
  color: #191919;
`;

export const Role = styled.div`
  margin-top: 6px;
  font-family: Mont;
  font-size: 12px;
  font-weight: 600;
  color: #717171;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
`;

export const LocationIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const LocationName = styled.div`
  margin-left: 4px;
  font-family: Mont;
  font-size: 12px;
  font-weight: 600;
  color: #717171;
`;

export const Comment = styled.div`
  padding: 16px 32px;
  display: flex;
  align-items: center;
  background-color: #f9f9f9;

  font-family: Mont;
  font-size: 12px;
  font-weight: 600;
  color: #191919;
  border-radius: 8px;
`;

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 36px;
`;
