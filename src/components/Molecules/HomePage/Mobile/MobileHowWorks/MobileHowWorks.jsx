import * as S from './Styled'
import Text from "../../../../Atoms/Text";
import Tab from "../../../../Atoms/Tab";
import StepsMobile from "../../../../Atoms/StepsMobile";

const MobileHowWorks = () => {
    return (
        <S.Wrapper>
            <Text
                color="#191919"
                fontFamily="Gilroy"
                fontWeight="400"
                fontSize="20px"
                textAlign="center"
            >
                КАК РАБОТАЕТ СЕРВИС?
            </Text>
            <S.Tabs>
                <Tab active>Для покупателей</Tab>
                <Tab>Для продавцов</Tab>
            </S.Tabs>
            <StepsMobile/>
        </S.Wrapper>
    );
};

export default MobileHowWorks;