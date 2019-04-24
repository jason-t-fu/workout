import { setAuthToken } from './sessionApiUtil';
import jwt_decode from 'jwt-decode';
import { logout } from '../actions/sessionActions';
import configureStore from '../store/store';

const setCurrentUser = () => {
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { user: decodedUser } };

    const store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;
    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }

    return store;
  }
  else {
    return configureStore();
  }
};

export default setCurrentUser;