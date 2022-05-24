import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from './Styled';
import Tab from './Tab';

const Tabs = () => {
  const [selected, setSelected] = useState();
  const categories = useSelector((state) => state.categories.categories);
  console.log(categories);
  return (
    <S.Wrapper>
      <S.Container>
        <S.Tabs>
          {categories &&
            categories?.map((category, i) => (
              <Tab key={i} onClick={() => setSelected(category?.title)} active={selected === category?.title ? true : false}>
                {category?.title}
              </Tab>
            ))}
        </S.Tabs>
      </S.Container>
    </S.Wrapper>
  );
};

export default Tabs;
