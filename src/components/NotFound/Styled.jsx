import styled from 'styled-components';
export const Wrapper = styled.div``;
export const Inner = styled.div`
  margin: 0 auto;
  padding: 200px 56px 230px 56px;
  max-width: 1040px;
  display: grid;
  grid-template-columns: auto 400px;
`;
export const Logo = styled.img`
  display: block;
  margin-bottom: 50px;
  width: 200px;
  max-height: 30px;
  height: auto;
  object-fit: cover;
  transform: scale(140%);
`;
export const Left = styled.div`
  margin-top: 60px;
`;
export const Right = styled.div``;
export const Title = styled.div`
  font-family: 'Mont';
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 32px;
  margin-bottom: 24px;
  /* identical to box height, or 94% */

  color: #191919;
`;
export const Desc = styled.div`
  font-family: 'Mont';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 88px;
  /* identical to box height, or 178% */

  color: #717171;
`;
export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: rgba(250, 250, 250, 0.5);
  box-shadow: inset 0px -59.3575px 59.3575px rgba(182, 182, 182, 0.15), inset 0px 59.3575px 59.3575px rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(23.743px);
`;
export const CodeError = styled.div`
  height: min-content;
  font-family: 'Mont';
  font-style: normal;
  font-weight: 600;
  font-size: 132px;
  line-height: 140%;
  /* identical to box height, or 185px */

  color: #191919;
`;
