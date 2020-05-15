import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Books from './pages/books';
import Authors from './pages/authors';
import NotFound from './pages/notFound/index';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/books' component={Books} />
        <Route path='/authors' component={Authors} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
