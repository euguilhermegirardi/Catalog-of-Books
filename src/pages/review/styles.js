import styled from 'styled-components';

export const Form = styled.div`
  margin: 2rem auto 3rem auto;
  max-width: 60rem;
  color: #01579b;
  border-radius: 5px;
  padding: 20px;
  background-color: #efefef;

  h3 {
    font-size: 2.5rem;
    font-weight: 100;
    letter-spacing: 1px;
    margin-bottom: 3rem;
  }

  label {
    font-size: 1.4rem;
    margin-left: 2px;
  }


  input {
    font-size: 1.2rem;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  textarea {
    font-size: 1.2rem;
    width: 100%;
    height: 20rem;
    margin: 8px 0;
    padding: 12px 20px;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  p {
      color: red;
      margin: 3px 0;
    }

  .btn {
    font-size: 1.2rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    width: 100%;
    background-color: #01579b;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: .2s ease-out;

    &:hover {
      background-color: #0277bd;
    }
  }
`;
