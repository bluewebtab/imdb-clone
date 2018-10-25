const   Validator = require('validator');
const isEmpty = require('./is-empty');
module.exports = function validatePostInput(data){
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text: '';

  if(!Validator.isLength(data.text, {min: 10, max: 300})){
    error.text = 'Post must be between 10 and 30 characters'
  }

  if(Validator.isEmpty(data.text)){
    errors.text = 'Text field is required'
  }
  

return {
  errors,
  isValid: isEmpty(errors)
}
}