import Flex from "components/Atoms/Flex";
import React from "react";
import Favorite from "assets/svg/favorite.svg";
import Text from "components/Atoms/Text";

const AddFavoriteBtn = () => {
  return (
    <Flex direction="row" margin="32px 0 0 0" cursor="pointer">
      <img src={Favorite} />
      <Text
        margin="0 0 0 11px"
        color="#191919"
        fontFamily="Gilroy"
        fontWeight="400"
        fonrSize="14px"
        cursor="pointer"
      >
        Добавить в избранное
      </Text>
    </Flex>
  );
};

export default AddFavoriteBtn;
