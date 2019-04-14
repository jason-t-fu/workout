
import { connect } from 'react-redux';
import { fetchExercises } from '../../actions/exerciseActions';

import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import ExerciseItem from './exerciseItem';

const Exercise = props => {
  const [exercises, setExercises] = useState(props.exercises);

  useEffect(() => {
    props.fetchTweets();
  }, []);

  useEffect(() => {
    if (props.exercises !== exercises) {
      setExercises(props.exercises);
    }
  });

  if (loading) return null;
  if (!exercises.length) {
    return (
      <div>
        No exercises!
      </div>
    )
  }
  else {
    return (
      <div>
        <h2>All Exercises</h2>
        {exercises.map(exercise => {
          return <ExerciseItem key={exercise._id} exercise={exercise} />
        })}
      </div>
    )
  }
};


const mapStateToProps = state => {
  return {
    exercises: Object.values(state.exercises.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchExercises: () => dispatch(fetchExercises())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Exercise));