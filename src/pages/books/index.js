import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GridContainer } from '../styles/styles';
import { Form, BooksContainer } from './styles';
import Button from '@material-ui/core/Button';
import validateBooksForm from '../../utils/validateBooksForm';
import useBooksForm from '../../utils/useBooksForm';

export default function Books() {
  const { books, handleChange, handleSubmit, result, errors } = useBooksForm(submit, validateBooksForm);
  const [loadBooks, setLoadBooks] = useState([]);

  function submit() {
    console.log('it works!');
  }

  function fetchBooks() {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
    .then(response => setLoadBooks(response.data.items))
  };

  useEffect(() => {
    fetchBooks();
  }, [])

  return (
    <>
      <GridContainer>
        <Form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={books}
              onChange={handleChange}
              placeholder="Search a book on Google"
              autoComplete="off"
            />
            {errors && <p>{errors}</p>}
            <Button className="btn" type="submit" variant="contained" color="primary">Search</Button>
          </div>
          <h3>Some books you might like:</h3>
        </Form>

        <BooksContainer>
        {loadBooks.map(book =>
          <a key={book.id} href={book.volumeInfo.previewLink}>
          <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null} alt="Book" />
          <p>{book.volumeInfo.title}</p>
          </a>
        )}
        </BooksContainer>

        <BooksContainer>
        {result.map(book =>
          <a key={book.id} href={book.volumeInfo.previewLink}>
            <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null} alt="Book" />
            <p>{book.volumeInfo.title}</p>
          </a>
        )}
        </BooksContainer>

      </GridContainer>
    </>
  )
};
