import { useIsMobile } from 'hooks/useIsMobile';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useRoutes } from 'react-router-dom';
import { auth, getFavorites, getUser } from 'redux/actions/user';
import { setIsMobile } from 'redux/reducers/appReducer';
import './App.css';
import routes from './routes/routes';

function App() {
  const dispatch = useDispatch();
  const { isAuth, isAuthLoading, isAuthError, isAuthSuccess, currentUser } = useSelector((state) => state.user);
  const isDisableScroll = useSelector((state) => state.app.isDisableScroll);
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const routing = useRoutes(routes(isAuth, isMobile));

  useEffect(() => {
    dispatch(setIsMobile(isMobile));
  }, [isMobile]);

  useEffect(() => {
    console.log();
    if (isDisableScroll) {
      window.document.body.classList.add('no-scroll');
    } else {
      window.document.body.classList.remove('no-scroll');
    }
  }, [isDisableScroll]);

  useEffect(() => {
    dispatch(auth());
    dispatch(getUser());
  }, []);

  return <>{!isAuthLoading && (isAuthError || isAuthSuccess) && routing}</>;
}

export default App;
