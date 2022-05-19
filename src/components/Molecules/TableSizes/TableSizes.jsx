import ImageBlock from 'components/Atoms/ImageBlock';
import { useDispatch, useSelector } from 'react-redux';
import { setShowSizesModal } from 'redux/reducers/appReducer';
import * as S from './Styled';
import Image from 'assets/img/sizesTable.png';
import { useEffect, useState } from 'react';
import { sizes } from '../../../sizes';

const TableSizes = (props) => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.app.isMobile);

  const onClose = () => {
    dispatch(setShowSizesModal(false));
  };

  return (
    <S.Container {...props}>
      <S.Block>
        <S.Left>
          {isMobile && (
            <S.CloseMobile onClick={onClose}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.2933 5.2943C15.456 5.13158 15.456 4.86777 15.2933 4.70505C15.1306 4.54233 14.8668 4.54233 14.7041 4.70505L9.9987 9.41042L5.29333 4.70505C5.13061 4.54233 4.86679 4.54233 4.70407 4.70505C4.54135 4.86777 4.54135 5.13158 4.70407 5.2943L9.40944 9.99967L4.70407 14.705C4.54135 14.8678 4.54135 15.1316 4.70407 15.2943C4.86679 15.457 5.13061 15.457 5.29333 15.2943L9.9987 10.5889L14.7041 15.2943C14.8668 15.457 15.1306 15.457 15.2933 15.2943C15.456 15.1316 15.456 14.8678 15.2933 14.705L10.588 9.99967L15.2933 5.2943Z"
                  fill="#717171"
                />
              </svg>
            </S.CloseMobile>
          )}
          {!isMobile && <S.Title>Таблица размеров</S.Title>}
          <S.ImageContainer>
            <ImageBlock src={Image} />
          </S.ImageContainer>
        </S.Left>
        {!isMobile && (
          <S.Close onClick={onClose}>
            <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.4701 8.47108C24.7305 8.21073 24.7305 7.78862 24.4701 7.52827C24.2098 7.26792 23.7876 7.26792 23.5273 7.52827L15.9987 15.0569L8.4701 7.52827C8.20975 7.26792 7.78764 7.26792 7.52729 7.52827C7.26694 7.78862 7.26694 8.21073 7.52729 8.47108L15.0559 15.9997L7.52729 23.5283C7.26694 23.7886 7.26694 24.2107 7.52729 24.4711C7.78764 24.7314 8.20975 24.7314 8.4701 24.4711L15.9987 16.9425L23.5273 24.4711C23.7876 24.7314 24.2098 24.7314 24.4701 24.4711C24.7305 24.2107 24.7305 23.7886 24.4701 23.5283L16.9415 15.9997L24.4701 8.47108Z"
                fill="white"
              />
            </svg>
          </S.Close>
        )}
      </S.Block>
    </S.Container>
  );
};

export default TableSizes;
