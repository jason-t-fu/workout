import { RECEIVE_EXERCISES, RECEIVE_EXERCISE, RECEIVE_NEW_EXERCISE, REMOVE_EXERCISE } from "../actions/exerciseActions";

const _nullExercise = {
  all: {},
  user: {},
  new: undefined
};

const ExercisesReducer = (state = _nullExercise, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_EXERCISES:
      newState.all = action.exercises.data;
      return newState;
    case RECEIVE_EXERCISE:
      newState.user = action.exercise.data;
      return newState;
    case RECEIVE_NEW_EXERCISE:
      newState.new = action.exercise.data;
      return newState;
    case REMOVE_EXERCISE:    
    default:
      return state;
  }
};

export default ExercisesReducer;