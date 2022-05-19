import styled from "styled-components";
import Grid from "../../../Atoms/Grid";
import StepsVip from "../../../Atoms/StepsVip";
import Tab from "../../../Atoms/Tab";
import Text from "../../../Atoms/Text";
import { useState } from "react";

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 41px;
`;

const HowWorksVip = () => {
  const [activeTab, setActiveTab] = useState("sellers");

  return (
    <div>
      <Grid padding="64px 169px">
        <Grid alignSelf="center">
          <Text
            color="#191919"
            fontFamily="Gilroy"
            fontWeight="400"
            fontSize="32px"
            textAlign="center"
          >
            Как работает VIP сервис?
          </Text>
          <Tabs>
            <Tab active={true}>Для продавцов</Tab>
          </Tabs>
          <StepsVip />
        </Grid>
      </Grid>
    </div>
  );
};

export default HowWorksVip;
