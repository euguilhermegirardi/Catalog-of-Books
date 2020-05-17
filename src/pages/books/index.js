import React, { useState } from 'react';
import axios from 'axios';
import { GridContainer } from '../styles/styles';

export default function Books() {
  const [books, setBooks] = useState('');
  const [result, setResult] = useState([]);

  function handleChange(e) {
    const book = e.target.value;
    setBooks(book);
  };

  function handleSubmit(e) {
    e.preventDefault();
    axios.get('https://www.googleapis.com/books/v1/volumes?q=' + books + '&maxResults=40')
    .then(res => {
      setResult(res.data.items);
    })
  };


  return (
    <>
      <GridContainer>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              onChange={handleChange}
              placeholder="Search a book on Google"
              autoComplete="off"
            />
          </div>
          <button type="submit">Search</button>
        </form>
        {result.map(book =>
          <a key={book.id} href={book.volumeInfo.previewLink}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book" />
          </a>
        )}
      </GridContainer>
    </>
  )
};
