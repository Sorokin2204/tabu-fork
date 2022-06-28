import styled from 'styled-components';

export const PhotoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  @media (max-width: 1110px) {
    order: 2;
  }
`;
export const PhotoInfo = styled.div`
  padding: 14px 13px 14px 9px;
  background: #f9f9f9;
  display: flex;
  margin-top: 13px;
  width: 400px;
`;
export const IconInfo = styled.img`
  width: 17px;
  height: 17px;
  margin-right: 9px;
`;
export const TextInfo = styled.div`
  display: inline;
  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  align-items: center;

  /* Tabu/Black */

  color: #191919;
`;
export const LinkInfo = styled.div`
  display: inline;
  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  text-decoration: underline;
  /* Tabu/Black */
  color: #025b37;
  cursor: pointer;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

export const SectionInner = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
`;

export const MainText = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  /* identical to box height, or 16px */

  color: ${(props) => (props.error ? '#D51313' : '#000000')};
`;

export const SubTitleBlock = styled.div`
  width: 100%;
  display: flex;
  margin-top: 56px;
  @media (max-width: 1110px) {
    margin-top: 40px;
  }
`;

export const Sections = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleSection = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */

  text-transform: uppercase;

  color: #000000;
  width: 50%;
  display: flex;
  justify-content: start;

  &:nth-child(2) {
    margin-left: 20px;
  }
`;

export const TitleBlock = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  text-transform: uppercase;

  /* Tabu/Black */

  color: #191919;
`;
