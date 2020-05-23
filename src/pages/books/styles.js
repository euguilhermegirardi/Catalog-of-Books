import styled from 'styled-components';

export const H3 = styled.h3`
  font-size: 25px;
  color: #01579b;
  margin: 1.8rem 0 1rem 0;
  grid-column: 1/9;
`;

export const Form = styled.form`
  grid-column: 1/9;

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    h3 {
      margin: 2rem 0 1rem 0;
      font-size: 25px;
      color: #01579b;
    }

    input {
      background-color: ##fff;
      padding: 8px;
      font-size: 1.2rem;
      border-radius: 3px;
      transition: width 0.4s ease-in-out;
      width: 330px;
    }

    p {
      color: red;
      margin: 3px 0;
    }

    .btn {
      margin: 8px 0;
      width: 150px;
      background-color: #01579b;
    }

    input[type=text]:focus {
      width: 450px;
    }
  }
`;

export const BooksContainer = styled.div`
  grid-column: 1/9;
  display: flex;
  flex-wrap: wrap;

  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 150px;
    min-height: 130px;
    margin: 8px;
    transition: .2s ease-in;

    &:hover {
      opacity: 0.5;
    }

    img {
      border-radius: 3px;
    }

    p {
      font-size: 14px;
      letter-spacing: 1px;
      color: #01579b;
      text-align: center;
    }
  }
`;
