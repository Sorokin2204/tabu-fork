import Flex from 'components/Atoms/Flex';
import React from 'react';
import Favorite from 'assets/svg/favorite.svg';
import Text from 'components/Atoms/Text';

const AddFavoriteBtn = ({ button }) => {
  return (
    <Flex
      direction="row"
      margin="32px 0 0 0"
      cursor="pointer"
      style={{
        ...(button && {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #E5E5E5',
          padding: '17px',
        }),
      }}>
      <img
        src={Favorite}
        style={{
          ...(button && {
            width: '18px',
            height: '16px',
          }),
        }}
      />
      <Text
        margin="0 0 0 11px"
        color="#191919"
        fontFamily="Gilroy"
        fontWeight="400"
        fonrSize="14px"
        cursor="pointer"
        style={{
          textTransform: 'uppercase',
          ...(button && {
            fontSize: '14px',
          }),
        }}>
        Добавить в избранное
      </Text>
    </Flex>
  );
};

export default AddFavoriteBtn;
