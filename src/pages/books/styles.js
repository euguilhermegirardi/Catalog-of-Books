import styled from 'styled-components';

export const Form = styled.form`
  grid-column: 1/9;

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    input {
      background-color: ##fff;
      padding: 8px;
      font-size: 1.2rem;
      border-radius: 3px;
      margin: 20px 0;
      transition: width 0.4s ease-in-out;
      width: 330px;
    }

    .btn {
      width: 150px;
      background-color: #01579b;
    }

    input[type=text]:focus {
      width: 450px;
    }
  }

  h3 {
    font-size: 25px;
    color: #01579b;
    margin: 40px 0 25px 0;
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
