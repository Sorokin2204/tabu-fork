import styled from "styled-components";
import Grid from "../../../Atoms/Grid";
import Steps from "../../../Atoms/Steps";
import Tab from "../../../Atoms/Tab";
import Text from "../../../Atoms/Text";
import { useState } from "react";

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 41px;
`;

const HowWorks = () => {
  const [activeTab, setActiveTab] = useState("customers");

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
            КАК РАБОТАЕТ СЕРВИС?
          </Text>
          <Tabs>
            <Tab
              active={activeTab === "customers" && true}
              onClick={() => setActiveTab("customers")}
            >
              Для покупателей
            </Tab>
            <Tab
              active={activeTab === "sellers" && true}
              onClick={() => setActiveTab("sellers")}
            >
              Для продавцов
            </Tab>
          </Tabs>
          <Steps activeTab={activeTab} />
        </Grid>
      </Grid>
    </div>
  );
};

export default HowWorks;
