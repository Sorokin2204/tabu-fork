import Expand from "./Expand/Expand";
import * as S from "./Styled";
import Delivery from "assets/svg/product/Delivery.svg";
import Truck from "assets/svg/product/Truck.svg";
import Safety from "assets/svg/product/Safety.svg";
import Mail from "assets/svg/product/Delivery.svg";

const Expands = () => {
  return (
    <S.Container>
      <S.Expands>
        <Expand Icon={Delivery} Name="Контроль качества" />
        <Expand Icon={Truck} Name="Доставка и возврат" />
        <Expand Icon={Safety} Name="Безопасная сделка" />
        <Expand Icon={Mail} Name="Помощь и поддержка" />
      </S.Expands>
    </S.Container>
  );
};

export default Expands;
