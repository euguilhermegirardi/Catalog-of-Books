export default function validate(books) {
  let errors = [];

  if(!books) {
    errors = "Type a book!";
  };

  return errors;
};
