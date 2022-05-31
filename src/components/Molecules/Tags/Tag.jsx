import Text from 'components/Atoms/Text';
import * as S from './Styled';
import Close from 'assets/svg/close.svg';

const Tag = (props) => {
  return (
    <S.Tag onClick={props.onClick}>
      <Text
        fontFamily="Gilroy"
        fontWeight="400"
        fontSize="14px"
        color="#000000"
        style={{
          userSelect: 'none',
          cursor: 'pointer',
        }}>
        {props.name}
      </Text>
      <S.CloseBtn src={Close} />
    </S.Tag>
  );
};

export default Tag;
