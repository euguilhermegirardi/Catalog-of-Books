import styled from 'styled-components';

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  max-width: 1150px;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    max-width: 350px;
  }
`;
