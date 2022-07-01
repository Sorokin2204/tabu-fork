import { store } from 'redux/reducers';
import { logout } from 'redux/reducers/userReducer';
import { createBrowserHistory } from 'history';
import { getFavoriteProductsSuccess, getFavoritesSuccess } from 'redux/reducers/productReducer';
import { getFavorites } from 'redux/actions/user';

const history = createBrowserHistory({ window });
export const authError = (error) => {
  const rep = error?.response;
  if (rep?.status == 401) {
    store.dispatch(getFavoritesSuccess([]));
    store.dispatch(logout());
    console.log('RELOAD');
    // history.go(0);
    return;
  }
  return;
};
