import React, { useState, useEffect } from 'react';
import jsonAPI from '../../services/json-api';
import { GridContainer } from '../styles/styles';
import { Content } from './styles';
import Reviews from '../../components/reviews/Reviews';

export default function Home() {
  const [text, setText] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function loadHome() {
      const resText = await jsonAPI.get('/home');
      const resComments = await jsonAPI.get('/comments');

      setText(resText.data);
      setComments(resComments.data);
    };
    loadHome();
  }, []);

  return (
    <GridContainer>
    <Content>
       {text.map(item => (
        <div key={item.id}>
          <h1>{item.h1}</h1>
          <p>{item.paragraph}</p>
        </div>
      ))}
      <Reviews comments={comments}/>
    </Content>
    </GridContainer>
  )
};
