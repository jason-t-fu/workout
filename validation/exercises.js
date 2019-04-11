
const Validator = require('validator');
const validText = require('../validation/valid-text')

module.exports = function validateExerciseInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';

  if (Validator.isEmpty) {
    errors.name = "Name field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};