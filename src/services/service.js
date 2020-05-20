const createReview = {
  createReview: data => {
    return fetch('http://localhost:3001/comments', {method: 'POST', headers: {'content-type': 'application/json'}, body: data})
    .then(res => res.json());
  }
};

export default createReview;
