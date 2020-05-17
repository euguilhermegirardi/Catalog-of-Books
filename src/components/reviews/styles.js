import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;

  div {
    margin: 1rem;
    color: #fff;
    background-color: #424242;
    max-width: 25rem;
    max-height: 35rem;
    border-radius: 3px;

    div {
      background-color: #6d6d6d;
      height: 1.5rem;
      margin: 0;
    }

    h1 {
      font-size: 1.5rem;
      font-weight: 100;
      margin: 0;
      padding: 1rem;
    }

    p {
      font-size: 1.2rem;
      margin: 1rem 0 0 0;
      padding: 1rem;
      letter-spacing: .5px;
    }
  }
`;
