const createReview = {
  createReview: data => {
    return fetch('https://json-server-catalog-of-books.herokuapp.com/comments', {method: 'POST', headers: {'content-type': 'application/json'}, body: data})
    .then(res => res.json());
  }
};

export default createReview;

