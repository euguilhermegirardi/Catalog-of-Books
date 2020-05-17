import React from 'react';
import { Content } from './styles';

const Reviews = props => {
 let infos = props.comments.map(info =>
  <div key={info.id}>
    <h1>{info.name}</h1>
    <p>{info.comment}</p>
  </div>
  );

 return (
   <Content>
    {infos}
   </Content>
 )
};

export default Reviews;
