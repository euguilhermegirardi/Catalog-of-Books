import { useState } from 'react';
import axios from 'axios';

const useForm = () => {
  const [books, setBooks] = useState('');
  const [result, setResult] = useState([]);


  function handleChange(e) {
    const book = e.target.value;
    setBooks(book);
  };

  function onSubmit() {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=' + books + '&maxResults=40')
    .then(res => setResult(res.data.items))

    setBooks('')
  };

  return {
    books,
    handleChange,
    onSubmit,
    result,
  }
};

export default useForm;
