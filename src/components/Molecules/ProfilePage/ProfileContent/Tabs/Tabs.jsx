import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as S from "./Styled";
import Tab from "./Tab";

const Tabs = () => {
  const [selected, setSelected] = useState("Экспертиза");
  const [items, setItems] = useState([
    { title: "Экспертиза" },
    { title: "Отправлено" },
    { title: "Доставлено" },
  ]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Tabs>
          {items?.map((item, i) => (
            <Tab
              key={i}
              onClick={() => setSelected(item?.title)}
              active={selected === item?.title ? true : false}
            >
              {item?.title}
            </Tab>
          ))}
        </S.Tabs>
      </S.Container>
    </S.Wrapper>
  );
};

export default Tabs;
