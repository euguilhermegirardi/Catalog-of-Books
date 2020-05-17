import styled from 'styled-components';

export const Content = styled.section`
  grid-column: 1/9;
  display: flex;
  flex-direction: column;
  color: #01579b;

  h1 {
    font-size: 3rem;
    margin: 2rem;
    margin-right: 20rem;
  }

  p {
    font-size: 1.8rem;
    margin: 2rem;
    margin-right: 20rem;
  }

  h4 {
    margin: 3rem 0 2rem 2rem;
    margin-top: 3rem;
    font-size: 1.8rem;
    font-weight: normal;
    letter-spacing: 1px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  max-height: 35rem;
  max-width: 20.7rem;
  background-color: #003070;
  border-radius: 5px;
  margin: 2rem 3rem 5rem 0;
  padding: 1rem;
  color: #fff;

  p {
    font-size: 1.5rem;
    margin: 1.5rem;
    letter-spacing: 2px;
  }
`;

