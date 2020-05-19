import React from 'react';
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';

export default function Home() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">

        <div className="input-field col s4">
          <label htmlFor="name">Name</label>
          <input ref={register} id="name" type="text" name="name" />
        </div>

        <div className="input-field col s4">
          <label htmlFor="review">Review</label>
          <input ref={register} id="review" type="text" name="review" />
        </div>

      </div>
      <Button type="submit">Save</Button>
    </form>
  )
};

