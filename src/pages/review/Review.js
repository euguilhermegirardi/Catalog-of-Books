import React, { useState } from 'react';
import APIservice from '../../services/service';
import { Form } from './styles';

export default function Review({ history }) {
  const [review, setReview] = useState('');
  const[name, setName] = useState('');
  const[comment, setComment] = useState('');

  const handleSubmit = (e, review, setReview, name, setName, comment, setComment) => {
    e.preventDefault();

    APIservice.createReview(JSON.stringify(...review, {name, comment}))
    .then(res => res)
    .then(({name, comment}) => {
      setReview({review: name, comment})
    })
    setName('')
    setComment('')

    history.push('/');
  };

  return (
    <Form>
      <h3>Write your review below!</h3>
      <form onSubmit={(e) => handleSubmit(e, review, setReview, name, setName, comment, setComment)}>

        <label htmlFor="review">Name:</label>
        <input className="name" placeholder="Your name..." onChange={(e) => setName(e.target.value)} value={name}/>

        <label htmlFor="review">Comment:</label>
        <textarea className="comment" placeholder="Your review..." onChange={(e) => setComment(e.target.value)} value={comment}/>

        <button className="btn">Submit</button>
      </form>
    </Form>
  )
};

