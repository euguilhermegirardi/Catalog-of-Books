export default function validateReview(name, comment) {
  let nameError = [];
  let commentError = [];

  if(!name) {
    nameError = "Type your name!";
  };

  if(!comment) {
    commentError = "Leave your comment!";
  };

  return { nameError, commentError };
};
