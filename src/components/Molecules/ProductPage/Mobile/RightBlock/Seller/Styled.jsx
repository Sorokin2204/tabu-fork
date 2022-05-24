import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 56px;
`;

export const Title = styled.div`
  font-family: Gilroy;
  font-weight: 600;
  font-size: 16px;
  color: #191919;
  text-transform: uppercase;
`;

export const Bottom = styled.div`
  margin-top: 24px;

  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;

  background-image: url(${({ src }) => src || ''});
  background-size: cover;
  background-position: center;
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
  padding: 16px 28px;
  display: flex;
  align-items: center;
  background-color: #f9f9f9;

  font-family: Mont;
  font-size: 12px;
  font-weight: 600;
  color: #191919;
  border-radius: 8px;
  margin-top: 28px;
  max-width: 267px;
`;

export const DetailsContainer = styled.div``;
