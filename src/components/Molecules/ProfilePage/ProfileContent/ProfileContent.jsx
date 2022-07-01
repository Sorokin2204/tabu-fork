import Loading from 'components/Loading/Loading';
import Pagination from 'components/Pagination/Pagination';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProfileProducts from '../ProfileProducts/ProfileProducts';
import * as S from './Styled';
import Tab from './Tabs/Tab';
import Tabs from './Tabs/Tabs';

const ProfileContent = ({ loading, tabs, title, wishlist, products, type, currentPage, productsCount, onPageClick }) => {
  const isMobile = useSelector((state) => state.app.isMobile);
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      {isMobile && (
        <S.Back onClick={() => navigate('/profile')}>
          <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.33203 6L0.978478 5.64645L0.624924 6L0.978478 6.35355L1.33203 6ZM13.832 6.5C14.1082 6.5 14.332 6.27614 14.332 6C14.332 5.72386 14.1082 5.5 13.832 5.5V6.5ZM5.97848 0.646447L0.978478 5.64645L1.68558 6.35355L6.68558 1.35355L5.97848 0.646447ZM0.978478 6.35355L5.97848 11.3536L6.68558 10.6464L1.68558 5.64645L0.978478 6.35355ZM1.33203 6.5H13.832V5.5H1.33203V6.5Z"
              fill="#717171"
            />
          </svg>
          Назад
        </S.Back>
      )}

      {(isMobile || wishlist) && <S.Title wishlist={wishlist}>{title}</S.Title>}
      {tabs && tabs?.length !== 0 && <Tabs tabs={tabs} style={{ maxWidth: `calc(100% + ${(tabs.length - 1) * 40}px)` }} />}
      {loading && products?.length === 0 ? <Loading relative /> : <ProfileProducts products={products} type={type} />}
      {!loading && products?.length !== 0 && productsCount && (
        <Pagination
          currentPage={currentPage}
          pages={Math.ceil(productsCount / 4)}
          onPageClick={(val) => {
            onPageClick(val);
          }}
        />
      )}
    </S.Wrapper>
  );
};

export default ProfileContent;
