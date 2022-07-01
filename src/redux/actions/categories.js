import axios from 'axios';
import { API_URL } from 'config';
import { setCategories, setMainCategory, setPageCategory, setPageCategoryError, setPageCategoryLoading } from 'redux/reducers/categoriesReducer';

export const getCategories = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/products/category/?format=json`);
      dispatch(setCategories(response.data));
      dispatch(setMainCategory(response.data[0]));
    } catch (e) {
      console.log(e);
    }
  };
};

export const findCategoryLocal = (id, list, withChildren) => {
  let cat = '';
  list.map(({ children: childrenOne, ...oneOther }) => {
    childrenOne?.map(({ children: childrenTwo, ...twoOther }) => {
      if (twoOther.id === id) {
        cat = { ...twoOther, children: childrenTwo, oneParent: oneOther };
      }
      childrenTwo?.map((threeItem) => {
        if (threeItem.id === id) {
          cat = { ...threeItem, oneParent: { ...(withChildren && { children: childrenOne }), ...oneOther }, twoParent: { ...(withChildren && { children: childrenTwo }), ...twoOther } };
        }
      });
    });
  });
  return cat;
};

export const getCategoryBySlug = (slug) => {
  return async (dispatch, getState) => {
    try {
      const {
        categories: { categories, main_category },
      } = getState();
      dispatch(setPageCategoryLoading(true));

      axios
        .get(`${API_URL}/products/category/${slug}`)
        .then((response) => {
          const findCat = findCategoryLocal(response.data.id, categories);
          if (findCat) {
            dispatch(setPageCategory(findCat));
          } else {
            dispatch(setPageCategory({ title: 'Бренды', slug: main_category.slug, children: [], oneParent: { title: main_category.title } }));
            // dispatch(setPageCategoryError({ status: 400, message: 'Непредвиденная ошибка' }));
          }
        })
        .catch((error) => {
          console.log(error?.message);
          if (error?.response?.status === 404) {
            dispatch(setPageCategoryError({ status: 404, message: 'Категория не найдена' }));
          } else {
            dispatch(setPageCategoryError({ status: 400, message: 'Непредвиденная ошибка' }));
          }
        });
    } catch (e) {
      if (e?.response?.status === 404) {
        dispatch(setPageCategoryError({ status: 404, message: 'Категория не найдена' }));
      } else {
        dispatch(setPageCategoryError({ status: 400, message: 'Непредвиденная ошибка' }));
      }
    }
  };
};
