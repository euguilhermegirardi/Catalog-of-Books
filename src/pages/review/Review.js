import React, { useState } from 'react';
import APIservice from '../../services/service';
import { useForm } from "react-hook-form";
import { Form } from './styles';

export default function Review({ history }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = () => {
    APIservice.createReview(JSON.stringify({name, comment}))
    setName('')
    setComment('')
    history.push('/');
  };

  return (
    <Form>
      <h3>Write your review below!</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="review">Name:</label>
        <input
          className="name"
          placeholder="Your name..."
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          ref={register({ required: true, minLength: 2 })}
        />
        {errors.name && errors.name.type === 'required' && (<p>This field is required.</p>)}
        {errors.name && errors.name.type === 'minLength' && (<p>This field requires min length of 2.</p>)}

        <label htmlFor="review">Comment:</label>
        <textarea
          className="comment"
          placeholder="Your review..."
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          name="comment"
          ref={register({ required: true})}
        />
        {errors.comment && errors.comment.type === 'required' && (<p>This field is required.</p>)}

        <button className="btn">Submit</button>
      </form>
    </Form>
  )
};

