import { RECEIVE_CURRENT_USER,
         RECEIVE_USER_LOGOUT,
         RECEIVE_USER_SIGN_IN } from '../actions/sessionActions';

const _initialState = {
  isAuthenticated: false,
  user: {}
};

const sessionApiReducer = (state = _initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };
    case RECEIVE_USER_LOGOUT:
      return _initialState;
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isSignedIn: true
      };
    default:
      return state;
  }
};