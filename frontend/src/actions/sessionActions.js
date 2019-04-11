
import * as ApiUtil from '../util/sessionApiUtil';
import jwt_decode from 'jwt-decode';

export const RECEIVE_USER_LOGOUT = 'RECEIVE_USER_LOGOUT';

export const logoutUser = () => {
  return {
    type: RECEIVE_USER_LOGOUT
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    ApiUtil.setAuthToken(false);
    return dispatch(logoutUser());
  };
};