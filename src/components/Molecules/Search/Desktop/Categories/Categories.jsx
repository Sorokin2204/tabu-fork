import { Interweave } from 'interweave';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchReset, setShowSearch } from 'redux/reducers/searchReducer';
import * as S from './Styled';

const Categories = () => {
  const searchCategories = useSelector((state) => state.search.searchCategories);
  const searchText = useSelector((state) => state.search.searchText);
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Container>
        {searchCategories && searchText && searchCategories.length !== 0 ? (
          searchCategories.map((searchCat) => {
            const regex = new RegExp(searchText, 'gi');
            const title = searchCat?.title.replace(regex, function (a, b) {
              return '<span>' + a + '</span>';
            });
            return (
              <S.Category
                onClick={() => {
                  dispatch(searchReset(false));
                  navigate(`/categories/${searchCat?.title}`);
                }}>
                <Interweave tagName="div" content={title} />
              </S.Category>
            );
          })
        ) : (
          <S.NotFound>{searchText && 'Ничего не найдено'}</S.NotFound>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default Categories;
