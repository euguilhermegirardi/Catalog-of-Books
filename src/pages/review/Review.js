import React, { useState } from 'react';
import APIservice from '../../services/service';
import { Form } from './styles';

export default function Review({ history }) {

  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    APIservice.createReview(JSON.stringify({name, comment}))
    setName('')
    setComment('')
    history.push('/');
  };

  return (
    <Form>
      <h3>Write your review below!</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="review">Name:</label>
        <input className="name" placeholder="Your name..." onChange={(e) => setName(e.target.value)} value={name}/>
        <label htmlFor="review">Comment:</label>
        <textarea className="comment" placeholder="Your review..." onChange={(e) => setComment(e.target.value)} value={comment}/>
        <button className="btn">Submit</button>
      </form>
    </Form>
  )
};

