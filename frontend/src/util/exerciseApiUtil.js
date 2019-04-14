
import axios from 'axios';

export const fetchExercises = () => {
  return axios.get('/api/exercises');
};

export const fetchExercise = id => {
  return axios.get(`/api/exercises/${id}`);
};

export const createExercise = data => {
  return axios.post('/api/exercises', data);
};

export const deleteExercise = id => {
  return axios.delete(`/api/exercises/${id}`);
};