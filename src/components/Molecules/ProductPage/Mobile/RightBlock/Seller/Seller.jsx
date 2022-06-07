import ActionBlock from 'components/Molecules/ProductPage/Desktop/ActionBlock';
import { URL } from 'config';
import { useSelector } from 'react-redux';
import * as S from './Styled';

const Seller = (props) => {
  const openedProduct = useSelector((state) => state.product.openedProduct);

  const returnRole = (role) => {
    if (role === 0) {
      return 'Частный продавец';
    }
    if (role === 1) {
      return 'Компания';
    }
  };

  return (
    <S.Container {...props}>
      <S.Title>Продавец</S.Title>
      <S.DetailsContainer>
        <S.Bottom>
          <S.Avatar src={URL + openedProduct?.seller?.avatar} />
          <S.Details>
            <S.Name>{openedProduct?.seller?.fio ? openedProduct?.seller?.fio : openedProduct?.seller?.company_name}</S.Name>
            <S.Role>{openedProduct ? (openedProduct.seller ? returnRole(openedProduct.seller.user_type) : '') : ''}</S.Role>
            <S.Location>
              <S.LocationIcon>
                <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width={12} height={12} fill="white" />
                  <path d="M9.5 4.5C9.5 7.76142 6 11 6 11C6 11 2.5 7.76142 2.5 4.5C2.5 2.23858 4.067 1 6 1C7.933 1 9.5 2.25 9.5 4.5Z" stroke="#717171" strokeLinecap="round" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M6 3C6.82843 3 7.5 3.67157 7.5 4.5C7.5 5.32843 6.82843 6 6 6C5.17157 6 4.5 5.32843 4.5 4.5C4.5 3.67157 5.17157 3 6 3Z" stroke="#717171" strokeLinecap="round" />
                </svg>
              </S.LocationIcon>
              <S.LocationName>{`${openedProduct?.region}, ${openedProduct?.city}`}</S.LocationName>
            </S.Location>
          </S.Details>
        </S.Bottom>
        <S.Comment>{openedProduct?.comment}</S.Comment>
      </S.DetailsContainer>
    </S.Container>
  );
};

export default Seller;
