import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Books from './pages/books';
import Authors from './pages/authors';
import Review from './pages/review/Review';
import NotFound from './pages/notFound';

export default function Routes() {
  return (
    // Switch requires calling one route at a time.
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/books" component={Books} />
      <Route path="/authors" component={Authors} />
      <Route path="/review" component={Review} />
      <Route component={NotFound} />
    </Switch>
  );
}
