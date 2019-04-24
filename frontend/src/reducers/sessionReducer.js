import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT
} from '../actions/sessionActions';

const _nullUser = {
  user: undefined
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        user: action.currentUser
      };
    case RECEIVE_USER_LOGOUT:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;