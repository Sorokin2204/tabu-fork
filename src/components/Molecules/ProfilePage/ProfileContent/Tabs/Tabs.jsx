import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from 'redux/reducers/userReducer';
import * as S from './Styled';
import Tab from './Tab';

const Tabs = ({ tabs, style }) => {
  const [selected, setSelected] = useState(tabs[0]);
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.user.activeTab);
  return (
    <S.Wrapper>
      <S.Container>
        <S.Tabs style={style}>
          {tabs?.map((item, i) => (
            <Tab count={tabs?.length} key={i} onClick={() => dispatch(setActiveTab(item))} active={activeTab?.id === item?.id ? true : false}>
              {item?.name}
            </Tab>
          ))}
        </S.Tabs>
      </S.Container>
    </S.Wrapper>
  );
};

export default Tabs;
