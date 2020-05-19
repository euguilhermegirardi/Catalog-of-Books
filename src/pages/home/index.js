import React, { useState, useEffect } from 'react';
import jsonAPI from '../../services/json-api';
import { Link } from 'react-router-dom';
import { GridContainer } from '../styles/styles';
import { Content, ReviewContainer, BtnContainer } from './styles';
import Reviews from '../../components/reviews/Reviews';
import Button from '@material-ui/core/Button';

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
      <ReviewContainer>
        <h4>Reviews about the website:</h4>
        <Reviews comments={comments}/>
        <BtnContainer>
          <Link to="/review"><Button className="btn" variant="contained" color="primary">Write a review!</Button></Link>
        </BtnContainer>
      </ReviewContainer>
    </Content>
    </GridContainer>
  )
};
