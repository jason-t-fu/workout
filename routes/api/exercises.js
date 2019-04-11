
const express = require('express');

const passport = require('passport');

const Exercise = require('../../models/Exercise');
const validateExerciseInput = require('../../validation/exercises');

router.get('/', (req, res) => {
  Exercise.find()
    .sort({ date: -1 })
    .then(exercises => res.json(exercises))
    .catch(() => res.status(404).json({ noexerisesfound: 'No exercises Found' }))
});

router.get('/:id', (req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(() => res.status(404).json({ noexercisefound: 'No exercise found with that ID' }));
});

router.post('/', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateExerciseInput(req.body);

    if (!isValid) return res.status(400).json(errors);

    const newExercise = new Exercise({
      name: req.body.name,
      user: req.user.id
    });

    newExercise.save().then(exercise => res.json(exercise));
  }
);

router.delete('/:id', passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
      .then(response => {
        console.log(res);
        res.json(response);
      })
      .catch(err => console.log(err));
  }
);

module.exports = router;