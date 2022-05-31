import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCategories, setActiveCategory } from 'redux/reducers/searchReducer';
import * as S from './Styled';
import Tab from './Tab';

const Tabs = () => {
  // const [selected, setSelected] = useState();
  const categories = useSelector((state) => state.categories.categories);
  const activeCategory = useSelector((state) => state.search.activeCategory);
  const searchText = useSelector((state) => state.search.searchText);
  const dispatch = useDispatch();
  useEffect(() => {
    if (categories && categories?.length !== 0) {
      dispatch(setActiveCategory(categories[0]?.id));
    }
  }, [categories]);

  useEffect(() => {
    if (activeCategory && searchText) {
      const subCategories = categories.find((cat) => cat.id === activeCategory)?.children;
      dispatch(searchCategories({ searchText, subCategories }));
    }
  }, [searchText, activeCategory]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Tabs>
          {categories &&
            categories?.map((category, i) => (
              <Tab key={i} onClick={() => dispatch(setActiveCategory(category?.id))} active={activeCategory === category?.id ? true : false}>
                {category?.title}
              </Tab>
            ))}
        </S.Tabs>
      </S.Container>
    </S.Wrapper>
  );
};

export default Tabs;
