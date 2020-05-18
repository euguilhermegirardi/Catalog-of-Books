import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GridContainer } from '../styles/styles';
import { Form, BooksContainer } from './styles';
import Button from '@material-ui/core/Button';

export default function Books() {
  const [books, setBooks] = useState('');
  const [result, setResult] = useState([]);

  const [loadBooks, setLoadBooks] = useState([]);
  // const [error, setError] = useState(null);

  function handleInput(e) {
    const book = e.target.value;
    setBooks(book);
  };

  function handleSubmit(e) {
    e.preventDefault();
    axios.get('https://www.googleapis.com/books/v1/volumes?q=' + books + '&maxResults=40')
    .then(res => setResult(res.data.items))
    // .catch(err => setError(err));
  };


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
              onChange={handleInput}
              placeholder="Search a book on Google"
              autoComplete="off"
            />
            <Button className="btn" type="submit" variant="contained" color="primary">Search</Button>
          </div>
          <h3>Some books you might like:</h3>
        </Form>

        <BooksContainer>
        {loadBooks.map(book =>
          <a key={book.id} href={book.volumeInfo.previewLink}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book" />
          <p>{book.volumeInfo.title}</p>
          </a>
        )}
        </BooksContainer>


        <BooksContainer>
        {result.map(book =>
          <a key={book.id} href={book.volumeInfo.previewLink}>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book" />
            <p>{book.volumeInfo.title}</p>
          </a>
        )}
        </BooksContainer>

      </GridContainer>
    </>
  )
};
