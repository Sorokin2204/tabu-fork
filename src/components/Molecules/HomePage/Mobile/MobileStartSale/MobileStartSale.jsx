import Button from 'components/Atoms/Button';
import { useDispatch } from 'react-redux';
import { setShowRequestModal } from 'redux/reducers/appReducer';
import * as S from './Styled';

const MobileStartSale = ({ onClick, title, text, btnText, img, style }) => {
  const dispatch = useDispatch();
  return (
    <S.Wrapper img={img} style={style}>
      <S.Title>{title}</S.Title>
      <S.Description>{text}</S.Description>
      <div>
        <Button onClick={() => onClick()} filled padding="14px 24px" margin="32px 0 0 0">
          {btnText}
        </Button>
      </div>
    </S.Wrapper>
  );
};

export default MobileStartSale;
