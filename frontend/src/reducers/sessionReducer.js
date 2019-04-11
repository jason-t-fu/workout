
import { RECEIVE_USER_LOGOUT } from '../actions/sessionActions';

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    default:
      return state;
  }
};

export default sessionReducer;