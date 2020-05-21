import { useState, useEffect } from 'react';
import axios from 'axios';

const useForm = (callback, validateForm) => {
  const [books, setBooks] = useState('');
  const [result, setResult] = useState([]);
  const [errors, setErrors] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  function handleChange(e) {
    const book = e.target.value;
    setBooks(book);
  };

  function handleSubmit(e) {
    e.preventDefault();

    axios.get('https://www.googleapis.com/books/v1/volumes?q=' + books + '&maxResults=40')
    .then(res => setResult(res.data.items))

    setBooks('')
    setErrors(validateForm(books))
    setIsSubmitting(true)
  };

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [callback, errors, isSubmitting]);

  return {
    books,
    handleChange,
    handleSubmit,
    result,
    errors
  }
};

export default useForm;
