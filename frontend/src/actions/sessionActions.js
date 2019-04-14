
import * as SessionApiUtil from '../util/sessionApiUtil';
import jwt_decode from 'jwt-decode';

export const RECEIVE_USER_LOGOUT = 'RECEIVE_USER_LOGOUT';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER_SIGN_IN = 'RECEIVE_USER_SIGN_IN';

const receiveSessionErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveUserSignIn = () => {
  return {
    type: RECEIVE_USER_SIGN_IN
  };
};

export const logoutUser = () => {
  return {
    type: RECEIVE_USER_LOGOUT
  };
};

export const signup = user => {
  return dispatch => {
    SessionApiUtil.signup(user)
      .then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        SessionApiUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        return dispatch(receiveCurrentUser(decoded));
      })
      .catch(error => {
        return dispatch(receiveSessionErrors(error.response.data));
      });
  };
};

export const login = user => {
  return dispatch => {
    SessionApiUtil.login(user)
      .then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        SessionApiUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        return dispatch(receiveCurrentUser(decoded));
      })
      .catch(error => {
        return dispatch(receiveSessionErrors(error.response.data));
      });
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    SessionApiUtil.setAuthToken(false);
    return dispatch(logoutUser());
  };
};