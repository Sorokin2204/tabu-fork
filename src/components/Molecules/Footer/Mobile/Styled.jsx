import styled from 'styled-components';

export const StyledMobileFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 0 48px 0;
  background: #00331e;
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  flex-direction: row;
  padding: 27px 25px;
`;
export const CategoryName = styled.div`
  font-family: Mont;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`;
export const CategoryExpand = styled.div``;

export const SocialNets = styled.div`
  display: flex;
  width: 100%;
  margin-top: 31px;
  justify-content: center;
  align-items: center;
`;
export const Net = styled.div`
  margin-left: 33.3px;
  display: flex;
  align-items: center;

  &:nth-child(1) {
    margin-left: 0;
  }
`;
export const Rules = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 39px;
`;

export const Rule = styled.a`
  font-size: 12px;
  font-family: 'Manrope';
  font-weight: 400;
  color: #d1d1d1;
  border-bottom: 1px solid #d1d1d1;
  margin-top: 6px;
  cursor: pointer;

  &:nth-child(1) {
    margin-top: 0;
  }
`;

export const Copyright = styled.div`
  color: #d1d1d1;
  font-size: 12px;
  font-family: Manrope;
  font-weight: 400;
  text-align: center;
  margin-top: 32px;
`;
