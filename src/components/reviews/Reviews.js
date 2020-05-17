import React from 'react';
import { Container } from './styles';

const Reviews = props => {

 return (
   <Container>
      {props.comments.map(infos =>
          <div key={infos.id}>
            <div></div>
            <h1>{infos.name} says:</h1>
            <p>{infos.comment}</p>
          </div>
      )}
   </Container>
 )
};

export default Reviews;
