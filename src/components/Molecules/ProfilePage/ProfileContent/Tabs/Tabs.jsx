import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from './Styled';
import Tab from './Tab';

const Tabs = ({ tabs }) => {
  const [selected, setSelected] = useState(tabs[0]);
  // const [items, setItems] = useState([{ title: 'Экспертиза' }, { title: 'Отправлено' }, { title: 'Доставлено' }]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Tabs>
          {tabs?.map((item, i) => (
            <Tab key={i} onClick={() => setSelected(item)} active={selected.slug === item?.slug ? true : false}>
              {item?.name}
            </Tab>
          ))}
        </S.Tabs>
      </S.Container>
    </S.Wrapper>
  );
};

export default Tabs;
