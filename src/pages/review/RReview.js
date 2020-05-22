import React, { useState, useEffect } from 'react';

export default function RReview() {
  const formDefaultValues = {
    name: '',
    comment: ''
  };
  const [formValues, setFormValues] = useState(formDefaultValues);
  // destructuring to call 'name', not  use 'formValues.name' and 'formValues.comment
  const { name, comment } = formValues;

  const formDefaultErrors = {
    name: [],
    comment: []
  };
  const [formErrors, setFormErrors] = useState(formDefaultErrors)

  useEffect(() => {
    console.dir(formValues)
  }, [formValues]);

  function handleChange(e, validators) {
    const target = e.target
    setFormValues(prevState => ({
      ...prevState,
      [target.name]: target.value
    }))

    handleValidations(target, validators)
  };

  function handleValidations(target, validators) {
    validators.forEach(validation => {
      const result = validation(target.value)
      const errors = formErrors[target.name]

      if(result.valid) {
        if(errors.includes(result.message)) {
          setFormErrors(prevState => ({
            ...prevState,
            [target.name]: errors.filter(error => error !== result.message)
          }))
        }
      } else {
        // Check first to see if there is a error message already
        if(!errors.includes(result.message)){
          setFormErrors(prevState => ({
            ...prevState,
            [target.name]: [...errors, result.message]
          }))
        }
      }
    })
  };

  function noBlanks(value) {
    return {
      valid: value.replace(/\s+/,'').length > 0,
      message: 'cannot be blank.'
    }
  };

  return (
    <div>
      <div>
        <input
        type="text"
        value={name}
        name={'name'}
        onChange={(e) => {handleChange(e, [noBlanks])}}
        placeholder="Your name"
        />
        {
          formErrors['name'][0] ? <span>{formErrors['name'][0]}</span> : null
        }
      </div>

      <div>
        <input
        type="text"
        value={comment}
        name={'comment'}
        onChange={(e) => {handleChange(e, [noBlanks])}}
        placeholder="Your review..."
        />
        {
          formErrors['comment'][0] ? <span>{formErrors['comment'][0]}</span> : null
        }
      </div>
    </div>
  )
};
