import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
  background-color: #01579b;
  color: #fff;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkContainer = styled.div`
  display: flex;
`;

export const Links = styled(Link)`
  flex-grow: 1;
  font-size: 1.2rem;
  padding: 1rem;
  text-decoration: none;
  color: #fff;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
    padding: 0;
    margin-left: 1rem;
  }
`;
