
import * as ExercisesApiUtil from '../util/exerciseApiUtil';

export const RECEIVE_EXERCISES = "RECEIVE_EXERCISES";
export const RECEIVE_EXERCISE = "RECEIVE_EXERCISE";
export const RECEIVE_NEW_EXERCISE = "RECEIVE_NEW_EXERCISE";
export const REMOVE_EXERCISE = "REMOVE_EXERCISE";

export const receiveExercises = exercises => {
  return {
    type: RECEIVE_EXERCISES,
    exercises
  };
};

export const receiveExercise = exercise => {
  return {
    type: RECEIVE_EXERCISE,
    exercise
  };
};

export const receiveNewExercise = exercise => {
  return {
    type: RECEIVE_NEW_EXERCISE,
    exercise
  };
};

export const removeExercise = () => {
  return {
    type: REMOVE_EXERCISE
  };
};

export const fetchExercises = () => {
  return dispatch => {
    return ExercisesApiUtil.fetchExercises()
      .then(res => dispatch(receiveExercises(res)))
      .catch(err => console.log(err));
  };
};

export const fetchExercise = exrciseId => {
  return dispatch => {
    return ExercisesApiUtil.fetchExercise(exrciseId)
      .then(res => dispatch(receiveExercise(res)))
      .catch(err => console.log(err));
  };
};

export const createExercise = data => {
  return dispatch => {
    return ExercisesApiUtil.createExercise(data)
      .then(res => dispatch(receiveNewExercise(res)))
      .catch(err => console.log(err));
  };
};

export const deleteExercise = exerciseId => {
  return dispatch => {
    return ExercisesApiUtil.deleteExercise(exerciseId)
      .then(() => dispatch(removeExercise()))
      .catch(err => console.log(err));
  };
};
