import ActionBlock from "../ActionBlock";
import Details from "./Details/Details";
import Expands from "./Expands/Expands";
import GeneralInformation from "./GeneralInformation/GeneralInformation";
import Seller from "./Seller/Seller";
import * as S from "./Styled";
import Warning from "./Warning/Warning";

const RightBlock = () => {
  return (
    <S.Container>
      <ActionBlock />
      <S.Line />
      <Seller />
      <GeneralInformation />
      <Details />
      <Expands />
      <Warning />
    </S.Container>
  );
};

export default RightBlock;
