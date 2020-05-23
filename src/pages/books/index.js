import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GridContainer } from '../styles/styles';
import { useForm } from "react-hook-form";
import { Form, BooksContainer, H3 } from './styles';
import fetchSearchBooks from '../../utils/fetchSearchBooks';
import Button from '@material-ui/core/Button';


export default function Books() {
  const [loadBooks, setLoadBooks] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  const {books, handleChange, onSubmit, result } = fetchSearchBooks();

  useEffect(() => {
    function fetchBooks() {
      axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
      .then(response => setLoadBooks(response.data.items))
    };
    fetchBooks();
  }, [])

  return (
    <>
      <GridContainer>
        <H3>Some books you may like:</H3>
        <BooksContainer>
        {loadBooks.map(book =>
          <a key={book.id} href={book.volumeInfo.previewLink}>
            <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null} alt="Book" />
            <p>{book.volumeInfo.title}</p>
          </a>
        )}
        </BooksContainer>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h3>Search for a book!</h3>
            <input
              type="text"
              value={books}
              onChange={handleChange}
              placeholder="Search a book on Google"
              autoComplete="off"
              name="book"
              ref={register({ required: true, minLength: 2 })}
            />
            {errors.book && errors.book.type === 'required' && (<p>This field is required.</p>)}
            {errors.book && errors.book.type === 'minLength' && (<p>This field requires min length of 2.</p>)}

            <Button className="btn" type="submit" variant="contained" color="primary">Search</Button>
          </div>

        </Form>

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
