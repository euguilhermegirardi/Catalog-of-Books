import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  justify-items: center;
  margin-bottom: 2rem;
  grid-column-gap: 2rem;

  div {
    margin: 1rem;
    color: #616161;
    background-color: #fff;
    /* max-width: 25rem;
    max-height: 35rem; */
    min-width: 25rem;
    min-height: 15rem;
    border-radius: 3px;
    border: 1px solid #ccc;

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
