import styled from 'styled-components';
import { media } from '../../../sizes';

export const BreadCrumbs = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Mont';
  font-size: 14px;
  font-weight: 500;
  color: #ababab;

  @media ${media.mobile} {
    font-size: 12px;
    margin-top: 8px;
  }
`;
export const ActiveCrumb = styled.div`
  color: #717171;
  margin-left: 4px;
`;
